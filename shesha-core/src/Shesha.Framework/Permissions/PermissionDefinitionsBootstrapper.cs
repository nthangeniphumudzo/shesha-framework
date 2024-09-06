﻿using Abp.Dependency;
using Abp.Domain.Repositories;
using Abp.Reflection;
using Shesha.Bootstrappers;
using Shesha.Configuration.Runtime;
using Shesha.Domain;
using Shesha.Metadata;
using Shesha.Metadata.Dtos;
using Shesha.Reflection;
using Shesha.Utilities;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Domain.Uow;
using Abp.ObjectMapping;
using Shesha.Authorization;
using Shesha.Permissions;
using Shesha.ConfigurationItems;

namespace Shesha.Permission
{
    [DependsOnBootstrapper(typeof(ConfigurableModuleBootstrapper))]
    public class PermissionDefinitionsBootstrapper : IBootstrapper, ITransientDependency
    {
        private readonly IShaPermissionManager _permissionManager;
        private readonly IRepository<PermissionDefinition, Guid> _permissionDefinitionRepository;
        private readonly IUnitOfWorkManager _unitOfWorkManager;

        public PermissionDefinitionsBootstrapper(
            IShaPermissionManager permissionManager,
            IRepository<PermissionDefinition, Guid> permissionDefinitionRepository,
            IUnitOfWorkManager unitOfWorkManager)
        {
            _permissionManager = permissionManager;
            _permissionDefinitionRepository = permissionDefinitionRepository;
            _unitOfWorkManager = unitOfWorkManager;
        }

        public async Task ProcessAsync()
        {
            using (var unitOfWork = _unitOfWorkManager.Begin())
            {
                await SetPermissionsAsync();
                await unitOfWork.CompleteAsync();
            }
            // todo: write changelog
        }

        [UnitOfWork]
        public async Task SetPermissionsAsync()
        {
            var dbPermissions = await _permissionDefinitionRepository.GetAllListAsync();

            // Update DB-related items
            var dbRootPermissions = dbPermissions.Where(x => string.IsNullOrEmpty(x.Parent)).ToList();
            foreach (var dbPermission in dbRootPermissions)
            {
                if (_permissionManager.GetPermissionOrNull(dbPermission.Name) == null)
                {
                    var permission = await _permissionManager.CreatePermissionAsync(dbPermission);
                    await CreateChildPermissionsAsync(dbPermissions, permission);
                }
                dbPermissions.Remove(dbPermission);
            }


            // Update code-related items
            while (dbPermissions.Any())
            {
                var dbPermission = dbPermissions.FirstOrDefault();
                if (dbPermission != null)
                {
                    var permission = _permissionManager.GetPermissionOrNull(dbPermission.Parent);
                    while (permission == null && dbPermissions.Any(x => x.Name == dbPermission?.Parent))
                    {
                        dbPermission = dbPermissions.FirstOrDefault(x => x.Name == dbPermission?.Parent);
                        permission = _permissionManager.GetPermissionOrNull(dbPermission?.Parent);
                    }

                    if (permission != null)
                    {
                        await CreateChildPermissionsAsync(dbPermissions, permission);
                    }
                    else
                    {
                        // remove permission with missed parent
                        await _permissionDefinitionRepository.DeleteAsync(dbPermission);
                    }
                    dbPermissions.Remove(dbPermission);
                }
            }
        }

        private async Task CreateChildPermissionsAsync(List<PermissionDefinition> dbPermissions, Abp.Authorization.Permission permission)
        {
            var dbChildPermissions = dbPermissions.Where(x => x.Parent == permission.Name).ToList();
            foreach (var dbChildPermission in dbChildPermissions)
            {
                if (_permissionManager.GetPermissionOrNull(dbChildPermission.Name) == null)
                {
                    var childPermission = await _permissionManager.CreatePermissionAsync(dbChildPermission);
                    await CreateChildPermissionsAsync(dbPermissions, childPermission);
                    dbPermissions.Remove(dbChildPermission);
                }
            }
        }

    }
}
