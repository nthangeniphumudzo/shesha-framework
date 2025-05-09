import { DesignerToolbarSettings } from '@/interfaces/toolbarSettings';
import { nanoid } from '@/utils/uuid';
import { FormLayout } from 'antd/lib/form/Form';
import { getBorderInputs, getCornerInputs } from '../_settings/utils/border/utils';
import {
  backgroundTypeOptions,
  positionOptions,
  repeatOptions,
  sizeOptions,
} from '../_settings/utils/background/utils';
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
                .addSettingsInput({
                  id: 'palceholder-tooltip-s4gmBg31azZC0UjZjpfTm',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  inputType: 'textField',
                  propertyName: 'componentName',
                  label: 'Component Name',
                  size: 'large',
                  jsSetting: true,
                })
                .addSettingsInputRow({
                  id: 'palceholder-tooltip-s4gmBg31azZC0UjZjpfTm',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  inputs: [
                    {
                      id: 'headerTitle-s4gmBg31azZC0UjZjpfTm',
                      type: 'textField',
                      propertyName: 'label',
                      label: 'Header Title',
                      size: 'large',
                      jsSetting: true,
                    },
                  ],
                  hidden: {
                    _code: 'return  !getSettingValue(data?.showHeader);',
                    _mode: 'code',
                    _value: false,
                  } as any,
                })
                .addCollapsiblePanel({
                  id: 'placement-s4gmBg31azZC0UjZjpfTm',
                  propertyName: 'action',
                  label: 'Actions',
                  labelAlign: 'right',
                  ghost: true,
                  collapsible: 'header',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  content: {
                    id: 'placement-s4gmBg31azZC0UjZjpfTm',
                    components: [
                      ...new DesignerToolbarSettings()
                        .addSettingsInputRow({
                          id: '12d700d6-ed4d-49d5-9cfd-fe8f00d6-ed4d-49d5-9cfd-fe8f00w0f3b6',
                          parentId: 's4gmBg31azZC0UjZjpfTm',
                          inputs: [
                            {
                              id: '12d700d6-ed4d-49d5-9cfd-fe8f00w0f3b6',
                              inputType: 'switch',
                              type: 'switch',
                              propertyName: 'showHeader',
                              label: 'Show Header',
                              size: 'small',
                              jsSetting: true,
                              defaultValue: false,
                            },
                            {
                              id: '12d700d6-ed4d-49d5-9cfd-fe8f0060f3b6',
                              inputType: 'switch',
                              type: 'switch',
                              propertyName: 'showFooter',
                              label: 'Show Action Buttons',
                              size: 'small',
                              jsSetting: true,
                              defaultValue: false,
                            },
                          ],
                        })
                        .addContainer({
                          id: 'ccc24bf6-f76d-4139-a850-c99bf06c8b69',
                          propertyName: 'containerComponents',
                          direction: 'vertical',
                          hidden: {
                            _code: 'return  !getSettingValue(data?.showFooter);',
                            _mode: 'code',
                            _value: false,
                          } as any,
                          parentId: 'pnl24bf6-f76d-4139-a850-c99bf06c8b69',
                          components: new DesignerToolbarSettings()
                            .addCollapsiblePanel({
                              id: nanoid(),
                              propertyName: 'okButtonCollapsiblePanel',
                              label: 'Ok Button',
                              parentId: 'ccc24bf6-f76d-4139-a850-c99bf06c8b69',
                              content: {
                                id: nanoid(),
                                components: new DesignerToolbarSettings()
                                  .addConfigurableActionConfigurator({
                                    id: nanoid(),
                                    propertyName: 'onOkAction',
                                    parentId: 'ccc24bf6-f76d-4139-a850-c99bf06c8b69',
                                    label: 'Ok Action',
                                  })
                                  .addSettingsInput({
                                    id: nanoid(),
                                    propertyName: 'okText',
                                    parentId: 'ccc24bf6-f76d-4139-a850-c99bf06c8b69',
                                    label: 'Ok Text',
                                    description: 'The text that will be displayed on the Ok button',
                                  })
                                  .addSettingsInput({
                                    id: nanoid(),
                                    propertyName: 'okButtonCustomEnabled',
                                    parentId: 'ccc24bf6-f76d-4139-a850-c99bf06c8b69',
                                    label: 'Custom Enabled',
                                    inputType: 'codeEditor',
                                    description: 'Enter custom enabled of the Ok button',
                                  })
                                  .toJson(),
                              },
                            })

                            .addCollapsiblePanel({
                              id: nanoid(),
                              propertyName: 'cancelButtonCollapsiblePanel',
                              label: 'Cancel Button',
                              parentId: 'ccc24bf6-f76d-4139-a850-c99bf06c8b69',
                              content: {
                                id: nanoid(),
                                components: new DesignerToolbarSettings()
                                  .addConfigurableActionConfigurator({
                                    id: nanoid(),
                                    propertyName: 'onCancelAction',
                                    label: 'Ok Cancel',
                                    parentId: 'ccc24bf6-f76d-4139-a850-c99bf06c8b69',
                                  })
                                  .addSettingsInput({
                                    id: nanoid(),
                                    propertyName: 'cancelText',
                                    label: 'Cancel Text',
                                    description: 'The text that will be displayed on the Cancel button',
                                    parentId: 'ccc24bf6-f76d-4139-a850-c99bf06c8b69',
                                  })
                                  .addSettingsInput({
                                    id: nanoid(),
                                    propertyName: 'cancelButtonCustomEnabled',
                                    label: 'Custom Enabled',
                                    inputType: 'codeEditor',
                                    description: 'Enter custom enabled of the Cancel button',
                                    parentId: 'ccc24bf6-f76d-4139-a850-c99bf06c8b69',
                                  })
                                  .toJson(),
                              },
                            })
                            .toJson(),
                        })
                        .toJson(),
                    ],
                  },
                })
                .toJson(),
            ],
          },
          {
            key: '4',
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
                          components: [
                            ...new DesignerToolbarSettings()
                              .addSettingsInput({
                                id: 'predefinedOrientation',
                                propertyName: 'placement',
                                label: 'Slide Direction',
                                inputType: 'dropdown',
                                hidden: false,
                                defaultValue: 'right',
                                dropdownOptions: [
                                  { label: 'Top', value: 'top' },
                                  { label: 'Right', value: 'right' },
                                  { label: 'Bottom', value: 'bottom' },
                                  { label: 'Left', value: 'left' },
                                ],
                                validate: { required: true },
                              })
                              .addSettingsInputRow({
                                id: 'dimensionsStyleRowWidth',
                                parentId: 'dimensionsStylePnl',
                                inline: true,
                                hidden: {
                                  _code:
                                    'return getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.placement) !== "right" && getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.placement) !== "left";',
                                  _mode: 'code',
                                  _value: false,
                                } as any,
                                inputs: [
                                  {
                                    type: 'textField',
                                    id: 'width-s4gmBg31azZC0UjZjpfTm',
                                    label: 'Width',
                                    width: 85,
                                    defaultValue: '100%',
                                    propertyName: 'width',
                                    icon: 'widthIcon',
                                    tooltip: 'You can use any unit (%, px, em, etc). px by default if without unit',
                                  },
                                ],
                              })
                              .addSettingsInputRow({
                                id: 'dimensionsStyleRowHeight',
                                parentId: 'dimensionsStylePnl',
                                inline: true,
                                hidden: {
                                  _code:
                                    'return getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.placement) !== "top" && getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.placement) !== "bottom";',
                                  _mode: 'code',
                                  _value: false,
                                } as any,
                                inputs: [
                                  {
                                    type: 'textField',
                                    id: 'height-s4gmBg31azZC0UjZjpfTm',
                                    label: 'Height',
                                    width: 85,
                                    defaultValue: '100%',
                                    propertyName: 'dimensions.height',
                                    icon: 'heightIcon',
                                    tooltip: 'You can use any unit (%, px, em, etc). px by default if without unit',
                                  },
                                ],
                              })

                              .toJson(),
                          ],
                        },
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
                                id: 'backgroundStyleRow-selectType',
                                parentId: 'backgroundStylePnl',
                                label: 'Type',
                                jsSetting: false,
                                propertyName: 'background.type',
                                inputType: 'radio',
                                tooltip: 'Select a type of background',
                                buttonGroupOptions: backgroundTypeOptions,
                                readOnly: {
                                  _code: 'return  getSettingValue(data?.readOnly);',
                                  _mode: 'code',
                                  _value: false,
                                } as any,
                              })
                              .addSettingsInputRow({
                                id: 'backgroundStyleRow-color',
                                parentId: 'backgroundStylePnl',
                                inputs: [
                                  {
                                    type: 'colorPicker',
                                    id: 'backgroundStyleRow-color',
                                    label: 'Color',
                                    propertyName: 'background.color',
                                    hideLabel: true,
                                    jsSetting: false,
                                  },
                                ],
                                hidden: {
                                  _code:
                                    'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.background?.type) !== "color";',
                                  _mode: 'code',
                                  _value: false,
                                } as any,
                              })
                              .addSettingsInputRow({
                                id: 'backgroundStyle-gradientColors',
                                parentId: 'backgroundStylePnl',
                                inputs: [
                                  {
                                    type: 'multiColorPicker',
                                    id: 'backgroundStyle-gradientColors',
                                    propertyName: 'background.gradient.colors',
                                    label: 'Colors',
                                    jsSetting: false,
                                  },
                                ],
                                hidden: {
                                  _code:
                                    'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.background?.type) !== "gradient";',
                                  _mode: 'code',
                                  _value: false,
                                } as any,
                                hideLabel: true,
                              })
                              .addSettingsInputRow({
                                id: 'backgroundStyle-url',
                                parentId: 'backgroundStylePnl',
                                inputs: [
                                  {
                                    type: 'textField',
                                    id: 'backgroundStyle-url',
                                    propertyName: 'background.url',
                                    jsSetting: false,
                                    label: 'URL',
                                  },
                                ],
                                hidden: {
                                  _code:
                                    'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.background?.type) !== "url";',
                                  _mode: 'code',
                                  _value: false,
                                } as any,
                              })
                              .addSettingsInputRow({
                                id: 'backgroundStyle-image',
                                parentId: 'backgroundStylePnl',
                                inputs: [
                                  {
                                    type: 'imageUploader',
                                    id: 'backgroundStyle-image',
                                    propertyName: 'background.uploadFile',
                                    label: 'Image',
                                    jsSetting: false,
                                  },
                                ],
                                hidden: {
                                  _code:
                                    'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.background?.type) !== "image";',
                                  _mode: 'code',
                                  _value: false,
                                } as any,
                              })
                              .addSettingsInputRow({
                                id: 'backgroundStyleRow-storedFile',
                                parentId: 'backgroundStylePnl',
                                hidden: {
                                  _code:
                                    'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.background?.type) !== "storedFile";',
                                  _mode: 'code',
                                  _value: false,
                                } as any,
                                inputs: [
                                  {
                                    type: 'textField',
                                    id: 'backgroundStyle-storedFile',
                                    jsSetting: false,
                                    propertyName: 'background.storedFile.id',
                                    label: 'File ID',
                                  },
                                ],
                              })
                              .addSettingsInputRow({
                                id: 'backgroundStyleRow-controls',
                                parentId: 'backgroundStyleRow',
                                inline: true,
                                hidden: {
                                  _code:
                                    'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.background?.type) === "color";',
                                  _mode: 'code',
                                  _value: false,
                                } as any,
                                readOnly: {
                                  _code: 'return  getSettingValue(data?.readOnly);',
                                  _mode: 'code',
                                  _value: false,
                                } as any,
                                inputs: [
                                  {
                                    type: 'customDropdown',
                                    id: 'backgroundStyleRow-size',
                                    label: 'Size',
                                    hideLabel: true,
                                    propertyName: 'background.size',
                                    customTooltip:
                                      'Size of the background image, two space separated values with units e.g "100% 100px"',
                                    dropdownOptions: sizeOptions,
                                    hidden: {
                                      _code:
                                        'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.background?.type) === "color";',
                                      _mode: 'code',
                                      _value: false,
                                    } as any,
                                  },
                                  {
                                    type: 'customDropdown',
                                    id: 'backgroundStyleRow-position',
                                    label: 'Position',
                                    hideLabel: true,
                                    customTooltip:
                                      'Position of the background image, two space separated values with units e.g "5em 100px"',
                                    propertyName: 'background.position',
                                    dropdownOptions: positionOptions,
                                  },
                                ],
                              })
                              .addSettingsInputRow({
                                id: 'backgroundStyleRow-repeat',
                                parentId: 'backgroundStyleRow',
                                readOnly: {
                                  _code: 'return  getSettingValue(data?.readOnly);',
                                  _mode: 'code',
                                  _value: false,
                                } as any,
                                inputs: [
                                  {
                                    type: 'radio',
                                    id: 'backgroundStyleRow-repeat-radio',
                                    label: 'Repeat',
                                    hideLabel: true,
                                    propertyName: 'background.repeat',
                                    inputType: 'radio',
                                    buttonGroupOptions: repeatOptions,
                                  },
                                ],
                                hidden: {
                                  _code:
                                    'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.background?.type) === "color";',
                                  _mode: 'code',
                                  _value: false,
                                } as any,
                              })
                              .toJson(),
                          ],
                        },
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
                          components: [
                            ...new DesignerToolbarSettings()
                              .addSettingsInputRow({
                                id: `borderStyleRow`,
                                parentId: 'borderStylePnl',
                                hidden: {
                                  _code:
                                    'return  !getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.border?.hideBorder);',
                                  _mode: 'code',
                                  _value: false,
                                } as any,
                                inputs: [
                                  {
                                    type: 'button',
                                    id: 'borderStyleRow-hideBorder',
                                    label: 'Border',
                                    hideLabel: true,
                                    propertyName: 'border.hideBorder',
                                    icon: 'EyeOutlined',
                                    iconAlt: 'EyeInvisibleOutlined',
                                  },
                                ],
                              })
                              .addContainer({
                                id: 'borderStyleRow',
                                parentId: 'borderStylePnl',
                                components: getBorderInputs() as any,
                              })
                              .addContainer({
                                id: 'borderRadiusStyleRow',
                                parentId: 'borderStylePnl',
                                components: getCornerInputs() as any,
                              })
                              .toJson(),
                          ],
                        },
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
                          components: [
                            ...new DesignerToolbarSettings()
                              .addSettingsInputRow({
                                id: 'shadowStyleRow',
                                parentId: 'shadowStylePnl',
                                inline: true,
                                inputs: [
                                  {
                                    type: 'numberField',
                                    id: 'shadowStyleRow-offsetX',
                                    label: 'Offset X',
                                    hideLabel: true,
                                    width: 80,
                                    icon: 'offsetHorizontalIcon',
                                    propertyName: 'shadow.offsetX',
                                  },
                                  {
                                    type: 'numberField',
                                    id: 'shadowStyleRow-offsetY',
                                    label: 'Offset Y',
                                    hideLabel: true,
                                    width: 80,
                                    icon: 'offsetVerticalIcon',
                                    propertyName: 'shadow.offsetY',
                                  },
                                  {
                                    type: 'numberField',
                                    id: 'shadowStyleRow-blurRadius',
                                    label: 'Blur',
                                    hideLabel: true,
                                    width: 80,
                                    icon: 'blurIcon',
                                    propertyName: 'shadow.blurRadius',
                                  },
                                  {
                                    type: 'numberField',
                                    id: 'shadowStyleRow-spreadRadius',
                                    label: 'Spread',
                                    hideLabel: true,
                                    width: 80,
                                    icon: 'spreadIcon',
                                    propertyName: 'shadow.spreadRadius',
                                  },
                                  {
                                    type: 'colorPicker',
                                    id: 'shadowStyleRow-color',
                                    label: 'Color',
                                    hideLabel: true,
                                    propertyName: 'shadow.color',
                                  },
                                ],
                              })
                              .toJson(),
                          ],
                        },
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
                          components: [
                            ...new DesignerToolbarSettings()
                              .addStyleBox({
                                id: 'styleBoxPnl',
                                label: 'Margin Padding',
                                hideLabel: true,
                                propertyName: 'stylingBox',
                              })
                              .toJson(),
                          ],
                        },
                      })
                      .addCollapsiblePanel({
                        id: 'customStyleCollapsiblePanel',
                        propertyName: 'style',
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
                      .addCollapsiblePanel({
                        id: 'headerStyleCollapsiblePanel',
                        propertyName: 'headerStyle',
                        label: 'Header Styles',
                        collapsedByDefault: true,
                        labelAlign: 'right',
                        ghost: true,
                        parentId: 'styleRouter',
                        collapsible: 'header',
                        hidden: {
                          _code: 'return  !getSettingValue(data?.showHeader);',
                          _mode: 'code',
                          _value: false,
                        } as any,
                        content: {
                          id: 'stylePnl-M500-911MFR',
                          components: [
                            ...new DesignerToolbarSettings()
                              .addCollapsiblePanel({
                                id: 'headerbackgroundStyleCollapsiblePanel',
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
                                        id: 'backgroundStyleRow-selectType',
                                        parentId: 'backgroundStylePnl',
                                        label: 'Type',
                                        jsSetting: false,
                                        propertyName: 'headerBackground.type',
                                        inputType: 'radio',
                                        tooltip: 'Select a type of background',
                                        buttonGroupOptions: [
                                          {
                                            value: 'color',
                                            icon: 'FormatPainterOutlined',
                                            title: 'Color',
                                          },
                                          {
                                            value: 'gradient',
                                            icon: 'BgColorsOutlined',
                                            title: 'Gradient',
                                          },
                                          {
                                            value: 'image',
                                            icon: 'PictureOutlined',
                                            title: 'Image',
                                          },
                                          {
                                            value: 'url',
                                            icon: 'LinkOutlined',
                                            title: 'URL',
                                          },
                                          {
                                            value: 'storedFile',
                                            icon: 'DatabaseOutlined',
                                            title: 'Stored File',
                                          },
                                        ],
                                      })
                                      .addSettingsInputRow({
                                        id: 'backgroundStyleRow-color',
                                        parentId: 'backgroundStylePnl',
                                        inputs: [
                                          {
                                            type: 'colorPicker',
                                            id: 'backgroundStyleRow-color',
                                            label: 'Color',
                                            propertyName: 'headerBackground.color',
                                            hideLabel: true,
                                            jsSetting: false,
                                          },
                                        ],
                                        hidden: {
                                          _code:
                                            'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.headerBackground?.type) !== "color";',
                                          _mode: 'code',
                                          _value: false,
                                        } as any,
                                      })
                                      .addSettingsInputRow({
                                        id: 'backgroundStyle-gradientColors',
                                        parentId: 'backgroundStylePnl',
                                        inputs: [
                                          {
                                            type: 'multiColorPicker',
                                            id: 'backgroundStyle-gradientColors',
                                            propertyName: 'headerBackground.gradient.colors',
                                            label: 'Colors',
                                            jsSetting: false,
                                          },
                                        ],
                                        hidden: {
                                          _code:
                                            'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.headerBackground?.type) !== "gradient";',
                                          _mode: 'code',
                                          _value: false,
                                        } as any,
                                        hideLabel: true,
                                      })
                                      .addSettingsInputRow({
                                        id: 'backgroundStyle-url',
                                        parentId: 'backgroundStylePnl',
                                        inputs: [
                                          {
                                            type: 'textField',
                                            id: 'backgroundStyle-url',
                                            propertyName: 'headerBackground.url',
                                            jsSetting: false,
                                            label: 'URL',
                                          },
                                        ],
                                        hidden: {
                                          _code:
                                            'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.headerBackground?.type) !== "url";',
                                          _mode: 'code',
                                          _value: false,
                                        } as any,
                                      })
                                      .addSettingsInputRow({
                                        id: 'backgroundStyle-image',
                                        parentId: 'backgroundStylePnl',
                                        inputs: [
                                          {
                                            type: 'imageUploader',
                                            id: 'backgroundStyle-image',
                                            propertyName: 'headerBackground.uploadFile',
                                            label: 'Image',
                                            jsSetting: false,
                                          },
                                        ],
                                        hidden: {
                                          _code:
                                            'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.headerBackground?.type) !== "image";',
                                          _mode: 'code',
                                          _value: false,
                                        } as any,
                                      })
                                      .addSettingsInputRow({
                                        id: 'backgroundStyleRow-storedFile',
                                        parentId: 'backgroundStylePnl',
                                        hidden: {
                                          _code:
                                            'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.headerBackground?.type) !== "storedFile";',
                                          _mode: 'code',
                                          _value: false,
                                        } as any,
                                        inputs: [
                                          {
                                            type: 'textField',
                                            id: 'backgroundStyle-storedFile',
                                            jsSetting: false,
                                            propertyName: 'headerBackground.storedFile.id',
                                            label: 'File ID',
                                          },
                                        ],
                                      })
                                      .addSettingsInputRow({
                                        id: 'backgroundStyleRow-controls',
                                        parentId: 'backgroundStyleRow',
                                        hidden: {
                                          _code:
                                            'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.background?.type) === "color";',
                                          _mode: 'code',
                                          _value: false,
                                        } as any,
                                        inline: true,
                                        inputs: [
                                          {
                                            type: 'customDropdown',
                                            id: 'backgroundStyleRow-size',
                                            label: 'Size',
                                            hideLabel: true,
                                            propertyName: 'headerBackground.size',
                                            dropdownOptions: [
                                              {
                                                value: 'cover',
                                                label: 'Cover',
                                              },
                                              {
                                                value: 'contain',
                                                label: 'Contain',
                                              },
                                              {
                                                value: 'auto',
                                                label: 'Auto',
                                              },
                                            ],
                                          },
                                          {
                                            type: 'customDropdown',
                                            id: 'backgroundStyleRow-position',
                                            label: 'Position',
                                            hideLabel: true,
                                            propertyName: 'headerBackground.position',
                                            dropdownOptions: [
                                              {
                                                value: 'center',
                                                label: 'Center',
                                              },
                                              {
                                                value: 'top',
                                                label: 'Top',
                                              },
                                              {
                                                value: 'left',
                                                label: 'Left',
                                              },
                                              {
                                                value: 'right',
                                                label: 'Right',
                                              },
                                              {
                                                value: 'bottom',
                                                label: 'Bottom',
                                              },
                                              {
                                                value: 'top left',
                                                label: 'Top Left',
                                              },
                                              {
                                                value: 'top right',
                                                label: 'Top Right',
                                              },
                                              {
                                                value: 'bottom left',
                                                label: 'Bottom Left',
                                              },
                                              {
                                                value: 'bottom right',
                                                label: 'Bottom Right',
                                              },
                                            ],
                                          },
                                          {
                                            type: 'radio',
                                            id: 'backgroundStyleRow-repeat',
                                            label: 'Repeat',
                                            hideLabel: true,
                                            propertyName: 'headerBackground.repeat',
                                            buttonGroupOptions: repeatOptions,
                                          },
                                        ],
                                      })
                                      .toJson(),
                                  ],
                                },
                              })
                              .addCollapsiblePanel({
                                id: 'headerShadowStyleCollapsiblePanel',
                                propertyName: 'pnlShadowStyle',
                                label: 'Shadow',
                                labelAlign: 'right',
                                ghost: true,
                                parentId: 'styleRouter',
                                collapsible: 'header',
                                content: {
                                  id: 'shadowStylePnl',
                                  components: [
                                    ...new DesignerToolbarSettings()
                                      .addSettingsInputRow({
                                        id: 'shadowStyleRow',
                                        parentId: 'shadowStylePnl',
                                        inline: true,
                                        inputs: [
                                          {
                                            type: 'numberField',
                                            id: 'HeadershadowStyleRow-offsetX',
                                            label: 'Offset X',
                                            hideLabel: true,
                                            width: 80,
                                            icon: 'offsetHorizontalIcon',
                                            propertyName: 'headerShadow.offsetX',
                                          },
                                          {
                                            type: 'numberField',
                                            id: 'HeadershadowStyleRow-offsetY',
                                            label: 'Offset Y',
                                            hideLabel: true,
                                            width: 80,
                                            icon: 'offsetVerticalIcon',
                                            propertyName: 'headerShadow.offsetY',
                                          },
                                          {
                                            type: 'numberField',
                                            id: 'HeadershadowStyleRow-blurRadius',
                                            label: 'Blur',
                                            hideLabel: true,
                                            width: 80,
                                            icon: 'blurIcon',
                                            propertyName: 'headerShadow.blurRadius',
                                          },
                                          {
                                            type: 'numberField',
                                            id: 'HeadershadowStyleRow-spreadRadius',
                                            label: 'Spread',
                                            hideLabel: true,
                                            width: 80,
                                            icon: 'spreadIcon',
                                            propertyName: 'headerShadow.spreadRadius',
                                          },
                                          {
                                            type: 'colorPicker',
                                            id: 'HeadershadowStyleRow-color',
                                            label: 'Color',
                                            hideLabel: true,
                                            propertyName: 'headerShadow.color',
                                          },
                                        ],
                                      })
                                      .toJson(),
                                  ],
                                },
                              })
                              .addSettingsInput({
                                id: 'custom-css-412c-8461-4c8d55e5c073',
                                inputType: 'codeEditor',
                                propertyName: 'headerStyle',
                                hideLabel: false,
                                label: 'Style',
                                description:
                                  'A script that returns the style of the element as an object. This should conform to CSSProperties',
                              })
                              .toJson(),
                          ],
                        },
                      })
                      .addCollapsiblePanel({
                        id: 'footerStyleCollapsiblePanel',
                        propertyName: 'footerStyle',
                        label: 'Footer Styles',
                        collapsedByDefault: true,
                        labelAlign: 'right',
                        ghost: true,
                        parentId: 'styleRouter',
                        collapsible: 'header',
                        hidden: {
                          _code: 'return  !getSettingValue(data?.showFooter);',
                          _mode: 'code',
                          _value: false,
                        } as any,
                        content: {
                          id: 'stolePnl-M500-911MFR',
                          components: [
                            ...new DesignerToolbarSettings()
                              .addCollapsiblePanel({
                                id: 'footerBackgroundStyleCollapsiblePanel',
                                propertyName: 'pnlBackgroundStyle',
                                label: 'Background',
                                labelAlign: 'right',
                                ghost: true,
                                parentId: 'styleRouter',
                                collapsible: 'header',
                                content: {
                                  id: 'backgroundStylePnll',
                                  components: [
                                    ...new DesignerToolbarSettings()
                                      .addSettingsInput({
                                        id: 'backgroundStyleRow-selectType',
                                        parentId: 'backgroundStylePnll',
                                        label: 'Type',
                                        jsSetting: false,
                                        propertyName: 'footerBackground.type',
                                        inputType: 'radio',
                                        tooltip: 'Select a type of background',
                                        buttonGroupOptions: [
                                          {
                                            value: 'color',
                                            icon: 'FormatPainterOutlined',
                                            title: 'Color',
                                          },
                                          {
                                            value: 'gradient',
                                            icon: 'BgColorsOutlined',
                                            title: 'Gradient',
                                          },
                                          {
                                            value: 'image',
                                            icon: 'PictureOutlined',
                                            title: 'Image',
                                          },
                                          {
                                            value: 'url',
                                            icon: 'LinkOutlined',
                                            title: 'URL',
                                          },
                                          {
                                            value: 'storedFile',
                                            icon: 'DatabaseOutlined',
                                            title: 'Stored File',
                                          },
                                        ],
                                      })
                                      .addSettingsInputRow({
                                        id: 'footerbackgroundStyleRow-color',
                                        parentId: 'backgroundStylePnll',
                                        inputs: [
                                          {
                                            type: 'colorPicker',
                                            id: 'backgroundStyleRow-color',
                                            label: 'Color',
                                            propertyName: 'footerBackground.color',
                                            hideLabel: true,
                                            jsSetting: false,
                                          },
                                        ],
                                        hidden: {
                                          _code:
                                            'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.footerBackground?.type) !== "color";',
                                          _mode: 'code',
                                          _value: false,
                                        } as any,
                                      })
                                      .addSettingsInputRow({
                                        id: 'backgroundStyle-gradientColors',
                                        parentId: 'backgroundStylePnll',
                                        inputs: [
                                          {
                                            type: 'multiColorPicker',
                                            id: 'backgroundStyle-gradientColors',
                                            propertyName: 'footerBackground.gradient.colors',
                                            label: 'Colors',
                                            jsSetting: false,
                                          },
                                        ],
                                        hidden: {
                                          _code:
                                            'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.footerBackground?.type) !== "gradient";',
                                          _mode: 'code',
                                          _value: false,
                                        } as any,
                                        hideLabel: true,
                                      })
                                      .addSettingsInputRow({
                                        id: 'footerBackgroundStyle-url',
                                        parentId: 'backgroundStylePnll',
                                        inputs: [
                                          {
                                            type: 'textField',
                                            id: 'backgroundStyle-url',
                                            propertyName: 'footerBackground.url',
                                            jsSetting: false,
                                            label: 'URL',
                                          },
                                        ],
                                        hidden: {
                                          _code:
                                            'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.footerBackground?.type) !== "url";',
                                          _mode: 'code',
                                          _value: false,
                                        } as any,
                                      })
                                      .addSettingsInputRow({
                                        id: 'footerbackgroundStyle-image',
                                        parentId: 'backgroundStylePnll',
                                        inputs: [
                                          {
                                            type: 'imageUploader',
                                            id: 'backgroundStyle-image',
                                            propertyName: 'footerBackground.uploadFile',
                                            label: 'Image',
                                            jsSetting: false,
                                          },
                                        ],
                                        hidden: {
                                          _code:
                                            'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.footerBackground?.type) !== "image";',
                                          _mode: 'code',
                                          _value: false,
                                        } as any,
                                      })
                                      .addSettingsInputRow({
                                        id: 'footerbackgroundStyleRow-storedFile',
                                        parentId: 'backgroundStylePnll',
                                        hidden: {
                                          _code:
                                            'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.footerBackground?.type) !== "storedFile";',
                                          _mode: 'code',
                                          _value: false,
                                        } as any,
                                        inputs: [
                                          {
                                            type: 'textField',
                                            id: 'footerbackgroundStyle-storedFile',
                                            jsSetting: false,
                                            propertyName: 'footerBackground.storedFile.id',
                                            label: 'File ID',
                                          },
                                        ],
                                      })
                                      .addSettingsInputRow({
                                        id: 'footerBackground-controls',
                                        parentId: 'backgroundStyleRow',
                                        hidden: {
                                          _code:
                                            'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.footerBackground?.type) === "color";',
                                          _mode: 'code',
                                          _value: false,
                                        } as any,
                                        inline: true,
                                        inputs: [
                                          {
                                            type: 'customDropdown',
                                            id: 'backgroundStyleRow-size',
                                            label: 'Size',
                                            hideLabel: true,
                                            propertyName: 'footerBackground.size',
                                            dropdownOptions: [
                                              {
                                                value: 'cover',
                                                label: 'Cover',
                                              },
                                              {
                                                value: 'contain',
                                                label: 'Contain',
                                              },
                                              {
                                                value: 'auto',
                                                label: 'Auto',
                                              },
                                            ],
                                          },
                                          {
                                            type: 'customDropdown',
                                            id: 'footerbackgroundStyleRow-position',
                                            label: 'Position',
                                            hideLabel: true,
                                            propertyName: 'footerBackground.position',
                                            dropdownOptions: [
                                              {
                                                value: 'center',
                                                label: 'Center',
                                              },
                                              {
                                                value: 'top',
                                                label: 'Top',
                                              },
                                              {
                                                value: 'left',
                                                label: 'Left',
                                              },
                                              {
                                                value: 'right',
                                                label: 'Right',
                                              },
                                              {
                                                value: 'bottom',
                                                label: 'Bottom',
                                              },
                                              {
                                                value: 'top left',
                                                label: 'Top Left',
                                              },
                                              {
                                                value: 'top right',
                                                label: 'Top Right',
                                              },
                                              {
                                                value: 'bottom left',
                                                label: 'Bottom Left',
                                              },
                                              {
                                                value: 'bottom right',
                                                label: 'Bottom Right',
                                              },
                                            ],
                                          },
                                          {
                                            type: 'radio',
                                            id: 'backgroundStyleRow-repeat',
                                            label: 'Repeat',
                                            hideLabel: true,
                                            propertyName: 'footerBackground.repeat',
                                            buttonGroupOptions: repeatOptions,
                                          },
                                        ],
                                      })
                                      .toJson(),
                                  ],
                                },
                              })
                              .addCollapsiblePanel({
                                id: 'footerShadowStyleCollapsiblePanel',
                                propertyName: 'footerpnlShadowStyle',
                                label: 'Shadow',
                                labelAlign: 'right',
                                ghost: true,
                                parentId: 'styleRouter',
                                collapsible: 'header',
                                content: {
                                  id: 'footershadowStylePnl',
                                  components: [
                                    ...new DesignerToolbarSettings()
                                      .addSettingsInputRow({
                                        id: 'footershadowStyleRow',
                                        parentId: 'shadowStylePnl',
                                        inline: true,
                                        inputs: [
                                          {
                                            type: 'numberField',
                                            id: 'HeadershadowStyleRow-offsetX',
                                            label: 'Offset X',
                                            hideLabel: true,
                                            width: 80,
                                            icon: 'offsetHorizontalIcon',
                                            propertyName: 'footerShadow.offsetX',
                                          },
                                          {
                                            type: 'numberField',
                                            id: 'HeadershadowStyleRow-offsetY',
                                            label: 'Offset Y',
                                            hideLabel: true,
                                            width: 80,
                                            icon: 'offsetVerticalIcon',
                                            propertyName: 'footerShadow.offsetY',
                                          },
                                          {
                                            type: 'numberField',
                                            id: 'HeadershadowStyleRow-blurRadius',
                                            label: 'Blur',
                                            hideLabel: true,
                                            width: 80,
                                            icon: 'blurIcon',
                                            propertyName: 'footerShadow.blurRadius',
                                          },
                                          {
                                            type: 'numberField',
                                            id: 'HeadershadowStyleRow-spreadRadius',
                                            label: 'Spread',
                                            hideLabel: true,
                                            width: 80,
                                            icon: 'spreadIcon',
                                            propertyName: 'footerShadow.spreadRadius',
                                          },
                                          {
                                            type: 'colorPicker',
                                            id: 'HeadershadowStyleRow-color',
                                            label: 'Color',
                                            hideLabel: true,
                                            propertyName: 'footerShadow.color',
                                          },
                                        ],
                                      })
                                      .toJson(),
                                  ],
                                },
                              })
                              .addSettingsInput({
                                id: 'custom-css-412c-8461-sc1d55e5c073',
                                inputType: 'codeEditor',
                                propertyName: 'footerStyle',
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
