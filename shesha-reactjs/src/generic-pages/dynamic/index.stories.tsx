import { DynamicPage } from './';
import React from 'react';
import StoryApp from '@/components/storyBookApp';
import { addStory } from '@/stories/utils';
import { IDynamicPageProps } from './interfaces';
import { MainLayout } from '@/components';
import { Story } from '@storybook/react';

export default {
  title: 'Pages/DynamicPage',
  component: DynamicPage,
  argTypes: {},
};

// Create a master template for mapping args to render the Button component
const Template: Story<IDynamicPageProps> = (args) => (
  <StoryApp>
    <MainLayout>
      <DynamicPage {...args} />
    </MainLayout>
  </StoryApp>
);

// Reuse that template for creating different stories
export const Basic = Template.bind({});

export const EpmUserManagemenet = addStory(Template, {
  formId: { name: 'user-management-new', module: '' },
});

export const FncTSchoolDetails = addStory(Template, {
  formId: { name: 'School-Details', module: 'Boxfusion.SheshaFunctionalTests.Common' },
  id: 'ca55ba17-6af1-4a62-b0f2-fb3657faa9c1',
});

export const FncTextComponentDetails = addStory(Template, {
  formId: { name: 'text-component-details', module: 'Shesha' },
});

export const FncAddMember = addStory(Template, {
  formId: { name: 'Add-Member', module: 'Shesha' },
  mode: 'edit',
  id: '5BC9A277-63ED-4A71-919F-0B4064363BBC',
});

export const FncTableForteenTest = addStory(Template, {
  formId: { name: 'Table-forteen-Test', module: 'Shesha' },
});

export const FncPaymentDetailsView = addStory(Template, {
  formId: { name: 'payment-details-view', module: 'Shesha' },
  id: '4b47ff58-3511-486e-81a2-2299ff7c515e',
  mode: 'edit',
});

export const FncInLineEditingTable = addStory(Template, {
  formId: { name: 'in-line-editing-table', module: 'Boxfusion.SheshaFunctionalTests.Common' },
});

export const FncEmployeeAccountDetail = addStory(Template, {
  formId: { name: 'employeeaccount-details', module: 'Shesha' },
  id: '3b918830-9f1e-48e7-8298-0adc4ce1192b',
});

export const CheckBoxDetails = addStory(Template, {
  formId: { name: 'nov-details', module: 'Shesha',
 },
 id:'b7f94729-913e-4148-bef5-21ccb8349fc1'
});

export const FncTestCascadeBehavior = addStory(Template, {
  formId: { name: 'test-cascade-behavior-details', module: 'Shesha' },
  id: '4a01cced-ac97-40ee-ae28-fb2135d41a0b',
});

export const FncAddressComponentCreate = addStory(Template, {
  formId: { name: 'address-component-create', module: 'Shesha' },
  mode: 'edit',
});

export const FncMemberTableView = addStory(Template, {
  formId: { name: 'member-table-view', module: 'Shesha' },
  mode: 'edit',
});

export const FncSubjectDetails = addStory(Template, {
  formId: { name: 'subject-details', module: 'Boxfusion.SheshaFunctionalTests.Common' },
  id: 'cc9ff707-8cb3-4976-849e-0034e34dff47',
});

export const FncAddressComponentTable = addStory(Template, {
  formId: { name: 'address-component-table', module: 'Shesha' },
});

export const DepCustomerDetails = addStory(Template, {
  formId: { name: 'customer-details', module: 'Boxfusion.Dep' },
  id: '7cd698ce-9e41-4604-8ef6-08f0e1a8144d',
});

export const DepCaseDetailsDuplicate = addStory(Template, {
  formId: { name: 'case-details-duplicate', module: 'CaseManagement' },
  id: '21345e5a-7862-4f83-b5b3-0b404967915c',
});

export const DepStarterTemplate = addStory(Template, {
  formId: { name: 'service-requests-mapule', module: 'StarterTemplate' },
});

export const OrganisationEdit = addStory(Template, {
  formId: {
    name: 'organisation-edit',
    module: 'Test Module',
    version: 1,
  },
  id: '75666793-0273-49AC-9C2E-1C2A8A5353A1',
});

export const PersonEdit = addStory(Template, {
  formId: {
    name: 'person-edit',
    module: 'Test Module',
    version: 7,
  },
  id: '32E2B3DD-4D99-4542-AF71-134EC7C0E2CE',
});

export const PersonDetails = addStory(Template, {
  formId: {
    name: 'person-details',
    module: 'Test Module',
    version: 1,
  },
  id: '32E2B3DD-4D99-4542-AF71-134EC7C0E2CE',
});

export const FormDetails = addStory(Template, {
  formId: {
    name: 'form-details',
    module: 'shesha',
    version: 1,
  },
});

export const PermissionEdit = addStory(Template, {
  formId: {
    name: 'permission-edit',
    module: 'Test Module',
    version: 2,
  },
});

export const Fetchers = addStory(Template, {
  formId: {
    name: 'fetchers',
    module: 'TestModule',
  },
  mode: 'edit',
});

export const WorkflowDefinitions = addStory(Template, {
  formId: {
    name: 'workflow-definitions',
    module: 'Shesha.Enterprise.Workflow',
  },
});

export const RefListStatusDetails = addStory(Template, {
  formId: {
    name: 'mergechanges-details',
    module: 'Boxfusion.SheshaFunctionalTests.Common',
  },
  mode: 'readonly',
  id: 'd6829b83-14e3-474a-a28d-0e27cba796cb',
});
export const DataList = addStory(Template, {
  formId: {
    name: 'alex-test',
    module: 'TestModule',
  },
});

export const Forms = addStory(Template, {
  formId: {
    name: 'forms',
    module: 'shesha',
  },
});

export const MyItems = addStory(Template, {
  formId: {
    name: 'workflows-my-items',
    module: 'Shesha.Enterprise.Workflow',
  },
});

export const CrashFix = addStory(Template, {
  formId: {
    name: 'reflist-test-detailsview',
    module: 'Boxfusion.SheshaFunctionalTests.Common',
  },
  id: '445fcddd-adeb-4e7b-8d58-0bbaf494635f'
});
