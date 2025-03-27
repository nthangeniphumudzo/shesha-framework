import { IConfigurableFormComponent, OverflowType } from "@/providers";

export interface IDimensionsProps extends IConfigurableFormComponent {
    value?: IDimensionsValue;
    onChange?: Function;
}

export interface IDimensionsValue {
    width?: string | number;
    height?: string | number;
    minWidth?: string | number;
    minHeight?: string | number;
    maxWidth?: string | number;
    maxHeight?: string | number;
    overflow?: OverflowType;
}

export interface IDimensionsType {
    readOnly?: boolean;
    value?: IDimensionsValue;
    noOverflow?: boolean;
}