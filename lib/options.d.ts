import { AnyComponent, ComponentRegistory } from './types/vue';
export declare const defaultOptions: InfoAddonOptions;
export interface InfoAddonOptions {
    header: boolean;
    source: boolean;
    summary: string;
    previewClassName?: string;
    previewStyle?: ElementCSSInlineStyle;
    components: ComponentRegistory | false | null;
    wrapperComponent: AnyComponent;
    docsInPanel: boolean;
    useDocgen: boolean;
}
