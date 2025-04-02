import { DesignerToolbarSettings } from '@/interfaces/toolbarSettings';
import { FormLayout } from 'antd/lib/form/Form';
import { fontTypes, fontWeights } from '../_settings/utils/font/utils';
import { getBorderInputs, getCornerInputs } from '../_settings/utils/border/utils';
import { backgroundTypeOptions, positionOptions, repeatOptions, sizeOptions } from '../_settings/utils/background/utils';
import { onAddNewItem } from './utils';
import { getItemSettings } from './itemSettings';
import { overflowOptions } from '../_settings/utils/dimensions/utils';
import { nanoid } from '@/utils/uuid';

export const getSettings = () => {

    const prefix = 'getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.tabPosition) === ';

    const hideConditions = {
        topLeft: 'return ' + prefix + '"top" || ' + prefix + '"left";',
        topRight: 'return ' + prefix + '"top" || ' + prefix + '"right";',
        bottomLeft: 'return ' + prefix + '"bottom" || ' + prefix + '"left";',
        bottomRight: 'return ' + prefix + '"bottom" || ' + prefix + '"right";',
    };

    return {
        components: new DesignerToolbarSettings()
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
                        type: '',
                        components: [
                            ...new DesignerToolbarSettings()
                                .addSettingsInput({
                                    id: '14817287-cfa6-4f8f-a998-4eb6cc7cb818',
                                    inputType: 'textField',
                                    propertyName: 'componentName',
                                    label: 'Component Name',
                                    labelAlign: 'right',
                                    jsSetting: false,
                                    validate: { required: true },
                                    parentId: 'root'
                                })
                                .addSettingsInputRow({
                                    id: nanoid(),
                                    readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                    inputs: [
                                        {
                                            id: nanoid(),
                                            type: 'dropdown',
                                            propertyName: 'defaultActiveKey',
                                            label: 'Default Active Tab',
                                            labelAlign: 'right',
                                            parentId: 'root',
                                            dropdownOptions: { _code: 'return  getSettingValue(data?.tabs)?._data?.map((item) => ({ ...item, label: item?.title, value: item?.id }));', _mode: 'code', _value: 0 } as any
                                        },
                                        {
                                            id: '4bb6cdc7-0657-4e41-8c50-effe14d0dc96',
                                            type: 'dropdown',
                                            propertyName: 'tabType',
                                            label: 'Tab Type',
                                            defaultValue: 'card',
                                            dropdownOptions: [
                                                { value: 'line', label: 'Line' },
                                                { value: 'card', label: 'Card' }
                                            ],
                                            jsSetting: false,
                                            labelAlign: 'right',
                                            parentId: 'root'
                                        }
                                    ]
                                })
                                .addSettingsInputRow({
                                    id: 'd1e06550-826c-4db9-9b9f-ce05e565f64f',
                                    readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                    inputs: [
                                        {
                                            id: '4595a895-5078-4986-934b-c5013bf315ad',
                                            type: 'itemListConfiguratorModal',
                                            propertyName: 'tabs',
                                            label: 'Tabs',
                                            labelAlign: 'right',
                                            parentId: 'root',
                                            buttonTextReadOnly: 'View Tab Panes',
                                            buttonText: 'Configure Tab Panes',
                                            listItemSettingsMarkup: getItemSettings(),
                                            onAddNewItem: onAddNewItem,
                                            hidden: false,
                                            modalSettings: {
                                                title: 'Configure Tab Panes',
                                                header: 'Here you can configure the tab panes by adjusting their settings and ordering.'
                                            },
                                            modalReadonlySettings: {
                                                title: 'View Tab Panes',
                                                header: 'Here you can view tab panes configuration'
                                            }
                                        },
                                        {
                                            id: nanoid(),
                                            type: 'switch',
                                            propertyName: 'hidden',
                                            label: 'Hide',
                                            jsSetting: true,
                                            labelAlign: 'right',
                                            parentId: 'root',
                                        }
                                    ]
                                })
                                .toJson()
                        ]
                    },
                    {
                        key: '2',
                        title: 'Appearance',
                        type: '',
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
                                        .addSettingsInput({
                                            id: '29be3a6a-129a-4004-a627-2b257ecb78b4',
                                            inputType: 'dropdown',
                                            propertyName: 'tabPosition',
                                            tooltip: "This will set the position for all buttons",
                                            defaultValue: 'top',
                                            label: 'Position',
                                            dropdownOptions: [
                                                { value: 'top', label: 'Top' },
                                                { value: 'bottom', label: 'Bottom' },
                                                { value: 'left', label: 'Left' },
                                                { value: 'right', label: 'Right' }
                                            ],
                                            labelAlign: 'right',
                                            parentId: 'root'
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
                                                            }
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
                                                    .addSettingsInput({
                                                        id: 'overflow-s4gmBg31azZC0UjZjpfTm',
                                                        parentId: 'displayCollapsiblePanel',
                                                        inline: true,
                                                        inputType: 'dropdown',
                                                        label: 'Overflow',
                                                        defaultValue: 'auto',
                                                        propertyName: 'dimensions.overflow',
                                                        dropdownOptions: overflowOptions
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
                                                    .addContainer({
                                                        id: 'borderStyleRow',
                                                        parentId: 'borderStylePnl',
                                                        components: getBorderInputs() as any
                                                    })
                                                    .addContainer({
                                                        id: 'borderRadiusStyleRow',
                                                        parentId: 'borderStylePnl',
                                                        components: getCornerInputs("", true, hideConditions) as any
                                                    })
                                                    .toJson()
                                                ]
                                            }
                                        })
                                        .addCollapsiblePanel({
                                            id: 'tab-line-color-collapsible-panel',
                                            propertyName: 'pnlTabLineColor',
                                            label: 'Line Color',
                                            labelAlign: 'right',
                                            ghost: true,
                                            parentId: 'styleRouter',
                                            collapsible: 'header',
                                            hidden: { _code: 'return  getSettingValue(data?.tabType) !== "line";', _mode: 'code', _value: false } as any,
                                            content: {
                                                id: 'tab-line-color-pnl',
                                                components: [
                                                    ...new DesignerToolbarSettings()
                                                        .addSettingsInput({
                                                            id: 'tab-line-color-row',
                                                            parentId: 'tab-line-color-pnl',
                                                            inputType: 'colorPicker',
                                                            label: 'Color',
                                                            propertyName: 'tabLineColor',
                                                            jsSetting: false,
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
                                            hidden: { _code: 'return  getSettingValue(data?.tabType) === "line";', _mode: 'code', _value: false } as any,
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
                                                                    customTooltip: 'Size of the background image, two space separated values with units e.g "100% 100px"',
                                                                    dropdownOptions: sizeOptions,
                                                                },
                                                                {
                                                                    type: 'customDropdown',
                                                                    id: 'backgroundStyleRow-position',
                                                                    label: "Position",
                                                                    hideLabel: true,
                                                                    customTooltip: 'Position of the background image, two space separated values with units e.g "5em 100px"',
                                                                    propertyName: "background.position",
                                                                    dropdownOptions: positionOptions,
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
                                            label: 'Custom Styles',
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
                                                        hideLabel: false,
                                                        label: 'Style',
                                                        description: 'A script that returns the style of the element as an object. This should conform to CSSProperties',
                                                    })
                                                    .toJson()
                                                ]
                                            }
                                        })
                                        .addCollapsiblePanel({
                                            id: 'tabCardStyleCollapsiblePanel',
                                            propertyName: 'cardStyle',
                                            label: 'Card Styles',
                                            labelAlign: 'right',
                                            collapsedByDefault: true,
                                            parentId: 'cardStyleRouter',
                                            collapsible: 'header',
                                            content: {
                                                id: 'tab-card-stylePnl',
                                                components: [...new DesignerToolbarSettings()
                                                    .addCollapsiblePanel({
                                                        id: 'fontStyleCollapsiblePanel',
                                                        propertyName: 'tabCardFontStyle',
                                                        label: 'Font',
                                                        labelAlign: 'right',
                                                        parentId: 'styleRouter',
                                                        ghost: true,
                                                        collapsible: 'header',
                                                        content: {
                                                            id: 'cardfontStylePnl',
                                                            components: [...new DesignerToolbarSettings()
                                                                .addSettingsInputRow({
                                                                    id: 'try26voxhs-HxJ5k5ngYE',
                                                                    parentId: 'cardfontStylePnl',
                                                                    inline: true,
                                                                    propertyName: 'card.font',
                                                                    readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                                                    inputs: [
                                                                        {
                                                                            type: 'dropdown',
                                                                            id: 'fontFamily-s4gmBg31azZC0UjZjpfTm',
                                                                            label: 'Family',
                                                                            propertyName: 'card.font.type',
                                                                            hideLabel: true,
                                                                            defaultValue: 'Arial',
                                                                            dropdownOptions: fontTypes,
                                                                        },
                                                                        {
                                                                            type: 'numberField',
                                                                            id: 'fontSize-s4gmBg31azZC0UjZjpfTm',
                                                                            label: 'Size',
                                                                            propertyName: 'card.font.size',
                                                                            hideLabel: true,
                                                                            defaultValue: 14,
                                                                            width: 50,
                                                                        },
                                                                        {
                                                                            type: 'dropdown',
                                                                            id: 'fontWeight-s4gmBg31azZC0UjZjpfTm',
                                                                            label: 'Weight',
                                                                            propertyName: 'card.font.weight',
                                                                            hideLabel: true,
                                                                            defaultValue: 400,
                                                                            tooltip: "Controls text thickness (light, normal, bold, etc.)",
                                                                            dropdownOptions: fontWeights,
                                                                            width: 100,
                                                                        },
                                                                        {
                                                                            type: 'colorPicker',
                                                                            id: 'fontColor-s4gmBg31azZC0UjZjpfTm',
                                                                            label: 'Color',
                                                                            hideLabel: true,
                                                                            propertyName: 'card.font.color',
                                                                        }
                                                                    ],
                                                                })
                                                                .toJson()
                                                            ]
                                                        }
                                                    })
                                                    .addCollapsiblePanel({
                                                        id: 'dimensionCollapsiblePanel',
                                                        propertyName: 'card.pnlDimension',
                                                        label: 'Dimension',
                                                        labelAlign: 'right',
                                                        ghost: true,
                                                        parentId: 'styleRouter',
                                                        collapsible: 'header',
                                                        content: {
                                                            id: 'dimensionPnl',
                                                            components: [...new DesignerToolbarSettings()
                                                                .addSettingsInputRow({
                                                                    id: 'card-width-dimensions-style-row-width',
                                                                    parentId: 'card-width-dimensions-style-pnl',
                                                                    inline: true,
                                                                    readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                                                    inputs: [
                                                                        {
                                                                            type: 'textField',
                                                                            id: 'card-width-s4gmBg31azZC0UjZjpfTm',
                                                                            label: "Width",
                                                                            width: 85,
                                                                            propertyName: "card.dimensions.width",
                                                                            icon: "widthIcon",
                                                                            tooltip: "You can use any unit (%, px, em, etc). px by default if without unit"
                                                                        },
                                                                        {
                                                                            type: 'textField',
                                                                            id: 'card-min-width-s4gmBg31azZC0UjZjpfTm',
                                                                            label: "Min Width",
                                                                            width: 85,
                                                                            hideLabel: true,
                                                                            propertyName: "card.dimensions.minWidth",
                                                                        },
                                                                        {
                                                                            type: 'textField',
                                                                            id: 'card-max-width-s4gmBg31azZC0UjZjpfTm',
                                                                            label: "Max Width",
                                                                            width: 85,
                                                                            hideLabel: true,
                                                                            propertyName: "card.dimensions.maxWidth",
                                                                        }
                                                                    ]
                                                                })
                                                                .addSettingsInputRow({
                                                                    id: 'card-height-dimensions-style-row-height',
                                                                    parentId: 'card-height-dimensions-style-pnl',
                                                                    inline: true,
                                                                    readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                                                    inputs: [
                                                                        {
                                                                            type: 'textField',
                                                                            id: 'card-height-s4gmBg31azZC0UjZjpfTm',
                                                                            label: "Height",
                                                                            width: 85,
                                                                            propertyName: "card.dimensions.height",
                                                                            icon: "heightIcon",
                                                                            tooltip: "You can use any unit (%, px, em, etc). px by default if without unit"
                                                                        },
                                                                        {
                                                                            type: 'textField',
                                                                            id: 'card-min-height-s4gmBg31azZC0UjZjpfTm',
                                                                            label: "Min Height",
                                                                            width: 85,
                                                                            hideLabel: true,
                                                                            propertyName: "card.dimensions.minHeight",
                                                                        },
                                                                        {
                                                                            type: 'textField',
                                                                            id: 'card-max-height-s4gmBg31azZC0UjZjpfTm',
                                                                            label: "Max Height",
                                                                            width: 85,
                                                                            hideLabel: true,
                                                                            propertyName: "card.dimensions.maxHeight",
                                                                        }
                                                                    ]
                                                                })
                                                                .toJson()
                                                            ]
                                                        }
                                                    })
                                                    .addCollapsiblePanel({
                                                        id: 'backgroundStyleCollapsiblePanel',
                                                        propertyName: 'card.pnlBackgroundStyle',
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
                                                                        propertyName: "card.background.type",
                                                                        inputType: "radio",
                                                                        defaultValue: "color",
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
                                                                            defaultValue: 'rgba(0,0,0,0.02)',
                                                                            propertyName: "card.background.color",
                                                                            hideLabel: true,
                                                                            jsSetting: false,
                                                                        }],
                                                                        hidden: { _code: 'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.card?.background?.type) !== "color";', _mode: 'code', _value: false } as any,
                                                                        readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                                                    })
                                                                    .addSettingsInputRow({
                                                                        id: "backgroundStyle-gradientColors",
                                                                        parentId: "backgroundStylePnl",
                                                                        inputs: [{
                                                                            type: 'multiColorPicker',
                                                                            id: 'backgroundStyle-gradientColors',
                                                                            propertyName: "card.background.gradient.colors",
                                                                            label: "Colors",
                                                                            jsSetting: false,
                                                                        }
                                                                        ],
                                                                        hidden: { _code: 'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.card?.background?.type) !== "gradient";', _mode: 'code', _value: false } as any,
                                                                        hideLabel: true,
                                                                        readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                                                    })
                                                                    .addSettingsInputRow({
                                                                        id: "backgroundStyle-url",
                                                                        parentId: "backgroundStylePnl",
                                                                        inputs: [{
                                                                            type: 'textField',
                                                                            id: 'backgroundStyle-url',
                                                                            propertyName: "card.background.url",
                                                                            jsSetting: false,
                                                                            label: "URL",
                                                                        }],
                                                                        hidden: { _code: 'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.card?.background?.type) !== "url";', _mode: 'code', _value: false } as any,
                                                                        readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                                                    })
                                                                    .addSettingsInputRow({
                                                                        id: "backgroundStyle-image",
                                                                        parentId: 'backgroundStylePnl',
                                                                        inputs: [{
                                                                            type: 'imageUploader',
                                                                            id: 'backgroundStyle-image',
                                                                            propertyName: 'card.background.uploadFile',
                                                                            label: "Image",
                                                                            jsSetting: false,
                                                                        }],
                                                                        hidden: { _code: 'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.card?.background?.type) !== "image";', _mode: 'code', _value: false } as any,
                                                                        readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                                                    })
                                                                    .addSettingsInputRow({
                                                                        id: "backgroundStyleRow-storedFile",
                                                                        parentId: 'backgroundStylePnl',
                                                                        hidden: { _code: 'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.card?.background?.type) !== "storedFile";', _mode: 'code', _value: false } as any,
                                                                        readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                                                        inputs: [
                                                                            {
                                                                                type: 'textField',
                                                                                id: 'backgroundStyle-storedFile',
                                                                                jsSetting: false,
                                                                                propertyName: "card.background.storedFile.id",
                                                                                label: "File ID"
                                                                            }
                                                                        ]
                                                                    })
                                                                    .addSettingsInputRow({
                                                                        id: "backgroundStyleRow-controls",
                                                                        parentId: 'backgroundStyleRow',
                                                                        inline: true,
                                                                        hidden: { _code: 'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.card?.background?.type) === "color";', _mode: 'code', _value: false } as any,
                                                                        readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                                                        inputs: [
                                                                            {
                                                                                type: 'customDropdown',
                                                                                id: 'backgroundStyleRow-size',
                                                                                label: "Size",
                                                                                defaultValue: 'cover',
                                                                                hideLabel: true,
                                                                                propertyName: "card.background.size",
                                                                                dropdownOptions: sizeOptions,
                                                                            },
                                                                            {
                                                                                type: 'customDropdown',
                                                                                id: 'backgroundStyleRow-position',
                                                                                label: "Position",
                                                                                hideLabel: true,
                                                                                defaultValue: 'center',
                                                                                propertyName: "card.background.position",
                                                                                dropdownOptions: positionOptions,
                                                                            }
                                                                        ]
                                                                    })
                                                                    .addSettingsInputRow({
                                                                        id: 'card-bg-repeat-row',
                                                                        parentId: 'backgroundStyleRow',
                                                                        readOnly: { _code: 'return  getSettingValue(data?.readOnly);', _mode: 'code', _value: false } as any,
                                                                        inputs: [
                                                                            {
                                                                                type: 'radio',
                                                                                id: 'backgroundStyleRow-repeat',
                                                                                parentId: 'backgroundStyleRow',
                                                                                label: 'Repeat',
                                                                                hideLabel: true,
                                                                                propertyName: 'card.background.repeat',
                                                                                buttonGroupOptions: repeatOptions,
                                                                                hidden: { _code: 'return  getSettingValue(data[`${contexts.canvasContext?.designerDevice || "desktop"}`]?.card?.background?.type) === "color";', _mode: 'code', _value: false } as any,
                                                                            }]
                                                                    })
                                                                    .toJson()
                                                            ],
                                                        }
                                                    })
                                                    .addCollapsiblePanel({
                                                        id: 'customStyleCollapsiblePanel',
                                                        propertyName: 'card.customStyle',
                                                        label: 'Custom Styles',
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
                                                                    propertyName: 'card.style',
                                                                    hideLabel: false,
                                                                    label: 'Style',
                                                                    description: 'A script that returns the style of the element as an object. This should conform to CSSProperties',
                                                                })
                                                                .toJson()
                                                            ]
                                                        }
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
                        type: '',
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