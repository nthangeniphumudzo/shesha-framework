import { DesignerToolbarSettings } from '@/interfaces/toolbarSettings';
import { FormLayout } from 'antd/lib/form/Form';

export const getSettings = (data: any) => {
  return {
    components: new DesignerToolbarSettings(data)
      .addSearchableTabs({
        id: 'W_m7doMyCpCYwAYDfRh6I',
        propertyName: 'settingsTabs',
        parentId: 'root',
        label: 'Settings',
        hideLabel: true,
        labelAlign: 'right',
        size: 'small',
        tabs: [
          {
            key: '1',
            title: 'Common',
            id: 's4gmBg31azZC0UjZjpfTm',
            components: [
              ...new DesignerToolbarSettings()
                .addContextPropertyAutocomplete({
                  id: '1c813b1a-04c5-4658-ac0f-cbcbae6b3bd4',
                  propertyName: 'propertyName',
                  label: 'Property Name',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  styledLabel: true,
                  size: 'small',
                  validate: {
                    required: true,
                  },
                  jsSetting: true,
                })
                .addLabelConfigurator({
                  id: '16d07439-4c18-468c-89e1-60c002ce96c5',
                  propertyName: 'hideLabel',
                  label: 'Label',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  hideLabel: true,
                })
                .addSettingsInputRow({
                  id: 'pwlceholder-tooltip-s4gmBg31azZC0UjZjpfTm',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  inputs: [
                    {
                      type: 'textArea',
                      id: 'tooltip-s4gmBg31azZC0UjZjpfTm',
                      propertyName: 'description',
                      label: 'Tooltip',
                      jsSetting: true,
                    },
                  ],
                })
                .addSettingsInput({
                  id: '5c813b1a-04c5-4658-ac0f-cbcbae6b3bd4',
                  inputType: 'dropdown',
                  propertyName: 'mode',
                  label: 'Mode',
                  size: 'small',
                  jsSetting: true,
                  dropdownOptions: [
                    {
                      label: 'Single',
                      value: 'single',
                    },
                    {
                      label: 'Multiple',
                      value: 'multiple',
                    },
                  ],
                })
                .addSettingsInputRow({
                  id: '12d700d6-ed4d-49d5-9cfd-fe8f0060f3b6',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  inputs: [
                    {
                      type: 'editModeSelector',
                      id: 'editMode-s4gmBg31azZC0UjZjpfTm',
                      propertyName: 'editMode',
                      label: 'Edit Mode',
                      defaultValue: 'inherited',
                      size: 'small',
                      jsSetting: true,
                    },
                    {
                      type: 'switch',
                      id: 'hidden-s4gmBg31azZC0UjZjpfTm',
                      propertyName: 'hidden',
                      label: 'Hide',
                      jsSetting: true,
                      layout: 'horizontal',
                    },
                  ],
                })
                .toJson(),
            ],
          },
          {
            key: '2',
            title: 'Data',
            id: '6eBJvoll3xtLJxdvOAlnB',
            components: [
              ...new DesignerToolbarSettings()
                .addSettingsInput({
                  id: '52813b1a-04c5-4658-ac0f-cbcbae6b3bd4',
                  inputType: 'dropdown',
                  propertyName: 'dataSourceType',
                  label: 'Data Source Type',
                  size: 'small',
                  jsSetting: true,
                  dropdownOptions: [
                    {
                      label: 'Values',
                      value: 'values',
                    },
                    {
                      label: 'Reference list',
                      value: 'referenceList',
                    },
                    {
                      label: 'Api url',
                      value: 'url',
                    },
                  ],
                })
                .addSettingsInputRow({
                  id: 'pwloeholder-tooltip-s4gmBg31azZC0UjZjpfTm',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  hidden: {
                    _code: 'return  getSettingValue(data?.dataSourceType) !== "values";',
                    _mode: 'code',
                    _value: false,
                  } as any,
                  inputs: [
                    {
                      id: '582715b9-624b-4189-812c-6144cafb7405',
                      type: 'labelValueEditor',
                      propertyName: 'items',
                      parentId: '1y9SNudmMM0Wd1Sc_YI1ng',
                      label: 'Items',
                      labelTitle: 'Label',
                      labelName: 'label',
                      valueTitle: 'Value',
                      valueName: 'value',
                      mode: 'dialog',
                    },
                  ],
                })
                .addSettingsInputRow({
                  id: 'referenceList-tooltips-s4gmBg31azZC0UjZjpfTm',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  hidden: {
                    _code: 'return  getSettingValue(data?.dataSourceType) !== "referenceList";',
                    _mode: 'code',
                    _value: false,
                  } as any,
                  inputs: [
                    {
                      type: 'referenceListAutocomplete',
                      id: 'referenceList-s4gmBg31azZC0UjZjpfTm',
                      propertyName: 'referenceListId',
                      label: 'Reference List',
                      jsSetting: true,
                    },
                  ],
                })
                .addSettingsInputRow({
                  id: 'referenceList-tooltips-s4gmBg31azZC0UjZjpfTm',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  hidden: {
                    _code: 'return  getSettingValue(data?.dataSourceType) !== "url";',
                    _mode: 'code',
                    _value: false,
                  } as any,
                  inputs: [
                    {
                      type: 'codeEditor',
                      id: 'dataSourceUrl-s4gmBg31azZC0UjZjpfTm',
                      propertyName: 'dataSourceUrl',
                      label: 'Data Source Url',
                      jsSetting: true,
                    },
                    {
                      type: 'codeEditor',
                      id: 'reducerFunc-s4gmBg31azZC0UjZjpfTm',
                      propertyName: 'reducerFunc',
                      label: 'Reducer Function',
                      jsSetting: true,
                    },
                  ],
                })
                .toJson(),
            ],
          },
          {
            key: '3',
            title: 'Validation',
            id: '6eBJvoll3xtLJxdvOAlnB',
            components: [
              ...new DesignerToolbarSettings()
                .addSettingsInput({
                  id: '3be9da3f-f47e-48ae-b4c3-f5cc36e534d9',
                  propertyName: 'validate.required',
                  label: 'Required',
                  inputType: 'switch',
                  size: 'small',
                  layout: 'horizontal',
                  jsSetting: true,
                  parentId: '6eBJvoll3xtLJxdvOAlnB',
                })
                .toJson(),
            ],
          },
          {
            key: '4',
            title: 'Events',
            id: 'Cc47W08MWrKdhoGqFKMI2',
            components: [
              ...new DesignerToolbarSettings()
                .addSettingsInput({
                  id: '3cef348b-6bba-4176-93f6-f3a8b21e33c9',
                  inputType: 'codeEditor',
                  propertyName: 'onChangeCustom',
                  label: 'On Change',
                  labelAlign: 'right',
                  tooltip: 'Enter custom eventhandler on changing of event. (form, event) are exposed',
                  parentId: 'Cc47W08MWrKdhoGqFKMI2',
                })
                .addSettingsInput({
                  id: '88c2d96c-b808-4316-8a36-701b09e5f6c7',
                  inputType: 'codeEditor',
                  propertyName: 'onFocusCustom',
                  label: 'On Focus',
                  labelAlign: 'right',
                  tooltip: 'Enter custom eventhandler on focus of event. (form, event) are exposed',
                  parentId: 'Cc47W08MWrKdhoGqFKMI2',
                })
                .addSettingsInput({
                  id: '4a2b7329-1a89-45d1-a5b0-f66db21744b0',
                  inputType: 'codeEditor',
                  propertyName: 'onBlurCustom',
                  label: 'On Blur',
                  labelAlign: 'right',
                  tooltip: 'Enter custom eventhandler on blur of event. (form, event) are exposed',
                  parentId: 'Cc47W08MWrKdhoGqFKMI2',
                })
                .toJson(),
            ],
          },
          {
            key: '5',
            title: 'Appearance',
            id: 'elgrlievlfwehhh848r8hsdnflsdnclurbd',
            components: [
              ...new DesignerToolbarSettings()
                .addPropertyRouter({
                  id: 'styleRouter',
                  propertyName: 'propertyRouter1',
                  componentName: 'propertyRouter',
                  label: 'Property router1',
                  labelAlign: 'right',
                  parentId: 'elgrlievlfwehhh848r8hsdnflsdnclurbd',
                  hidden: false,
                  propertyRouteName: {
                    _mode: 'code',
                    _code: "    return contexts.canvasContext?.designerDevice || 'desktop';",
                    _value: '',
                  },
                  components: [
                    ...new DesignerToolbarSettings()
                      .addSettingsInput({
                        id: '5c813b1a-04c5-4658-ac0f-cbcbae6b3bd4',
                        inputType: 'dropdown',
                        propertyName: 'direction',
                        label: 'Direction',
                        size: 'small',
                        jsSetting: true,
                        defaultValue: 'horizontal',
                        dropdownOptions: [
                          {
                            label: 'Horizontal',
                            value: 'horizontal',
                          },
                          {
                            label: 'Vertical',
                            value: 'vertical',
                          },
                        ],
                      })
                      .addCollapsiblePanel({
                        id: 'customStyleCollapsiblePanel',
                        propertyName: 'customStyle',
                        label: 'Custom Styles',
                        labelAlign: 'right',
                        ghost: true,
                        parentId: 'styleRouter',
                        collapsible: 'header',
                        content: {
                          id: 'stylePnl-M500-911MFR',
                          components: [
                            ...new DesignerToolbarSettings()
                              .addSettingsInput({
                                id: 'custom-css-412c-8461-4c8d55e5c073',
                                inputType: 'codeEditor',
                                propertyName: 'style',
                                hideLabel: false,
                                label: 'Style',
                                description:
                                  'A script that returns the style of the element as an object. This should conform to CSSProperties',
                              })
                              .toJson(),
                          ],
                        },
                      })
                      .toJson(),
                  ],
                })
                .toJson(),
            ],
          },
          {
            key: '6',
            title: 'Security',
            id: '6Vw9iiDw9d0MD_Rh5cbIn',
            components: [
              ...new DesignerToolbarSettings()
                .addSettingsInput({
                  id: '1adea529-1f0c-4def-bd41-ee166a5dfcd7',
                  inputType: 'permissions',
                  propertyName: 'permissions',
                  label: 'Permissions',
                  size: 'small',
                  parentId: '6Vw9iiDw9d0MD_Rh5cbIn',
                })
                .toJson(),
            ],
          },
        ],
      })
      .toJson(),
    formSettings: {
      colon: false,
      layout: 'vertical' as FormLayout,
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
    },
  };
};
