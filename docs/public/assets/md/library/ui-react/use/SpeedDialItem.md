

## API

#### ISpeedDialItem

```ts
interface ISpeedDialItem extends IIconButton {
    open?: boolean;
    label?: TElement;
    tooltipOpen?: boolean;
    closeOnClick?: boolean;
    render?: (values: {
        onBlur: (event: React.FocusEvent<any>) => any;
        onFocus: (event: React.FocusEvent<any>) => any;
        TooltipProps: any;
        [p: string]: any;
    }) => TElement;
    onBlur?: (event: React.FocusEvent<any>) => any;
    onFocus?: (event: React.FocusEvent<any>) => any;
    Icon?: TElementReference;
    TooltipProps?: TPropsAny;
}
```

#### SpeedDialItem

```ts
const SpeedDialItem: React.ForwardRefExoticComponent<Omit<ISpeedDialItem, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: SpeedDial",
      "to": "/dev/ui-react/use/SpeedDial"
    },
    "next": {
      "label": "UI react: SpyScroll",
      "to": "/dev/ui-react/use/SpyScroll"
    }
  }
}~
