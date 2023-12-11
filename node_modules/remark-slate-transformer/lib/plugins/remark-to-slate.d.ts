import type { Plugin } from "unified";
import type * as mdast from "../models/mdast";
import type * as slate from "../models/slate";
import { OverridedMdastBuilders } from "../transformers/mdast-to-slate";
export type Options = {
    overrides?: OverridedMdastBuilders;
};
declare const plugin: Plugin<[Options?], mdast.Root, slate.Node[]>;
export default plugin;
