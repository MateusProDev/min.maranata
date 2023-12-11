import type { Plugin } from "unified";
import type * as mdast from "../models/mdast";
import type * as slate from "../models/slate";
import { OverridedSlateBuilders } from "../transformers/slate-to-mdast";
export type Options = {
    overrides?: OverridedSlateBuilders;
};
declare const plugin: Plugin<[Options?], slate.Node, mdast.Root>;
export default plugin;
