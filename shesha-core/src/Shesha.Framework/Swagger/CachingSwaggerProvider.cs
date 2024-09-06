﻿using Abp.Dependency;
using Abp.Events.Bus.Entities;
using Abp.Events.Bus.Handlers;
using Abp.Runtime.Caching;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Shesha.Domain;
using Shesha.Permissions;
using Swashbuckle.AspNetCore.Swagger;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Shesha.Swagger
{
    public class CachingSwaggerProvider : ISwaggerProvider,
        IEventHandler<EntityChangedEventData<EntityProperty>>,
        IEventHandler<EntityChangedEventData<EntityConfig>>,
        IEventHandler<EntityChangedEventData<PermissionedObject>>,
        ITransientDependency
    {
        private readonly ICacheManager _cacheManager;

        private readonly SwaggerGenerator _swaggerGenerator;

        /// <summary>
        /// Cache of the Swagger docs
        /// </summary>
        protected ITypedCache<string, OpenApiDocument> SwaggerCache => _cacheManager.GetCache<string, OpenApiDocument>("SwaggerCache");

        public CachingSwaggerProvider(
            IOptions<SwaggerGeneratorOptions> optionsAccessor,
            ISchemaGenerator schemaGenerator,
            ICacheManager cacheManager,
            IIocResolver iocResolver)
        {
            _cacheManager = cacheManager;

            var apiDescriptionsProvider = iocResolver.Resolve<IApiDescriptionGroupCollectionProvider>();

            _swaggerGenerator = new SwaggerGenerator(optionsAccessor.Value, apiDescriptionsProvider, schemaGenerator);
        }

        public OpenApiDocument GetSwagger(string documentName, string host = null, string basePath = null)
        {
            return SwaggerCache.Get(documentName, (_) => _swaggerGenerator.GetSwagger(documentName, host, basePath));
        }

        public void ClearCache()
        {
            SwaggerCache.Clear();
        }

        public void HandleEvent(EntityChangedEventData<EntityProperty> eventData)
        {
            ClearCache();
        }

        public void HandleEvent(EntityChangedEventData<EntityConfig> eventData)
        {
            ClearCache();
        }

        public void HandleEvent(EntityChangedEventData<PermissionedObject> eventData)
        {
            if (eventData.Entity.Type == ShaPermissionedObjectsTypes.EntityAction
                || eventData.Entity.Type == ShaPermissionedObjectsTypes.Entity
                || eventData.Entity.Type == ShaPermissionedObjectsTypes.WebApiAction
                || eventData.Entity.Type == ShaPermissionedObjectsTypes.WebApi)
                ClearCache();
        }
    }
}
