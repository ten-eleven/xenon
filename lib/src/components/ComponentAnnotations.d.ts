import { ComponentClass } from "./Component";
export declare type ComponentType = ComponentClass<any>;
export interface ComponentOptions {
    css?: string;
    qa?: string;
    states?: Object;
}
export interface FieldOptions extends ComponentOptions {
    itemQA?: string;
    itemCSS?: string;
    itemType?: ComponentType;
    [index: string]: any;
}
export declare function field(componentClass: ComponentType, options?: FieldOptions): (target: any, propKey: string) => void;
export declare function defaults(options: FieldOptions): (target: any) => void;
