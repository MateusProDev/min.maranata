import type * as slate from "../../models/slate";
import type * as mdast from "../../models/mdast";
export type Decoration = Readonly<{
    [key in (mdast.Emphasis | mdast.Strong | mdast.Delete | mdast.InlineCode)["type"]]?: true;
}>;
export type OverridedMdastBuilders = {
    [key in mdast.Content["type"]]?: MdastBuilder<key>;
} & ({
    [key: string]: MdastBuilder<typeof key>;
} | {});
export type MdastBuilder<T extends string> = (node: T extends mdast.Content["type"] ? Extract<mdast.Content, {
    type: T;
}> : unknown, next: (children: any[]) => any) => object | undefined;
export declare const mdastToSlate: (node: mdast.Root, overrides: OverridedMdastBuilders) => slate.Node[];
export type Paragraph = ReturnType<typeof buildParagraph>;
declare const buildParagraph: ({ type, children }: mdast.Paragraph, deco: Decoration, overrides: OverridedMdastBuilders) => {
    type: "paragraph";
    children: slate.Node[];
};
export type Heading = ReturnType<typeof buildHeading>;
declare const buildHeading: ({ type, children, depth }: mdast.Heading, deco: Decoration, overrides: OverridedMdastBuilders) => {
    type: "heading";
    depth: 3 | 1 | 2 | 4 | 5 | 6;
    children: slate.Node[];
};
export type ThematicBreak = ReturnType<typeof buildThematicBreak>;
declare const buildThematicBreak: ({ type }: mdast.ThematicBreak) => {
    type: "thematicBreak";
    children: {
        text: string;
    }[];
};
export type Blockquote = ReturnType<typeof buildBlockquote>;
declare const buildBlockquote: ({ type, children }: mdast.Blockquote, deco: Decoration, overrides: OverridedMdastBuilders) => {
    type: "blockquote";
    children: slate.Node[];
};
export type List = ReturnType<typeof buildList>;
declare const buildList: ({ type, children, ordered, start, spread }: mdast.List, deco: Decoration, overrides: OverridedMdastBuilders) => {
    type: "list";
    children: slate.Node[];
    ordered: boolean | null | undefined;
    start: number | null | undefined;
    spread: boolean | null | undefined;
};
export type ListItem = ReturnType<typeof buildListItem>;
declare const buildListItem: ({ type, children, checked, spread }: mdast.ListItem, deco: Decoration, overrides: OverridedMdastBuilders) => {
    type: "listItem";
    children: slate.Node[];
    checked: boolean | null | undefined;
    spread: boolean | null | undefined;
};
export type Table = ReturnType<typeof buildTable>;
declare const buildTable: ({ type, children, align }: mdast.Table, deco: Decoration, overrides: OverridedMdastBuilders) => {
    type: "table";
    children: slate.Node[];
    align: mdast.AlignType[] | null | undefined;
};
export type TableRow = ReturnType<typeof buildTableRow>;
declare const buildTableRow: ({ type, children }: mdast.TableRow, deco: Decoration, overrides: OverridedMdastBuilders) => {
    type: "tableRow";
    children: slate.Node[];
};
export type TableCell = ReturnType<typeof buildTableCell>;
declare const buildTableCell: ({ type, children }: mdast.TableCell, deco: Decoration, overrides: OverridedMdastBuilders) => {
    type: "tableCell";
    children: slate.Node[];
};
export type Html = ReturnType<typeof buildHtml>;
declare const buildHtml: ({ type, value }: mdast.HTML) => {
    type: "html";
    children: {
        text: string;
    }[];
};
export type Code = ReturnType<typeof buildCode>;
declare const buildCode: ({ type, value, lang, meta }: mdast.Code) => {
    type: "code";
    lang: string | null | undefined;
    meta: string | null | undefined;
    children: {
        text: string;
    }[];
};
export type Yaml = ReturnType<typeof buildYaml>;
declare const buildYaml: ({ type, value }: mdast.YAML) => {
    type: "yaml";
    children: {
        text: string;
    }[];
};
export type Toml = ReturnType<typeof buildToml>;
declare const buildToml: ({ type, value }: mdast.TOML) => {
    type: "toml";
    children: {
        text: string;
    }[];
};
export type Math = ReturnType<typeof buildMath>;
declare const buildMath: ({ type, value }: mdast.Math) => {
    type: "math";
    children: {
        text: string;
    }[];
};
export type InlineMath = ReturnType<typeof buildInlineMath>;
declare const buildInlineMath: ({ type, value }: mdast.InlineMath) => {
    type: "inlineMath";
    children: {
        text: string;
    }[];
};
export type Definition = ReturnType<typeof buildDefinition>;
declare const buildDefinition: ({ type, identifier, label, url, title, }: mdast.Definition) => {
    type: "definition";
    identifier: string;
    label: string | null | undefined;
    url: string;
    title: string | null | undefined;
    children: {
        text: string;
    }[];
};
export type FootnoteDefinition = ReturnType<typeof buildFootnoteDefinition>;
declare const buildFootnoteDefinition: ({ type, children, identifier, label }: mdast.FootnoteDefinition, deco: Decoration, overrides: OverridedMdastBuilders) => {
    type: "footnoteDefinition";
    children: slate.Node[];
    identifier: string;
    label: string | null | undefined;
};
export type Text = ReturnType<typeof buildText>;
declare const buildText: (text: string, deco: Decoration) => {
    text: string;
    emphasis?: true;
    strong?: true;
    delete?: true;
    inlineCode?: true;
};
export type Break = ReturnType<typeof buildBreak>;
declare const buildBreak: ({ type }: mdast.Break) => {
    type: "break";
    children: {
        text: string;
    }[];
};
export type Link = ReturnType<typeof buildLink>;
declare const buildLink: ({ type, children, url, title }: mdast.Link, deco: Decoration, overrides: OverridedMdastBuilders) => {
    type: "link";
    children: slate.Node[];
    url: string;
    title: string | null | undefined;
};
export type Image = ReturnType<typeof buildImage>;
declare const buildImage: ({ type, url, title, alt }: mdast.Image) => {
    type: "image";
    url: string;
    title: string | null | undefined;
    alt: string | null | undefined;
    children: {
        text: string;
    }[];
};
export type LinkReference = ReturnType<typeof buildLinkReference>;
declare const buildLinkReference: ({ type, children, referenceType, identifier, label }: mdast.LinkReference, deco: Decoration, overrides: OverridedMdastBuilders) => {
    type: "linkReference";
    children: slate.Node[];
    referenceType: mdast.ReferenceType;
    identifier: string;
    label: string | null | undefined;
};
export type ImageReference = ReturnType<typeof buildImageReference>;
declare const buildImageReference: ({ type, alt, referenceType, identifier, label, }: mdast.ImageReference) => {
    type: "imageReference";
    alt: string | null | undefined;
    referenceType: mdast.ReferenceType;
    identifier: string;
    label: string | null | undefined;
    children: {
        text: string;
    }[];
};
export type Footnote = ReturnType<typeof buildFootnote>;
declare const buildFootnote: ({ type, children }: mdast.Footnote, deco: Decoration, overrides: OverridedMdastBuilders) => {
    type: "footnote";
    children: slate.Node[];
};
export type FootnoteReference = ReturnType<typeof buildFootnoteReference>;
declare const buildFootnoteReference: ({ type, identifier, label, }: mdast.FootnoteReference) => {
    type: "footnoteReference";
    identifier: string;
    label: string | null | undefined;
    children: {
        text: string;
    }[];
};
export type SlateNode = Paragraph | Heading | ThematicBreak | Blockquote | List | ListItem | Table | TableRow | TableCell | Html | Code | Yaml | Toml | Definition | FootnoteDefinition | Text | Break | Link | Image | LinkReference | ImageReference | Footnote | FootnoteReference | Math | InlineMath;
export {};
