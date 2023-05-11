

### API

#### TDrawingValue

```ts
type TDrawingValue = Array<{
    d?: string;
    stroke?: string;
    strokeWidth?: number;
}>;
```

#### IDrawing

```ts
interface IDrawing extends ISurface {
    render?: (element: string, props: TPropsAny, value: TDrawingValue) => TElement;
    svgRef?: TRef;
    updates?: boolean;
    actions?: boolean;
    exclude?: Array<string>;
    downloadName?: string;
    downloadType?: string;
    downloadQuality?: number;
    viewBox?: string;
    strokeColor?: string;
    strokeWidth?: number;
    valueDefault?: TDrawingValue;
    value?: TDrawingValue;
    onChange?: (value: TDrawingValue) => any;
    onMouseDown?: (event: React.MouseEvent<any>) => any;
    onClear?: (event?: React.MouseEvent<any>) => any;
    onDownload?: (event?: React.MouseEvent<any>) => any;
    IconClear?: TElementReference;
    IconDownload?: TElementReference;
    IconSize?: TElementReference;
    IconStrokeColor?: TElementReference;
    IconProps?: TPropsAny;
    SizeProps?: TPropsAny;
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
    PaletteProps?: TPropsAny;
    IconButtonProps?: TPropsAny;
    ColorTextFieldProps?: TPropsAny;
}
```

#### Drawing

```ts
const Drawing: React.ForwardRefExoticComponent<Omit<IDrawing, "ref"> & React.RefAttributes<unknown>>;
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
