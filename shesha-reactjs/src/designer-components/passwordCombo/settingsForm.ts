import { DesignerToolbarSettings } from '@/interfaces/toolbarSettings';
import { FormLayout } from 'antd/lib/form/Form';
import { fontTypes, fontWeights, textAlign } from '../_settings/utils/font/utils';
import { getBorderInputs } from '../_settings/utils/border/utils';
import { getCornerInputs } from '../_settings/utils/border/utils';
import { IPasswordComponentProps } from './utils';
import { backgroundTypeOptions, positionOptions, repeatOptions, sizeOptions } from '../_settings/utils/background/utils';

export const getSettings = (data: IPasswordComponentProps) => {

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
                            .addLabelConfigurator({
                                id: 'label-4c18-468c-89e1-60c002ce96c5',
                                propertyName: 'hideLabel',
                                label: 'Label',
                                parentId: 's4gmBg31azZC0UjZjpfTm',
                                hideLabel: true,
                            })
                            .addSettingsInputRow({
                                id: 'confirm-4c18-468c-89e1-60c002ce96c5',
                                parentId: 's4gmBg31azZC0UjZjpfTm',
                                hidden: {
                                    _code: 'return  getSettingValue(data?.hideLabel);',
                                    _mode: 'code',
                                    _value: false
                                } as any,
                                readOnly: false,
                                inputs: [{
                                    type: 'textField',
                                    id: 'confirmLabel',
                                    label: 'Label: Confirmation',
                                    propertyName: 'confirmLabel',
                                    size: 'small',
                                    jsSetting: true,
                                }]
                            })
                            .addSettingsInput({
                                id: 'placeholder-s4gmBg31azZC0UjZjpfTm',
                                propertyName: 'placeholder',
                                label: 'Placeholder',
                                size: 'small',
                                jsSetting: true,
                                parentId: 's4gmBg31azZC0UjZjpfTm',
                            })
                            .addSettingsInput({
                                parentId: 's4gmBg31azZC0UjZjpfTm',
                                id: 'placeholder-s4gmBg31azZC0UjZjpfTm',
                                propertyName: 'confirmPlaceholder',
                                label: 'Placeholder: Confirmation',
                                size: 'small',
                                jsSetting: true,
                            })
                            .addSettingsInput({
                                inputType: 'textArea',
                                id: 'tooltip-s4gmBg31azZC0UjZjpfTm',
                                propertyName: 'description',
                                label: 'Tooltip',
                                jsSetting: true,
                            })
                            .addSettingsInput({
                                inputType: 'textArea',
                                id: 'tooltip-s4gmBg31azZC0UjZjpfTm',
                                parentId: 's4gmBg31azZC0UjZjpfTm',
                                propertyName: 'confirmDescription',
                                label: 'Tooltip: Confirmation',
                                jsSetting: true,
                            })
                            .addSettingsInputRow({
                                id: '12d700d6-ed4d-49d5-9cfd-fe8f0060f3b6',
                                parentId: 's4gmBg31azZC0UjZjpfTm',
                                readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                inputs: [
                                    {
                                        type: 'editModeSelector',
                                        id: 'editMode-s4gmBg31azZC0UjZjpfTm',
                                        propertyName: 'editMode',
                                        label: 'Edit Mode',
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
                            .toJson()
                        ]
                    },
                    {
                        key: '2',
                        title: 'Validation',
                        id: '6eBJvoll3xtLJxdvOAlnB',
                        components: [...new DesignerToolbarSettings()
                            .addSettingsInput({
                                readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                id: '3be9da3f-f47e-48ae-b4c3-f5cc36e534d9',
                                propertyName: 'validate.required',
                                label: 'Required',
                                inputType: 'switch',
                                size: 'small',
                                layout: 'horizontal',
                                jsSetting: true,
                                parentId: '6eBJvoll3xtLJxdvOAlnB'
                            })
                            .addSettingsInputRow({
                                id: 'qOkkwAnHvKJ0vYXeXMLsd',
                                parentId: '6eBJvoll3xtLJxdvOAlnB',
                                inputs: [
                                    {
                                        type: 'numberField',
                                        id: 'minLength-s4gmBg31azZC0UjZjpfTm',
                                        propertyName: 'minLength',
                                        label: 'Min Length',
                                        size: 'small',
                                        jsSetting: true,
                                    },
                                    {
                                        type: 'numberField',
                                        id: 'maxLength-s4gmBg31azZC0UjZjpfTm',
                                        defaultValue: 4,
                                        propertyName: 'maxLength',
                                        label: 'Max Length',
                                        size: 'small',
                                        jsSetting: true,
                                    },
                                ],
                                readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                            })
                            .addSettingsInputRow({
                                id: 'Scip2BCqWk6HniFIJTgtA',
                                parentId: '6eBJvoll3xtLJxdvOAlnB',
                                inputs: [
                                    {
                                        type: 'textField',
                                        id: 'message-s4gmBg31azZC0UjZjpfTm',
                                        propertyName: 'message',
                                        label: 'Message',
                                        size: 'small',
                                        jsSetting: true,
                                    },
                                    {
                                        type: 'codeEditor',
                                        id: 'validator-s4gmBg31azZC0UjZjpfTm',
                                        propertyName: 'validate.validator',
                                        label: 'Validator',
                                        labelAlign: 'right',
                                        tooltip: 'Enter custom validator logic for form.item rules. Returns a Promise',
                                    }
                                ],
                                readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                            })
                            .toJson()
                        ]
                    },
                    {
                        key: '3',
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
                                                            },
                                                            {
                                                                type: 'dropdown',
                                                                id: 'fontWeight-s4gmBg31azZC0UjZjpfTm',
                                                                label: 'Weight',
                                                                propertyName: 'font.weight',
                                                                hideLabel: true,
                                                                tooltip: "Controls text thickness (light, normal, bold, etc.)",
                                                                dropdownOptions: fontWeights,
                                                                width: 100,
                                                            },
                                                            {
                                                                type: 'colorPicker',
                                                                id: 'fontColor-s4gmBg31azZC0UjZjpfTm',
                                                                label: 'Color',
                                                                hideLabel: true,
                                                                propertyName: 'font.color',
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
                                                                type: 'textField',
                                                                id: 'width-s4gmBg31azZC0UjZjpfTm',
                                                                label: "Width",
                                                                width: 85,
                                                                propertyName: "dimensions.width",
                                                                icon: "widthIcon",
                                                                tooltip: "You can use any unit (%, px, em, etc). px by default if without unit"

                                                            },
                                                            {
                                                                type: 'textField',
                                                                id: 'minWidth-s4gmBg31azZC0UjZjpfTm',
                                                                label: "Min Width",
                                                                width: 85,
                                                                hideLabel: true,
                                                                propertyName: "dimensions.minWidth",
                                                                icon: "minWidthIcon",
                                                            },
                                                            {
                                                                type: 'textField',
                                                                id: 'maxWidth-s4gmBg31azZC0UjZjpfTm',
                                                                label: "Max Width",
                                                                width: 85,
                                                                hideLabel: true,
                                                                propertyName: "dimensions.maxWidth",
                                                                icon: "maxWidthIcon",
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
                                                                type: 'textField',
                                                                id: 'height-s4gmBg31azZC0UjZjpfTm',
                                                                label: "Height",
                                                                width: 85,
                                                                propertyName: "dimensions.height",
                                                                icon: "heightIcon",
                                                                tooltip: "You can use any unit (%, px, em, etc). px by default if without unit"
                                                            },
                                                            {
                                                                type: 'textField',
                                                                id: 'minHeight-s4gmBg31azZC0UjZjpfTm',
                                                                label: "Min Height",
                                                                width: 85,
                                                                hideLabel: true,
                                                                propertyName: "dimensions.minHeight",
                                                                icon: "minHeightIcon",
                                                            },
                                                            {
                                                                type: 'textField',
                                                                id: 'maxHeight-s4gmBg31azZC0UjZjpfTm',
                                                                label: "Max Height",
                                                                width: 85,
                                                                hideLabel: true,
                                                                propertyName: "dimensions.maxHeight",
                                                                icon: "maxHeightIcon",
                                                            }
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
                                                                type: 'button',
                                                                id: 'borderStyleRow-hideBorder',
                                                                label: "Border",
                                                                hideLabel: true,
                                                                propertyName: "border.hideBorder",
                                                                icon: "EyeOutlined",
                                                                iconAlt: "EyeInvisibleOutlined"
                                                            },
                                                        ]
                                                    })
                                                    .addContainer({
                                                        id: 'borderStyleRow',
                                                        parentId: 'borderStylePnl',
                                                        components: getBorderInputs() as any
                                                    })
                                                    .addContainer({
                                                        id: 'borderRadiusStyleRow',
                                                        parentId: 'borderStylePnl',
                                                        components: getCornerInputs() as any
                                                    })
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
                                                            buttonGroupOptions: backgroundTypeOptions,
                                                            readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                                        })
                                                        .addSettingsInputRow({
                                                            id: "backgroundStyleRow-color",
                                                            parentId: "backgroundStylePnl",
                                                            inputs: [{
                                                                type: 'colorPicker',
                                                                id: 'backgroundStyleRow-color',
                                                                label: "Color",
                                                                propertyName: "background.color",
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
                                                                type: 'multiColorPicker',
                                                                id: 'backgroundStyle-gradientColors',
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
                                                                type: 'textField',
                                                                id: 'backgroundStyle-url',
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
                                                                type: 'imageUploader',
                                                                id: 'backgroundStyle-image',
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
                                                                    type: 'textField',
                                                                    id: 'backgroundStyle-storedFile',
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
                                                            hidden: { _code: 'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.background?.type) === "color";', _mode: 'code', _value: false } as any,
                                                            readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                                            inputs: [
                                                                {
                                                                    type: 'customDropdown',
                                                                    id: 'backgroundStyleRow-size',
                                                                    label: "Size",
                                                                    hideLabel: true,
                                                                    propertyName: "background.size",
                                                                    dropdownOptions: sizeOptions,
                                                                    customTooltip: 'Size of the background image, two space separated values with units e.g "100% 100px"',
                                                                },
                                                                {
                                                                    type: 'customDropdown',
                                                                    id: 'backgroundStyleRow-position',
                                                                    label: "Position",
                                                                    hideLabel: true,
                                                                    propertyName: "background.position",
                                                                    dropdownOptions: positionOptions,
                                                                    customTooltip: 'Position of the background image, two space separated values with units e.g "5em 100px"',
                                                                }
                                                            ]
                                                        })
                                                        .addSettingsInputRow({
                                                            id: 'backgroundStyleRow-repeat',
                                                            parentId: 'backgroundStyleRow',
                                                            readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                                            inputs: [{
                                                                type: 'radio',
                                                                id: 'backgroundStyleRow-repeat-radio',
                                                                label: 'Repeat',
                                                                hideLabel: true,
                                                                propertyName: 'background.repeat',
                                                                inputType: 'radio',
                                                                buttonGroupOptions: repeatOptions,
                                                            }],
                                                            hidden: { _code: 'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.background?.type) === "color";', _mode: 'code', _value: false } as any,
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
                                                                type: 'numberField',
                                                                id: 'shadowStyleRow-offsetX',
                                                                label: 'Offset X',
                                                                hideLabel: true,
                                                                tooltip: 'Offset X',
                                                                width: 80,
                                                                icon: "offsetHorizontalIcon",
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
                                                        inputType: 'codeEditor',
                                                        propertyName: 'style',
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
                        key: '5',
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