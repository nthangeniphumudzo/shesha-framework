﻿using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Shesha.Domain;
using Shesha.DynamicEntities;
using Shesha.Permissions;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Shesha.Tests.Permissions
{
    public class Permissions_Tests : SheshaNhTestBase
    {
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly IRepository<Person, Guid> _personRepository;
        private readonly IRepository<Organisation, Guid> _organisationRepository;
        private readonly PermissionedObjectManager _permissionedObjectManager;
        private readonly IEntityModelBinder _entityModelBinder;

        public Permissions_Tests()
        {
            _unitOfWorkManager = Resolve<IUnitOfWorkManager>();
            _personRepository = Resolve<IRepository<Person, Guid>>();
            _organisationRepository = Resolve<IRepository<Organisation, Guid>>();
            _permissionedObjectManager = Resolve<PermissionedObjectManager>();
            _entityModelBinder = Resolve<IEntityModelBinder>();
        }

        [Fact]
        public async Task GetAllApi_TestAsync()
        {
            var api = await Task.Run(() => _permissionedObjectManager.GetAllTreeAsync());
        }

        private Task GetAsync(int i)
        {
            return Task.Run(() =>
            {
                Debug.WriteLine($"Start item {i}");
                var s = DateTime.Now;
                var t = _permissionedObjectManager.Get($"shurik@{i}", "");
                Debug.WriteLine($"Executed item {i}");
                var e = DateTime.Now;
                var d = e - s;

                Debug.WriteLine($"item {i}, time: {d.Milliseconds}");
            });
        }

        [Fact]
        public void AsyncHelperTest()
        {
            LoginAsHostAdmin();

            /*using (var uow = _unitOfWorkManager.Begin(new UnitOfWorkOptions()
            {
                Timeout = TimeSpan.FromSeconds(100)
            }))
            {*/
                var l = new List<Task>();

                for(var i = 0; i < 1; i++)
                {
                    l.Add(GetAsync(i));
                }

                while (l.Any(x => !x.IsCompleted))
                {

                }

                /*await uow.CompleteAsync();
            }*/
        }
    }
}
