import React from 'react';
import { SecurityScanOutlined } from '@ant-design/icons';
import { ConfigurableFormItem } from '@/components';
import PermissionAutocomplete from '@/components/permissionAutocomplete';
import { IConfigurableFormComponent, IToolboxComponent } from '@/index';

export interface IPermissionAutocompleteComponentProps extends IConfigurableFormComponent {
  
}

const PermissionAutocompleteComponent: IToolboxComponent<IPermissionAutocompleteComponentProps> = {
  isInput: true,
  isOutput: true,
  canBeJsSetting: true,
  icon: <SecurityScanOutlined />,
  type: 'permissionAutocomplete',
  name: 'Permission Autocomplete',
  Factory: ({ model }) => {
    if (model.hidden) return null;
    return (
      <ConfigurableFormItem model={model} >
        {(value, onChange) => <PermissionAutocomplete value={value} onChange={onChange} readOnly={model.readOnly} />}
      </ConfigurableFormItem>
    );
  },
};

export default PermissionAutocompleteComponent;
