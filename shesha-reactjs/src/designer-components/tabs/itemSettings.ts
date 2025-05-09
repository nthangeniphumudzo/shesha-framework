import { DesignerToolbarSettings } from '@/interfaces/toolbarSettings';

export const getItemSettings = () => {
    return new DesignerToolbarSettings()
        .addSearchableTabs({
            id: 'W_m7doMyCpCYwAYDfRh6I',
            propertyName: 'settingsTabs',
            parentId: 'root',
            label: 'Settings',
            hideLabel: true,
            labelAlign: 'right',
            ghost: true,
            size: 'small',
            tabs: [
                {
                    key: '1',
                    title: 'Common',
                    id: 's4gmBg31azZC0UjZjpfTm',
                    type: '',
                    components: [
                        ...new DesignerToolbarSettings()
                            .addSettingsInputRow({
                                id: 'name-title-frfwfwefvrr',
                                inputs: [
                                    {
                                        id: '14817287-cfa6-4f8f-a998-4eb6cc7cb818',
                                        type: 'textField',
                                        propertyName: 'name',
                                        label: 'Name',
                                        labelAlign: 'right',
                                        jsSetting: false,
                                        parentId: 'root'
                                    },
                                    {
                                        id: '02deeaa2-1dc7-439f-8f1a-1f8bec6e8425',
                                        type: 'textField',
                                        propertyName: 'title',
                                        label: 'Title',
                                        labelAlign: 'right',
                                        parentId: 'root',
                                        jsSetting: true
                                    }
                                ]
                            })
                            .addSettingsInputRow({
                                id: 'key-className-row',
                                inputs: [
                                    {
                                        id: '4bb6cdc7-0657-4e41-8c50-effe14d0dc96',
                                        type: 'textField',
                                        propertyName: 'key',
                                        label: 'Key',
                                        jsSetting: false,
                                        labelAlign: 'right',
                                        parentId: 'root'
                                    },
                                    {
                                        id: '29be3a6a-129a-4004-a627-2b257ecb78b4',
                                        type: 'textField',
                                        propertyName: 'className',
                                        label: 'Class Name',
                                        labelAlign: 'right',
                                        parentId: 'root',
                                        jsSetting: true
                                    }
                                ]
                            })
                            .addSettingsInputRow({
                                id: 'animated-icon-row',
                                inputs: [
                                    {
                                        id: 'caed91a6-3e9e-4f04-9800-7d9c7a3ffb80',
                                        type: 'switch',
                                        propertyName: 'animated',
                                        label: 'Animated',
                                        labelAlign: 'right',
                                        parentId: 'root',
                                        hidden: false,
                                        jsSetting: true,
                                        validate: {}
                                    },
                                    {
                                        id: '4595a895-5078-4986-934b-c5013bf315ad',
                                        type: 'iconPicker',
                                        propertyName: 'icon',
                                        label: 'Icon',
                                        jsSetting: true,
                                        labelAlign: 'right',
                                        parentId: 'root',
                                        hidden: false
                                    }
                                ]
                            })

                            .addSettingsInputRow({
                                id: 'hidden-forceRender-row',
                                inputs: [
                                    {
                                        id: '81da0da4-00db-4d6b-9f16-b364a6f9d9e1',
                                        type: 'switch',
                                        propertyName: 'forceRender',
                                        label: 'Force Render',
                                        labelAlign: 'right',
                                        parentId: 'root',
                                        hidden: false,
                                        validate: {},
                                        jsSetting: true
                                    },
                                    {
                                        id: 'd1e06550-826c-4db9-9b9f-ce05e565f64f',
                                        type: 'switch',
                                        propertyName: 'hidden',
                                        label: 'Hide',
                                        labelAlign: 'right',
                                        parentId: 'root',
                                        hidden: false,
                                        validate: {},
                                        jsSetting: true
                                    },
                                ]
                            })
                            .addSettingsInputRow({
                                id: 'selectMode-destroyInactiveTabPane-row',
                                inputs: [
                                    {
                                        id: '24a8be15-98eb-40f7-99ea-ebb602693e9c',
                                        type: 'editModeSelector',
                                        propertyName: 'editMode',
                                        parentId: 'root',
                                        label: 'Edit Mode',
                                        jsSetting: true
                                    },
                                    {
                                        id: "8615d12f - 6ea0- 4b11 - a1a1 - 6088c7160fd9",
                                        type: "dropdown",
                                        propertyName: "selectMode",
                                        parentId: "root",
                                        label: "Select Mode",
                                        allowClear: false,
                                        jsSetting: true,
                                        defaultValue: "editable",
                                        dropdownOptions: [
                                            {
                                                label: "Selectable",
                                                value: "editable"
                                            },
                                            {
                                                label: "Disabled",
                                                value: "readOnly"
                                            },
                                            {
                                                label: "Inherited from Edit mode",
                                                value: "inherited"
                                            }
                                        ],
                                    },

                                ]
                            })

                            .addSettingsInput(
                                {
                                    id: 'a8b12318-65a5-4b98-bcce-834b6a40b2fd',
                                    inputType: 'switch',
                                    propertyName: 'destroyInactiveTabPane',
                                    label: 'Destroy Inactive Tab Pane',
                                    labelAlign: 'right',
                                    parentId: 'root',
                                    hidden: false,
                                    validate: {},
                                    jsSetting: true
                                }
                            )
                            .toJson()
                    ]
                },
                {
                    key: '2',
                    title: 'Security',
                    id: '6Vw9iiDw9d0MD_Rh5cbIn',
                    type: '',
                    components: [...new DesignerToolbarSettings()
                        .addSettingsInput({
                                      id: '1adea529-1f0c-4def-bd41-ee166a5dfcd7',
                            inputType: 'permissions',
                            propertyName: 'permissions',
                            label: 'Permissions',
                            size: 'small',
                            jsSetting: true,
                            parentId: '6Vw9iiDw9d0MD_Rh5cbIn'
                        })
                        .toJson()
                    ]
                }
            ]
        }).toJson();
};