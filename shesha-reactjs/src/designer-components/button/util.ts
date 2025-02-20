import { IStyleType } from "@/index";

export const buttonTypes = [
    {
        label: 'Default',
        value: 'default',
    },
    {
        label: 'Primary',
        value: 'primary',
    },
    {
        label: 'Ghost',
        value: 'ghost',
    },
    {
        label: 'Dashed',
        value: 'dashed',
    },
    {
        label: 'Link',
        value: 'link',
    },
    {
        label: 'Text',
        value: 'text',
    }
];

export const defaultStyles = (prev): IStyleType => {
    return {
        background: { type: 'color' },
        font: { weight: '400', size: 14, type: 'Segoe UI', align: 'center' },
        dimensions: { width: prev.block ? '100%' : 'auto', height: '32px', minHeight: '0px', maxHeight: 'auto', minWidth: '0px', maxWidth: 'auto' }
    };
};
