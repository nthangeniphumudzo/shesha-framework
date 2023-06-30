﻿using FluentMigrator;

namespace Shesha.Migrations.Core
{
    [Migration(20220307121999), MsSqlOnly]
    public class M20220307121999 : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Core_Addresses").AlterColumn("AddressTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_Areas").AlterColumn("AreaTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_BankAccounts").AlterColumn("BankLkp").AsInt64().Nullable();
            Alter.Table("Core_BankAccounts").AlterColumn("AccountTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_CheckListItems").AlterColumn("ItemTypeLkp").AsInt64().NotNullable();
            Alter.Table("Core_CheckListItemSelections").AlterColumn("SelectionLkp").AsInt64().Nullable();
            Alter.Table("Core_Areas").AlterColumn("AreaTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_Areas").AlterColumn("AreaTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_DistributionListItems").AlterColumn("TypeLkp").AsInt64().NotNullable();
            Alter.Table("Core_DistributionListItems").AlterColumn("SubTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_Persons").AlterColumn("TitleLkp").AsInt64().Nullable();
            Alter.Table("Core_Persons").AlterColumn("GenderLkp").AsInt64().Nullable();
            Alter.Table("Core_Persons").AlterColumn("PreferredContactMethodLkp").AsInt64().Nullable();
            Alter.Table("Core_Persons").AlterColumn("TypeOfAccountLkp").AsInt64().Nullable();
            Alter.Table("Core_Persons").AlterColumn("SecurityClearanceLkp").AsInt64().Nullable();
            Alter.Table("Core_Persons").AlterColumn("SignatureTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_Facilities").AlterColumn("FacilityTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_ImportResults").AlterColumn("SourceTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_Areas").AlterColumn("AreaTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_LogonMessages").AlterColumn("VisibilityLkp").AsInt64().NotNullable();
            Alter.Table("Core_Notes").AlterColumn("CategoryLkp").AsInt64().Nullable();
            Alter.Table("Core_Notes").AlterColumn("PriorityLkp").AsInt64().Nullable();
            Alter.Table("Core_NotificationMessages").AlterColumn("SendTypeLkp").AsInt64().NotNullable();
            Alter.Table("Core_NotificationMessages").AlterColumn("StatusLkp").AsInt64().NotNullable();
            Alter.Table("Core_NotificationTemplates").AlterColumn("SendTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_NotificationTemplates").AlterColumn("BodyFormatLkp").AsInt64().Nullable();
            Alter.Table("Core_Orders").AlterColumn("StatusLkp").AsInt64().Nullable();
            Alter.Table("Core_Organisations").AlterColumn("OrganisationTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_Organisations").AlterColumn("ExtSysSyncStatusLkp").AsInt64().Nullable();
            Alter.Table("Core_OrganisationAddresses").AlterColumn("RoleLkp").AsInt64().Nullable();
            Alter.Table("Core_OrganisationBankAccounts").AlterColumn("RoleLkp").AsInt64().Nullable();
            Alter.Table("Core_Organisations").AlterColumn("OrganisationTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_Organisations").AlterColumn("ExtSysSyncStatusLkp").AsInt64().Nullable();
            Alter.Table("Core_OrganisationPersons").AlterColumn("RoleLkp").AsInt64().Nullable();
            Alter.Table("Core_OrganisationPostAppointments").AlterColumn("AppointmentStatusLkp").AsInt64().NotNullable();
            Alter.Table("Core_Organisations").AlterColumn("OrganisationTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_Organisations").AlterColumn("ExtSysSyncStatusLkp").AsInt64().Nullable();
            Alter.Table("Core_Periods").AlterColumn("PeriodTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_Persons").AlterColumn("TitleLkp").AsInt64().Nullable();
            Alter.Table("Core_Persons").AlterColumn("GenderLkp").AsInt64().Nullable();
            Alter.Table("Core_Persons").AlterColumn("PreferredContactMethodLkp").AsInt64().Nullable();
            Alter.Table("Core_Persons").AlterColumn("TypeOfAccountLkp").AsInt64().Nullable();
            Alter.Table("Core_Areas").AlterColumn("AreaTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_Services").AlterColumn("ServiceCategoryLkp").AsInt64().Nullable();
            Alter.Table("Core_Organisations").AlterColumn("OrganisationTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_Organisations").AlterColumn("ExtSysSyncStatusLkp").AsInt64().Nullable();
            Alter.Table("Core_Organisations").AlterColumn("StatusLkp").AsInt64().Nullable();
            Alter.Table("Core_Organisations").AlterColumn("OrganisationTypeLkp").AsInt64().Nullable();
            Alter.Table("Core_Organisations").AlterColumn("ExtSysSyncStatusLkp").AsInt64().Nullable();
            Alter.Table("Core_TeamMembers").AlterColumn("RoleLkp").AsInt64().Nullable();
        }
    }
}
