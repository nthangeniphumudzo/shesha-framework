import { CodeEditor } from '../codeEditor/codeEditor';
import React, { FC } from 'react';
import SectionSeparator from '@/components/sectionSeparator';
import SettingsForm from '@/designer-components/_settings/settingsForm';
import SettingsFormItem from '@/designer-components/_settings/settingsFormItem';
import StyleBox from '../styleBox/components/box';
import { Checkbox, Input, InputNumber, Select } from 'antd';
import { ISettingsFormFactoryArgs } from '@/interfaces';
import SettingsCollapsiblePanel from '../_settings/settingsCollapsiblePanel';
import ColumnsList from '../columns/columnsList';
import { EXPOSED_VARIABLES } from '../columns/exposedVariables';
import { IColumnsComponentProps } from '../columns/interfaces';
import { ColorPicker, PermissionAutocomplete } from '@/components';

const ColumnsSettings: FC<ISettingsFormFactoryArgs<IColumnsComponentProps>> = (props) => {
  const { readOnly } = props;
  const { Option } = Select;

  return (
    <>
      <SettingsCollapsiblePanel header="Display" >
        <SettingsFormItem name="componentName" label="Component Name" required>
          <Input readOnly={readOnly} />
        </SettingsFormItem>
        <SettingsFormItem name="label" label="Label" hidden>
          <Input readOnly={readOnly} />
        </SettingsFormItem>
        <SettingsFormItem name="hasCustomHeader" valuePropName="checked" jsSetting label="Custom Header">
          <Checkbox disabled={readOnly} />
        </SettingsFormItem>
        <SettingsFormItem name="expandIconPosition" label="Icon position" jsSetting>
          <Select allowClear disabled={readOnly}>
            <Option value="hide">Hide</Option>
            <Option value="start">Start</Option>
            <Option value="end">End</Option>
          </Select>
        </SettingsFormItem>
        <SettingsFormItem name="collapsible" label="Collapsible" jsSetting>
          <Select allowClear disabled={readOnly}>
            <Option value="header">Header</Option>
            <Option value="icon">Icon</Option>
            <Option value="disabled">Disabled</Option>
          </Select>
        </SettingsFormItem>
        <SettingsFormItem name="collapsedByDefault" label="Collapsed by default">
          <Checkbox disabled={readOnly} />
        </SettingsFormItem>
        <SettingsFormItem name="hidden" label="Hidden">
          <Checkbox disabled={readOnly} />
        </SettingsFormItem>
        <SettingsFormItem name="ghost" label="Ghost">
          <Checkbox disabled={readOnly} />
        </SettingsFormItem>
        <SettingsFormItem name="hideCollapseContent" label="Hide Top Bar">
          <Checkbox disabled={readOnly} />
        </SettingsFormItem>
        <SettingsFormItem name="isSimpleDesign" label="Simple Design">
          <Checkbox disabled={readOnly} />
        </SettingsFormItem>
        <SettingsFormItem name="borderRadius" label="Border Radius">
          <InputNumber step={1} readOnly={readOnly} />
        </SettingsFormItem>
        <SettingsFormItem name="headerColor" label="Header Background Color">
          <ColorPicker />
        </SettingsFormItem>
        <SettingsFormItem name="bodyColor" label="Body Background Color">
          <ColorPicker />
        </SettingsFormItem>

      </SettingsCollapsiblePanel>
      <SettingsCollapsiblePanel header="Header" >
        <SettingsFormItem name="gutterX" label="Gutter X" jsSetting>
          <InputNumber min={1} max={48} step={4} readOnly={readOnly} />
        </SettingsFormItem>

        <SettingsFormItem name="gutterY" label="Gutter Y" jsSetting>
          <InputNumber min={1} max={48} step={4} readOnly={readOnly} />
        </SettingsFormItem>

        <SettingsFormItem name="hidden" label="Hidden" valuePropName="checked" jsSetting>
          <Checkbox disabled={readOnly} />
        </SettingsFormItem>

        <SettingsFormItem name="columns" label="Columns">
          <ColumnsList readOnly={readOnly} fixedColumn={true} />
        </SettingsFormItem>

        <SectionSeparator title="Style" />
        <SettingsFormItem name="className" label="Custom CSS Class" tooltip='Custom CSS Class to add to this component'>
          <Input readOnly={readOnly} />
        </SettingsFormItem>
        <SettingsFormItem name="headerHeight" label="Header Height">
          <Input readOnly={readOnly} />
        </SettingsFormItem>
        <SettingsFormItem name="style" label="Style">
          <CodeEditor
            propertyName="style"
            readOnly={readOnly}
            mode="dialog"
            label="Style"
            description="A script that returns the style of the element as an object. This should conform to CSSProperties"
            exposedVariables={EXPOSED_VARIABLES}
          />
        </SettingsFormItem>

        <SettingsFormItem name="stylingBox">
          <StyleBox />
        </SettingsFormItem>

        <SettingsCollapsiblePanel header="Security">
          <SettingsFormItem
            jsSetting
            label="Permissions"
            name="permissions"
            initialValue={props.model.permissions}
            tooltip="Enter a list of permissions that should be associated with this component"
          >
            <PermissionAutocomplete readOnly={readOnly} />
          </SettingsFormItem>
        </SettingsCollapsiblePanel>
      </SettingsCollapsiblePanel>
    </>
  );
};

export const ColumnsSettingsForm: FC<ISettingsFormFactoryArgs<IColumnsComponentProps>> = (props) =>
  SettingsForm<IColumnsComponentProps>({ ...props, children: <ColumnsSettings {...props} /> });