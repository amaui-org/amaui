

### API

#### IRichTextEditor

```ts
interface IRichTextEditor extends ILine {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    value?: string;
    onChange?: (event: React.ChangeEvent<any>) => any;
    render?: (version: string, props: TPropsAny, value: string, update: (command: string) => any) => TElement;
    miniMenu?: boolean;
    miniMenuInclude?: Array<string>;
    exclude?: Array<string>;
    updates?: boolean;
    actions?: boolean;
    fontFamilies?: Array<{
        value?: string;
        label?: string;
    }>;
    addFontFamilies?: Array<{
        value?: string;
        label?: string;
    }>;
    IconItalic?: TElementReference;
    IconUnderline?: TElementReference;
    IconBold?: TElementReference;
    IconStrikeLine?: TElementReference;
    IconColor?: TElementReference;
    IconBackground?: TElementReference;
    IconAlignLeft?: TElementReference;
    IconAlignCenter?: TElementReference;
    IconAlignRight?: TElementReference;
    IconAlignJustify?: TElementReference;
    IconIndent?: TElementReference;
    IconOutdent?: TElementReference;
    IconSuperscript?: TElementReference;
    IconSubscript?: TElementReference;
    IconListOrdered?: TElementReference;
    IconListUnordered?: TElementReference;
    IconHorizontalRule?: TElementReference;
    IconLinkAdd?: TElementReference;
    IconLinkRemove?: TElementReference;
    IconQuote?: TElementReference;
    IconImage?: TElementReference;
    IconVideo?: TElementReference;
    IconVideoYoutube?: TElementReference;
    IconTable?: TElementReference;
    IconCode?: TElementReference;
    IconDrawing?: TElementReference;
    IconCopy?: TElementReference;
    IconCut?: TElementReference;
    IconPaste?: TElementReference;
    IconDelete?: TElementReference;
    IconClear?: TElementReference;
    IconSelectAll?: TElementReference;
    IconSave?: TElementReference;
    IconPrint?: TElementReference;
    IconUndo?: TElementReference;
    IconRedo?: TElementReference;
    AppendProps?: TPropsAny;
    ToolbarProps?: TPropsAny;
    ToolbarUpdatesProps?: TPropsAny;
    ToolbarActionsProps?: TPropsAny;
    ToggleButtonProps?: TPropsAny;
    ToggleButtonsProps?: TPropsAny;
    DividerProps?: TPropsAny;
    SelectProps?: TPropsAny;
    ListItemProps?: TPropsAny;
    TooltipProps?: TPropsAny;
    MiniMenuProps?: TPropsAny;
    DrawingProps?: TPropsAny;
    IconProps?: TPropsAny;
    ColorTextFieldProps?: TPropsAny;
}
```

#### RichTextEditor

```ts
const RichTextEditor: React.ForwardRefExoticComponent<Omit<IRichTextEditor, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}
