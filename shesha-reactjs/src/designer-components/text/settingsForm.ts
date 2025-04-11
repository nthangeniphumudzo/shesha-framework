import { DesignerToolbarSettings } from '@/interfaces/toolbarSettings';
import { FormLayout } from 'antd/lib/form/Form';
import { DEFAULT_CONTENT_TYPE } from './utils';
import { getBorderInputs, getCornerInputs } from '../_settings/utils/border/utils';
import { fontTypes, fontWeights, textAlign } from '../_settings/utils/font/utils';
import { positionOptions, repeatOptions, sizeOptions } from '../_settings/utils/background/utils';

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
                  id: '5c813b1a-04c5-4658-ac0f-cbcbae6b3bd4',
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
                .addSettingsInputRow({
                  id: 'type-default-value-s4gmBg31azZC0UjZjpfTm',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  inputs: [
                    {
                      type: 'dropdown',
                      id: 'type-s4gmBg31azZC0UjZjpfTm',
                      propertyName: 'textType',
                      label: 'Type',
                      size: 'small',
                      jsSetting: true,
                      allowClear: false,
                      dropdownOptions: [
                        {
                          label: 'Span',
                          value: 'span',
                        },
                        {
                          label: 'Paragraph',
                          value: 'paragraph',
                        },
                        {
                          label: 'Title',
                          value: 'title',
                        },
                      ],
                    },
                    {
                      type: 'dropdown',
                      id: 'type-s4gmBg31azZC0UjZjpfTm',
                      propertyName: 'contentDisplay',
                      label: 'Content Display',
                      size: 'small',
                      defaultValue: 'content',
                      jsSetting: true,
                      allowClear: false,
                      dropdownOptions: [
                        {
                          label: 'Content',
                          value: 'content',
                        },
                        {
                          label: 'Property name',
                          value: 'name',
                        },
                      ],
                    },
                  ],
                })
                .addSettingsInputRow({
                  id: 'type-s2gmBg3QaaZC0UjZjpfTm',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  inputs: [
                    {
                      type: 'dropdown',
                      id: 'type-s2gmBg3QaaZC0UjZjpfTm',
                      propertyName: 'dataType',
                      label: 'Data Type',
                      size: 'small',
                      defaultValue: 'string',
                      jsSetting: true,
                      allowClear: false,
                      dropdownOptions: [
                        {
                          label: 'String',
                          value: 'string',
                        },
                        {
                          label: 'Date time',
                          value: 'date-time',
                        },
                        {
                          label: 'Number',
                          value: 'number',
                        },
                        {
                          label: 'Boolean',
                          value: 'boolean',
                        },
                      ],
                    },
                    {
                      type: 'switch',
                      id: 'type-s2gmBg3QaaZC0UjZjpfTm',
                      propertyName: 'hidden',
                      label: 'Hide',
                      size: 'small',
                      jsSetting: true,
                    },
                  ],
                })
                .addSettingsInputRow({
                  id: 'type-default-value-s4gmBg31azZC0UjZjpfTm',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  hidden: {
                    _code: 'return  getSettingValue(data?.dataType) !== "date-time";',
                    _mode: 'code',
                    _value: false,
                  } as any,
                  inputs: [
                    {
                      type: 'textField',
                      id: 'type-s2gmBg3QaaZC0UjZjpfTm',
                      hidden: false,
                      propertyName: 'dateFormat',
                      label: 'Date Format',
                      size: 'small',
                      jsSetting: true,
                      placeholder: 'Date Format',
                      allowClear: false,
                    },
                  ],
                })
                .addSettingsInputRow({
                  id: 'type-default-value-s4gmBg31azZC0UjZjpfTm',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  hidden: {
                    _code: 'return  getSettingValue(data?.dataType) !== "number";',
                    _mode: 'code',
                    _value: false,
                  } as any,
                  inputs: [
                    {
                      type: 'dropdown',
                      id: 'type-s2mBg3QaaZC0UjZjpfTm',
                      hidden: false,
                      propertyName: 'numberFormat',
                      label: 'Number Format',
                      size: 'small',
                      jsSetting: true,
                      allowClear: false,
                      dropdownOptions: [
                        {
                          label: 'Currency',
                          value: 'currency',
                        },
                        {
                          label: 'Double',
                          value: 'double',
                        },
                        {
                          label: 'Round',
                          value: 'round',
                        },
                        {
                          label: 'Thousand separator',
                          value: 'thousandSeparator',
                        },
                      ],
                    },
                  ],
                })
                .addSettingsInputRow({
                  id: 'type-default-value-s4gmBg31azZC0UjZjpfTm',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  hidden: {
                    _code: 'return getSettingValue(data?.contentDisplay) === "name";',
                    _mode: 'code',
                    _value: false,
                  } as any,
                  inputs: [
                    {
                      type: 'textArea',
                      id: 'type-s2gmBg3QaaZC0UjZjpfTm',
                      hidden: false,
                      propertyName: 'content',
                      label: 'Content',
                      size: 'small',
                      jsSetting: true,
                      allowClear: false,
                    },
                  ],
                })
                .addSettingsInputRow({
                  id: 'switeches-s4gmBg31azZC0UjZjpfTm',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  inputs: [
                    {
                      type: 'switch',
                      id: 'italic-s4gmBg31azZC0UjZjpfTm',
                      propertyName: 'italic',
                      label: 'Italic',
                      size: 'small',
                      jsSetting: true,
                    },
                    {
                      type: 'switch',
                      id: 'code-s4gmBg31azZC0UjZjpfTm',
                      propertyName: 'code',
                      label: 'Code',
                      size: 'small',
                      jsSetting: true,
                    },
                  ],
                })
                .addSettingsInputRow({
                  id: 'switeches-s4gmBg31azZC0UjZjpfTm',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  inputs: [
                    {
                      type: 'switch',
                      id: 'delete-s4gmBg31azZC0UjZjpfTm',
                      propertyName: 'delete',
                      label: 'Strikethrough',
                      size: 'small',
                      jsSetting: true,
                    },
                    {
                      type: 'switch',
                      id: 'underline-s4gmBg31azZC0UjZjpfTm',
                      propertyName: 'underline',
                      label: 'Underline',
                      size: 'small',
                      jsSetting: true,
                    },
                  ],
                })
                .addSettingsInputRow({
                  id: 'switeches-s4gmBg31azZC0UjZjpfTm',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  inputs: [
                    {
                      type: 'switch',
                      id: 'strong-s4gmBg31azZC0UjZjpfTm',
                      propertyName: 'ellipsis',
                      label: 'Ellipsis',
                      size: 'small',
                      jsSetting: true,
                    },
                    {
                      type: 'switch',
                      id: 'mark-s4gmBg31azZC0UjZjpfTm',
                      propertyName: 'mark',
                      label: 'Mark',
                      size: 'small',
                      jsSetting: true,
                    },
                  ],
                })
                .addSettingsInputRow({
                  id: 'switeches-s4gmBg31azZC0UjZjpfTm',
                  parentId: 's4gmBg31azZC0UjZjpfTm',
                  inputs: [
                    {
                      type: 'switch',
                      id: 'keyboard-s4gmBg31azZC0UjZjpfTm',
                      propertyName: 'keyboard',
                      label: 'Keyboard',
                      size: 'small',
                      jsSetting: true,
                    },
                    {
                      type: 'switch',
                      id: 'copyable-s4gmBg31azZC0UjZjpfTm',
                      propertyName: 'copyable',
                      label: 'Copyable',
                      size: 'small',
                      jsSetting: true,
                    },
                  ],
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
                      .addSettingsInputRow({
                        id: 'color-s4gmBg31azZC0UjZjpfTm',
                        parentId: 'styleRouter',
                        inputs: [
                          {
                            type: 'dropdown',
                            id: 'color-s4gmBg31azZC0UjZjpfTm',
                            propertyName: 'contentType',
                            label: 'Type',
                            hideLabel: false,
                            width: 50,
                            defaultValue: DEFAULT_CONTENT_TYPE,
                            dropdownOptions: [
                              {
                                label: 'Default',
                                value: '',
                              },
                              {
                                label: 'Primary',
                                value: 'primary',
                              },
                              {
                                label: 'Secondary',
                                value: 'secondary',
                              },
                              {
                                label: 'Success',
                                value: 'success',
                              },
                              {
                                label: 'Warning',
                                value: 'warning',
                              },
                              {
                                label: 'Info',
                                value: 'info',
                              },
                              {
                                label: 'Error',
                                value: 'danger',
                              },
                              {
                                label: 'Custom color',
                                value: 'custom',
                              },
                            ],
                          },
                        ],
                      })
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
                          components: [
                            ...new DesignerToolbarSettings()
                              .addSettingsInputRow({
                                id: 'try26voxhs-HxJ5k5ngYE',
                                parentId: 'fontStylePnl',
                                inline: true,
                                propertyName: 'font',
                                inputs: [
                                  {
                                    type: 'dropdown',
                                    id: 'fontFamily-s4gmBg31azZC0UjZjpfTm',
                                    label: 'Family',
                                    propertyName: 'font.type',
                                    hideLabel: true,
                                    dropdownOptions: fontTypes,
                                  },
                                  {
                                    type: 'numberField',
                                    id: 'fontSize-s4gmBg31azZC0UjZjpfTm',
                                    label: 'Size',
                                    propertyName: 'font.size',
                                    hideLabel: true,
                                    width: 50,
                                    hidden: {
                                      _code: 'return  getSettingValue(data.textType) === "title";',
                                      _mode: 'code',
                                      _value: false,
                                    } as any,
                                  },
                                  {
                                    type: 'dropdown',
                                    id: 'size-s4gmBg31azZC0UjZjpfTm',
                                    label: 'Size unit',
                                    propertyName: 'level',
                                    hideLabel: true,
                                    defaultValue: '1',
                                    dropdownOptions: [
                                      {
                                        label: 'H1',
                                        value: '1',
                                      },
                                      {
                                        label: 'H2',
                                        value: '2',
                                      },
                                      {
                                        label: 'H3',
                                        value: '3',
                                      },
                                      {
                                        label: 'H4',
                                        value: '4',
                                      },
                                      {
                                        label: 'H5',
                                        value: '5',
                                      },
                                    ],
                                    hidden: {
                                      _code: 'return  getSettingValue(data.textType) !== "title";',
                                      _mode: 'code',
                                      _value: false,
                                    } as any,
                                  },
                                  {
                                    type: 'dropdown',
                                    id: 'fontWeight-s4gmBg31azZC0UjZjpfTm',
                                    label: 'Weight',
                                    propertyName: 'font.weight',
                                    hideLabel: true,
                                    tooltip: 'Controls text thickness (light, normal, bold, etc.)',
                                    dropdownOptions: fontWeights,
                                    width: 100,
                                  },
                                  {
                                    type: 'colorPicker',
                                    id: 'fontColor-s4gmBg31azZC0UjZjpfTm',
                                    label: 'Color',
                                    hideLabel: true,
                                    propertyName: 'font.color',
                                    hidden: {
                                      _code:
                                        'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.contentType) !== "custom";',
                                      _mode: 'code',
                                      _value: false,
                                    } as any,
                                  },
                                  {
                                    type: 'dropdown',
                                    id: 'fontAlign-s4gmBg31azZC0UjZjpfTm',
                                    label: 'Align',
                                    propertyName: 'font.align',
                                    hideLabel: true,
                                    width: 60,
                                    dropdownOptions: textAlign,
                                  },
                                ],
                              })
                              .toJson(),
                          ],
                        },
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
                          components: [
                            ...new DesignerToolbarSettings()
                              .addSettingsInputRow({
                                id: 'dimensionsStyleRowWidth',
                                parentId: 'dimensionsStylePnl',
                                inline: true,
                                inputs: [
                                  {
                                    type: 'textField',
                                    id: 'width-s4gmBg31azZC0UjZjpfTm',
                                    label: 'Width',
                                    width: 85,
                                    propertyName: 'dimensions.width',
                                    icon: 'widthIcon',
                                    tooltip: 'You can use any unit (%, px, em, etc). px by default if without unit',
                                  },
                                  {
                                    type: 'textField',
                                    id: 'minWidth-s4gmBg31azZC0UjZjpfTm',
                                    label: 'Min Width',
                                    width: 85,
                                    hideLabel: true,
                                    propertyName: 'dimensions.minWidth',
                                    icon: 'minWidthIcon',
                                  },
                                  {
                                    type: 'textField',
                                    id: 'maxWidth-s4gmBg31azZC0UjZjpfTm',
                                    label: 'Max Width',
                                    width: 85,
                                    hideLabel: true,
                                    propertyName: 'dimensions.maxWidth',
                                    icon: 'maxWidthIcon',
                                  },
                                ],
                              })
                              .addSettingsInputRow({
                                id: 'dimensionsStyleRowHeight',
                                parentId: 'dimensionsStylePnl',
                                inline: true,
                                inputs: [
                                  {
                                    type: 'textField',
                                    id: 'height-s4gmBg31azZC0UjZjpfTm',
                                    label: 'Height',
                                    width: 85,
                                    propertyName: 'dimensions.height',
                                    icon: 'heightIcon',
                                    tooltip: 'You can use any unit (%, px, em, etc). px by default if without unit',
                                  },
                                  {
                                    type: 'textField',
                                    id: 'minHeight-s4gmBg31azZC0UjZjpfTm',
                                    label: 'Min Height',
                                    width: 85,
                                    hideLabel: true,
                                    propertyName: 'dimensions.minHeight',
                                    icon: 'minHeightIcon',
                                  },
                                  {
                                    type: 'textField',
                                    id: 'maxHeight-s4gmBg31azZC0UjZjpfTm',
                                    label: 'Max Height',
                                    width: 85,
                                    hideLabel: true,
                                    propertyName: 'dimensions.maxHeight',
                                    icon: 'maxHeightIcon',
                                  },
                                ],
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
                                    tooltip: 'Offset X',
                                    width: 80,
                                    icon: 'offsetHorizontalIcon',
                                    propertyName: 'shadow.offsetX',
                                  },
                                  {
                                    type: 'numberField',
                                    id: 'shadowStyleRow-offsetY',
                                    label: 'Offset Y',
                                    hideLabel: true,
                                    tooltip: 'Offset Y',
                                    width: 80,
                                    icon: 'offsetVerticalIcon',
                                    propertyName: 'shadow.offsetY',
                                  },
                                  {
                                    type: 'numberField',
                                    id: 'shadowStyleRow-blurRadius',
                                    label: 'Blur',
                                    hideLabel: true,
                                    tooltip: 'Blur Radius',
                                    width: 80,
                                    icon: 'blurIcon',
                                    propertyName: 'shadow.blurRadius',
                                  },
                                  {
                                    type: 'numberField',
                                    id: 'shadowStyleRow-spreadRadius',
                                    label: 'Spread',
                                    hideLabel: true,
                                    tooltip: 'Spread Radius',
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
                        label: 'Custom Style',
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
            key: '5',
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
