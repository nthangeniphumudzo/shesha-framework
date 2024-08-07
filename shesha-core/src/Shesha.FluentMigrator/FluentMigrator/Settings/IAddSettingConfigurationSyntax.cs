﻿namespace Shesha.FluentMigrator.Settings
{
    /// <summary>
    /// Add setting configuration syntax
    /// </summary>
    public interface IAddSettingConfigurationSyntax
    {
        /// <summary>
        /// Skip creation of setting configuration when it already exist
        /// </summary>
        /// <returns></returns>
        IAddSettingConfigurationSyntax IfNotExists();

        /// <summary>
        /// Set module name. By default it's set to a module current migration belongs to
        /// </summary>
        IAddSettingConfigurationSyntax OnModule(string moduleName);

        /// <summary>
        /// Set description
        /// </summary>
        IAddSettingConfigurationSyntax WithDescription(string description);

        /// <summary>
        /// Mark setting as client specific
        /// </summary>
        IAddSettingConfigurationSyntax IsClientSpecific();

        /// <summary>
        /// Set custom edit for
        /// </summary>
        IAddSettingConfigurationSyntax WithEditForm(string module, string name);

        /// <summary>
        /// Set access mode
        /// </summary>
        IAddSettingConfigurationSyntax WithAccessMode(SettingAccessMode accessMode);

        /// <summary>
        /// Set category
        /// </summary>
        IAddSettingConfigurationSyntax WithCategory(string category);

        /// <summary>
        /// Set client access mode
        /// </summary>
        IAddSettingConfigurationSyntax WithClientAccess(UserSettingAccessMode clientAccess);

        /// <summary>
        /// Mark setting as user specific
        /// </summary>
        IAddSettingConfigurationSyntax IsUserSpecific();

        #region data types

        IAddSettingConfigurationSyntax AsString(string? dataFormat = null);
        IAddSettingConfigurationSyntax AsBoolean();
        IAddSettingConfigurationSyntax AsGuid();
        IAddSettingConfigurationSyntax AsInt64();
        IAddSettingConfigurationSyntax AsDouble();
        IAddSettingConfigurationSyntax AsComplexObject(string className);
        IAddSettingConfigurationSyntax AsDateTime();
        IAddSettingConfigurationSyntax AsTime();
        IAddSettingConfigurationSyntax AsReferenceList(string moduleName, string listName);

        #endregion
    }
}
