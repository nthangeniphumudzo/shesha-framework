﻿using Abp.Dependency;
using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Newtonsoft.Json;
using Shesha.ConfigurationItems;
using Shesha.ConfigurationItems.Distribution;
using Shesha.Domain;
using Shesha.Domain.ConfigurationItems;
using Shesha.Extensions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Shesha.Services.ReferenceLists.Distribution
{
    /// <summary>
    /// Reference list import
    /// </summary>
    public class ReferenceListImport: IReferenceListImport, ITransientDependency
    {
        private readonly IRepository<ReferenceList, Guid> _refListRepo;
        private readonly IRepository<ReferenceListItem, Guid> _refListItemRepo;
        private readonly IRepository<Module, Guid> _moduleRepo;
        private readonly IReferenceListManager _refListManger;
        private readonly IUnitOfWorkManager _unitOfWorkManager;

        public ReferenceListImport(IReferenceListManager formManger, IRepository<ReferenceList, Guid> refListRepo, IRepository<ReferenceListItem, Guid> refListItemRepo, IRepository<Module, Guid> moduleRepo, IUnitOfWorkManager unitOfWorkManager)
        {
            _refListManger = formManger;
            _refListRepo = refListRepo;
            _refListItemRepo = refListItemRepo;
            _moduleRepo = moduleRepo;
            _unitOfWorkManager = unitOfWorkManager;
        }

        public string ItemType => ReferenceList.ItemTypeName;

        /// inheritedDoc
        public async Task<ConfigurationItemBase> ImportItemAsync(DistributedConfigurableItemBase item, IConfigurationItemsImportContext context) 
        {
            if (item == null)
                throw new ArgumentNullException(nameof(item));

            if (!(item is DistributedReferenceList refListItem))
                throw new NotSupportedException($"{this.GetType().FullName} supports only items of type {nameof(DistributedReferenceList)}. Actual type is {item.GetType().FullName}");

            return await ImportRefListAsync(refListItem, context);
        }

        /// inheritedDoc
        public async Task<DistributedConfigurableItemBase> ReadFromJsonAsync(Stream jsonStream) 
        {
            using (var reader = new StreamReader(jsonStream))
            {
                var json = await reader.ReadToEndAsync();
                return JsonConvert.DeserializeObject<DistributedReferenceList>(json);
            }
        }

        /// inheritedDoc
        protected async Task<ConfigurationItemBase> ImportRefListAsync(DistributedReferenceList item, IConfigurationItemsImportContext context)
        {
            // check if form exists
            var existingList = await _refListRepo.GetByByFullName(item.ModuleName, item.Name).FirstOrDefaultAsync(e => e.IsLast);

            // use status specified in the context with fallback to imported value
            var statusToImport = context.ImportStatusAs ?? item.VersionStatus;
            if (existingList != null) 
            {
                switch (existingList.VersionStatus) 
                {
                    case ConfigurationItemVersionStatus.Draft:
                    case ConfigurationItemVersionStatus.Ready: 
                    {
                        // cancel existing version
                        await _refListManger.CancelVersionAsync(existingList);
                        break;
                    }
                }
                // mark existing live form as retired if we import new form as live
                if (statusToImport == ConfigurationItemVersionStatus.Live) 
                {
                    var liveVersion = existingList.VersionStatus == ConfigurationItemVersionStatus.Live
                        ? existingList
                        : await _refListRepo.GetByByFullName(item.ModuleName, item.Name).FirstOrDefaultAsync(f => f.VersionStatus == ConfigurationItemVersionStatus.Live);
                    if (liveVersion != null)
                    {
                        await _refListManger.UpdateStatusAsync(liveVersion, ConfigurationItemVersionStatus.Retired);
                        await _unitOfWorkManager.Current.SaveChangesAsync(); // save changes to guarantee sequence of update
                    }
                }

                // Create new version. Note: it copies all items
                var newListVersion = await _refListManger.CreateNewVersionWithoutItemsAsync(existingList);

                // important: set status according to the context
                newListVersion.VersionStatus = statusToImport;
                newListVersion.CreatedByImport = context.ImportResult;
                newListVersion.Normalize();

                // todo: save external Id
                // how to handle origin?

                await _refListRepo.UpdateAsync(newListVersion);

                await ImportListItemsAsync(newListVersion, item.Items);

                return newListVersion;
            } else 
            {
                var newList = new ReferenceList();
                MapToRefList(item, newList);

                // fill audit?
                newList.VersionNo = 1;
                newList.Module = await GetModuleAsync(item.ModuleName, context);

                // important: set status according to the context
                newList.VersionStatus = statusToImport;
                newList.CreatedByImport = context.ImportResult;

                newList.Normalize();

                await _refListRepo.InsertAsync(newList);

                await ImportListItemsAsync(newList, item.Items);

                return newList;
            }
        }

        private async Task ImportListItemsAsync(ReferenceList refList, List<DistributedReferenceListItem> distributedItems)
        {
            await ImportListItemLevelAsync(refList, distributedItems, null);
        }

        private async Task ImportListItemLevelAsync(ReferenceList refList, List<DistributedReferenceListItem> items, ReferenceListItem parent)
        {
            foreach (var distributedItem in items)
            {
                var item = new ReferenceListItem();

                MapListItem(distributedItem, item);
                item.ReferenceList = refList;
                item.Parent = parent;

                await _refListItemRepo.InsertAsync(item);

                if (distributedItem.ChildItems != null && distributedItem.ChildItems.Any())
                    await ImportListItemLevelAsync(refList, distributedItem.ChildItems, item);
            }
        }


        private void MapListItem(DistributedReferenceListItem src, ReferenceListItem dst)
        {
            dst.Item = src.Item;
            dst.ItemValue = src.ItemValue;
            dst.Description = src.Description;
            dst.OrderIndex = src.OrderIndex;
            // todo: decide how to handle hard linked items
            //dst.HardLinkToApplication = src.HardLinkToApplication;
            dst.Color = src.Color;
            dst.Icon = src.Icon;
            dst.ShortAlias = src.ShortAlias;
        }

        private async Task<Module> GetModuleAsync(string name, IConfigurationItemsImportContext context) 
        {
            if (string.IsNullOrWhiteSpace(name))
                return null;

            var module = await _moduleRepo.FirstOrDefaultAsync(m => m.Name == name);
            if (module == null) 
            {
                if (context.CreateModules) 
                {
                    module = new Module { Name = name, IsEnabled = true };
                    await _moduleRepo.InsertAsync(module);
                } else
                    throw new NotSupportedException($"Module `{name}` is missing in the destination");
            }

            return module;
        }

        private void MapToRefList(DistributedReferenceList item, ReferenceList refList) 
        {
            refList.Name = item.Name;
            refList.Label = item.Label;
            refList.Description = item.Description;
            refList.VersionStatus = item.VersionStatus;
            refList.Suppress = item.Suppress;
        }

        public Task<List<DistributedConfigurableItemBase>> SortItemsAsync(List<DistributedConfigurableItemBase> items)
        {
            return Task.FromResult(items);
        }
    }
}
