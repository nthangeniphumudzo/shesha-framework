import { DesignerToolbarSettings } from '@/interfaces/toolbarSettings';
import { FormLayout } from 'antd/lib/form/Form';
import { fontTypes, fontWeights, textAlign } from '../_settings/utils/font/utils';
import { getBorderInputs, getCornerInputs } from '../_settings/utils/border/utils';
import { buttonTypes } from './util';

export const getSettings = (data) => {

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
            components: [...new DesignerToolbarSettings()
              .addSettingsInput({
                id: '5c813b1a-04c5-4658-ac0f-cbcbae6b3bd4',
                propertyName: 'componentName',
                label: 'Component Name',
                parentId: 's4gmBg31azZC0UjZjpfTm',
                size: 'small',
                validate: {
                  required: true,
                },
                jsSetting: true,
              })
              .addLabelConfigurator({
                id: '46d07439-4c18-468c-89e1-60c002ce96c5',
                propertyName: 'hideLabel',
                label: 'Caption',
                parentId: 's4gmBg31azZC0UjZjpfTm',
                hideLabel: true,
              })
              .addSettingsInput({
                id: '46d07439-4c18-468c-89e1-60c002ce96c5',
                inputType: 'textArea',
                propertyName: 'description',
                label: 'Tooltip',
                jsSetting: true,
              })
              .addSettingsInputRow({
                id: 'palceholder-tooltip-s4gmBg31azZC0UjZjpfTm',
                parentId: 's4gmBg31azZC0UjZjpfTm',
                inputs: [
                  {
                    propertyName: 'icon',
                    label: 'Icon',
                    inputType: 'iconPicker',
                    size: 'small',
                    jsSetting: true,
                  },
                  {
                    propertyName: 'iconPosition',
                    label: 'Icon Position',
                    size: 'small',
                    jsSetting: true,
                    inputType: 'dropdown',
                    dropdownOptions: [
                      { label: 'start', value: 'start' },
                      { label: 'end', value: 'end' },
                    ],
                  },
                ],
                readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
              })
              .addSettingsInput({
                id: '12d700d6-ed4d-49d5-9cfd-fe8f0060f3b6',
                propertyName: 'buttonType',
                label: 'Type',
                validate: {
                  required: true,
                },
                inputType: 'dropdown',
                dropdownOptions: buttonTypes,
              })
              .addSettingsInputRow({
                id: '12d700d6-ed4d-49d5-9cfd-fe8f0060f3b6',
                parentId: 's4gmBg31azZC0UjZjpfTm',
                readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                inputs: [
                  {
                    inputType: 'editModeSelector',
                    propertyName: 'editMode',
                    label: 'Edit Mode',
                    size: 'small',
                    jsSetting: true,
                  },
                  {
                    inputType: 'switch',
                    propertyName: 'hidden',
                    label: 'Hide',
                    jsSetting: true,
                    layout: 'horizontal',
                  },
                ],
              })
              .addConfigurableActionConfigurator({
                id: 'F3B46A95-703F-4465-96CA-A58496A5F78C',
                propertyName: 'actionConfiguration',
                label: 'Action configuration',
                hidden: false,
                validate: {},
                settingsValidationErrors: [],
              })
              .toJson()
            ]
          },
          {
            key: '2',
            title: 'Appearance',
            id: 'elgrlievlfwehhh848r8hsdnflsdnclurbd',
            components: [...new DesignerToolbarSettings()
              .addPropertyRouter({
                id: 'styleRouter',
                propertyName: 'propertyRouter1',
                componentName: 'propertyRouter',
                label: 'Property router1',
                labelAlign: 'right',
                parentId: 'elgrlievlfwehhh848r8hsdnflsdnclurbd',
                hidden: false,
                propertyRouteName: {
                  _mode: "code",
                  _code: "    return contexts.canvasContext?.designerDevice || 'desktop';",
                  _value: ""
                },
                components: [
                  ...new DesignerToolbarSettings()
                    .addCollapsiblePanel({
                      id: 'fontStyleCollapsiblePanel',
                      propertyName: 'pnlFontStyle',
                      label: 'Font',
                      labelAlign: 'right',
                      parentId: 'styleRouter',
                      ghost: true,
                      collapsible: 'header',
                      content: {
                        id: 'fontStylePnl',
                        components: [...new DesignerToolbarSettings()
                          .addSettingsInputRow({
                            id: 'try26voxhs-HxJ5k5ngYE',
                            parentId: 'fontStylePnl',
                            inline: true,
                            propertyName: 'font',
                            readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                            inputs: [
                              {
                                label: 'Family',
                                propertyName: 'font.type',
                                inputType: 'dropdown',
                                hideLabel: true,
                                dropdownOptions: fontTypes,
                              },
                              {
                                label: 'Size',
                                propertyName: 'font.size',
                                hideLabel: true,
                                inputType: 'number',
                                width: 50,
                              },
                              {
                                label: 'Weight',
                                propertyName: 'font.weight',
                                hideLabel: true,
                                inputType: 'dropdown',
                                tooltip: "Controls text thickness (light, normal, bold, etc.)",
                                dropdownOptions: fontWeights,
                                width: 100,
                              },
                              {
                                label: 'Color',
                                inputType: 'color',
                                hideLabel: true,
                                propertyName: 'font.color',
                              },
                              {
                                label: 'Align',
                                propertyName: 'font.align',
                                inputType: 'dropdown',
                                hideLabel: true,
                                width: 60,
                                dropdownOptions: textAlign,
                              },
                            ],
                          })
                          .toJson()
                        ]
                      }
                    })
                    .addCollapsiblePanel({
                      id: 'dimensionsStyleCollapsiblePanel',
                      propertyName: 'pnlDimensions',
                      label: 'Dimensions',
                      parentId: 'styleRouter',
                      labelAlign: 'right',
                      ghost: true,
                      collapsible: 'header',
                      content: {
                        id: 'dimensionsStylePnl',
                        components: [...new DesignerToolbarSettings()
                          .addSettingsInputRow({
                            id: 'dimensionsStyleRowWidth',
                            parentId: 'dimensionsStylePnl',
                            inline: true,
                            readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                            inputs: [
                              {
                                label: "Width",
                                width: 85,
                                propertyName: "dimensions.width",
                                icon: "width",
                                tooltip: "You can use any unit (%, px, em, etc). px by default if without unit"

                              },
                              {
                                label: "Min Width",
                                width: 85,
                                hideLabel: true,
                                propertyName: "dimensions.minWidth",
                                icon: "minWidth",
                              },
                              {
                                label: "Max Width",
                                width: 85,
                                hideLabel: true,
                                propertyName: "dimensions.maxWidth",
                                icon: "maxWidth",
                              }
                            ]
                          })
                          .addSettingsInputRow({
                            id: 'dimensionsStyleRowHeight',
                            parentId: 'dimensionsStylePnl',
                            inline: true,
                            readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                            inputs: [
                              {
                                label: "Height",
                                width: 85,
                                propertyName: "dimensions.height",
                                icon: "height",
                                tooltip: "You can use any unit (%, px, em, etc). px by default if without unit"
                              },
                              {
                                label: "Min Height",
                                width: 85,
                                hideLabel: true,
                                propertyName: "dimensions.minHeight",
                                icon: "minHeight",
                              },
                              {
                                label: "Max Height",
                                width: 85,
                                hideLabel: true,
                                propertyName: "dimensions.maxHeight",
                                icon: "maxHeight",
                              }
                            ]
                          })
                          .addSettingsInput({
                            id: 'predefinedSizes',
                            propertyName: 'size',
                            label: 'Size',
                            inputType: 'dropdown',
                            width: '150px',
                            hidden: { _code: 'return  getSettingValue(data?.dimensions?.width) || getSettingValue(data?.dimensions?.height);', _mode: 'code', _value: false } as any,
                            dropdownOptions: [
                              { value: 'small', label: 'Small' },
                              { value: 'medium', label: 'Medium' },
                              { value: 'large', label: 'Large' },
                            ]
                          })
                          .toJson()
                        ]
                      }
                    })
                    .addCollapsiblePanel({
                      id: 'borderStyleCollapsiblePanel',
                      propertyName: 'pnlBorderStyle',
                      label: 'Border',
                      labelAlign: 'right',
                      ghost: true,
                      parentId: 'styleRouter',
                      collapsible: 'header',
                      content: {
                        id: 'borderStylePnl',
                        components: [...new DesignerToolbarSettings()
                          .addSettingsInputRow({
                            id: `borderStyleRow`,
                            parentId: 'borderStylePnl',
                            hidden: { _code: 'return  !getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.border?.hideBorder);', _mode: 'code', _value: false } as any,
                            readOnly: { _code: 'return getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                            inputs: [
                              {
                                label: "Border",
                                hideLabel: true,
                                inputType: "button",
                                propertyName: "border.hideBorder",
                                icon: "EyeOutlined",
                                iconAlt: "EyeInvisibleOutlined"
                              },
                            ]
                          })
                          .addSettingsInputRow(
                            getBorderInputs()[0] as any
                          )
                          .addSettingsInputRow(
                            getBorderInputs()[1] as any
                          )
                          .addSettingsInputRow(
                            getBorderInputs()[2] as any
                          )
                          .addSettingsInputRow(
                            getBorderInputs()[3] as any
                          )
                          .addSettingsInputRow(
                            getBorderInputs()[4] as any
                          )
                          .addSettingsInputRow(
                            getCornerInputs()[0] as any
                          )
                          .addSettingsInputRow(
                            getCornerInputs()[1] as any
                          )
                          .addSettingsInputRow(
                            getCornerInputs()[2] as any
                          )
                          .addSettingsInputRow(
                            getCornerInputs()[3] as any
                          )
                          .addSettingsInputRow(
                            getCornerInputs()[4] as any
                          )
                          .toJson()
                        ]
                      }
                    })
                    .addCollapsiblePanel({
                      id: 'backgroundStyleCollapsiblePanel',
                      propertyName: 'pnlBackgroundStyle',
                      label: 'Background',
                      labelAlign: 'right',
                      ghost: true,
                      parentId: 'styleRouter',
                      collapsible: 'header',
                      content: {
                        id: 'backgroundStylePnl',
                        components: [
                          ...new DesignerToolbarSettings()
                            .addSettingsInput({
                              id: "backgroundStyleRow-selectType",
                              parentId: "backgroundStylePnl",
                              label: "Type",
                              jsSetting: false,
                              propertyName: "background.type",
                              inputType: "radio",
                              tooltip: "Select a type of background",
                              buttonGroupOptions: [
                                {
                                  value: "color",
                                  icon: "FormatPainterOutlined",
                                  title: "Color"
                                },
                                {
                                  value: "gradient",
                                  icon: "BgColorsOutlined",
                                  title: "Gradient"
                                },
                                {
                                  value: "image",
                                  icon: "PictureOutlined",
                                  title: "Image"
                                },
                                {
                                  value: "url",
                                  icon: "LinkOutlined",
                                  title: "URL"
                                },
                                {
                                  value: "storedFile",
                                  icon: "DatabaseOutlined",
                                  title: "Stored File"
                                }
                              ],
                              readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                            })
                            .addSettingsInputRow({
                              id: "backgroundStyleRow-color",
                              parentId: "backgroundStylePnl",
                              inputs: [{
                                label: "Color",
                                propertyName: "background.color",
                                inputType: "color",
                                hideLabel: true,
                                jsSetting: false,
                              }],
                              hidden: { _code: 'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.background?.type) !== "color";', _mode: 'code', _value: false } as any,
                              readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                            })
                            .addSettingsInputRow({
                              id: "backgroundStyle-gradientColors",
                              parentId: "backgroundStylePnl",
                              inputs: [{
                                inputType: "multiColorPicker",
                                propertyName: "background.gradient.colors",
                                label: "Colors",
                                jsSetting: false,
                              }
                              ],
                              hidden: { _code: 'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.background?.type) !== "gradient";', _mode: 'code', _value: false } as any,
                              hideLabel: true,
                              readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                            })
                            .addSettingsInputRow({
                              id: "backgroundStyle-url",
                              parentId: "backgroundStylePnl",
                              inputs: [{
                                propertyName: "background.url",
                                jsSetting: false,
                                label: "URL",
                              }],
                              hidden: { _code: 'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.background?.type) !== "url";', _mode: 'code', _value: false } as any,
                              readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                            })
                            .addSettingsInputRow({
                              id: "backgroundStyle-image",
                              parentId: 'backgroundStylePnl',
                              inputs: [{
                                inputType: "imageUploader",
                                propertyName: 'background.uploadFile',
                                label: "Image",
                                jsSetting: false,
                              }],
                              hidden: { _code: 'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.background?.type) !== "image";', _mode: 'code', _value: false } as any,
                              readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                            })
                            .addSettingsInputRow({
                              id: "backgroundStyleRow-storedFile",
                              parentId: 'backgroundStylePnl',
                              hidden: { _code: 'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.background?.type) !== "storedFile";', _mode: 'code', _value: false } as any,
                              readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                              inputs: [
                                {
                                  jsSetting: false,
                                  propertyName: "background.storedFile.id",
                                  label: "File ID"
                                }
                              ]
                            })
                            .addSettingsInputRow({
                              id: "backgroundStyleRow-controls",
                              parentId: 'backgroundStyleRow',
                              inline: true,
                              readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                              inputs: [
                                {
                                  inputType: "customDropdown",
                                  label: "Size",
                                  hideLabel: true,
                                  propertyName: "background.size",
                                  dropdownOptions: [
                                    {
                                      value: "cover",
                                      label: "Cover"
                                    },
                                    {
                                      value: "contain",
                                      label: "Contain"
                                    },
                                    {
                                      value: "auto",
                                      label: "Auto"
                                    }
                                  ],
                                },
                                {
                                  label: "Position",
                                  hideLabel: true,
                                  inputType: "customDropdown",
                                  propertyName: "background.position",
                                  dropdownOptions: [
                                    {
                                      value: "center",
                                      label: "Center"
                                    },
                                    {
                                      value: "top",
                                      label: "Top"
                                    },
                                    {
                                      value: "left",
                                      label: "Left"
                                    },
                                    {
                                      value: "right",
                                      label: "Right"
                                    },
                                    {
                                      value: "bottom",
                                      label: "Bottom"
                                    },
                                    {
                                      value: "top left",
                                      label: "Top Left"
                                    },
                                    {
                                      value: "top right",
                                      label: "Top Right"
                                    },
                                    {
                                      value: "bottom left",
                                      label: "Bottom Left"
                                    },
                                    {
                                      value: "bottom right",
                                      label: "Bottom Right"
                                    }
                                  ],
                                },
                                {
                                  label: "Repeat",
                                  hideLabel: true,
                                  propertyName: "background.repeat",
                                  inputType: "dropdown",
                                  width: 70,
                                  dropdownOptions: [
                                    {
                                      value: "repeat",
                                      label: "repeat"
                                    },
                                    {
                                      value: "repeat-x",
                                      label: "repeatX"
                                    },
                                    {
                                      value: "repeat-y",
                                      label: "repeatY"
                                    },
                                    {
                                      value: "no-repeat",
                                      label: "noRepeat"
                                    }
                                  ],
                                }
                              ]
                            })
                            .toJson()
                        ],
                      }
                    })
                    .addCollapsiblePanel({
                      id: 'shadowStyleCollapsiblePanel',
                      propertyName: 'pnlShadowStyle',
                      label: 'Shadow',
                      labelAlign: 'right',
                      ghost: true,
                      parentId: 'styleRouter',
                      collapsible: 'header',
                      content: {
                        id: 'shadowStylePnl',
                        components: [...new DesignerToolbarSettings()
                          .addSettingsInputRow({
                            id: 'shadowStyleRow',
                            parentId: 'shadowStylePnl',
                            inline: true,
                            readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                            inputs: [
                              {
                                label: 'Offset X',
                                hideLabel: true,
                                width: 60,
                                inputType: 'number',
                                icon: "offsetHorizontal",
                                propertyName: 'shadow.offsetX',
                              },
                              {
                                label: 'Offset Y',
                                hideLabel: true,
                                width: 60,
                                inputType: 'number',
                                icon: 'offsetVertical',
                                propertyName: 'shadow.offsetY',
                              },
                              {
                                label: 'Blur',
                                hideLabel: true,
                                width: 60,
                                inputType: 'number',
                                icon: 'blur',
                                propertyName: 'shadow.blurRadius',
                              },
                              {
                                label: 'Spread',
                                hideLabel: true,
                                width: 60,
                                inputType: 'number',
                                icon: 'spread',
                                propertyName: 'shadow.spreadRadius',
                              },
                              {
                                label: 'Color',
                                inputType: 'color',
                                hideLabel: true,
                                propertyName: 'shadow.color',
                              },
                            ],
                          })
                          .toJson()
                        ]
                      }
                    })
                    .addCollapsiblePanel({
                      id: 'styleCollapsiblePanel',
                      propertyName: 'stylingBox',
                      label: 'Margin & Padding',
                      labelAlign: 'right',
                      ghost: true,
                      collapsible: 'header',
                      content: {
                        id: 'stylePnl-M5-911',
                        components: [...new DesignerToolbarSettings()
                          .addStyleBox({
                            id: 'styleBoxPnl',
                            label: 'Margin Padding',
                            hideLabel: true,
                            propertyName: 'stylingBox',
                          })
                          .toJson()
                        ]
                      }
                    })
                    .addCollapsiblePanel({
                      id: 'customStyleCollapsiblePanel',
                      propertyName: 'customStyle',
                      label: 'Custom Style',
                      labelAlign: 'right',
                      ghost: true,
                      parentId: 'styleRouter',
                      collapsible: 'header',
                      content: {
                        id: 'stylePnl-M500-911MFR',
                        components: [...new DesignerToolbarSettings()
                          .addSettingsInput({
                            readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                            id: 'custom-css-412c-8461-4c8d55e5c073',
                            propertyName: 'style',
                            hideLabel: true,
                            inputType: 'codeEditor',
                            label: 'Style',
                            description: 'A script that returns the style of the element as an object. This should conform to CSSProperties',
                          })
                          .toJson()
                        ]
                      }
                    })
                    .toJson()]
              }).toJson()]
          },
          {
            key: '3',
            title: 'Security',
            id: '6Vw9iiDw9d0MD_Rh5cbIn',
            components: [...new DesignerToolbarSettings()
              .addSettingsInput({
                readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                id: '1adea529-1f0c-4def-bd41-ee166a5dfcd7',
                inputType: 'permissions',
                propertyName: 'permissions',
                label: 'Permissions',
                size: 'small',
                parentId: '6Vw9iiDw9d0MD_Rh5cbIn'
              })
              .toJson()
            ]
          }
        ]
      }).toJson(),
    formSettings: {
      colon: false,
      layout: 'vertical' as FormLayout,
      labelCol: { span: 24 },
      wrapperCol: { span: 24 }
    }
  };
};

