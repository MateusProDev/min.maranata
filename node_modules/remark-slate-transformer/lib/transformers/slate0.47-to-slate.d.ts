import type { BlockJSON, InlineJSON, TextJSON } from "slate_legacy";
import type * as slate from "../models/slate";
export declare const slate047ToSlate: (nodes: (BlockJSON | InlineJSON | TextJSON)[]) => slate.Node[];
