import type * as slate from "../../models/slate";
import type * as mdast from "../../models/mdast";
export type OverridedSlateBuilders = {
    [key: string]: SlateBuilder;
};
export type SlateBuilder = (node: unknown, next: (children: any[]) => any) => object | undefined;
export declare const slateToMdast: (node: slate.Node, overrides: OverridedSlateBuilders) => mdast.Root;
