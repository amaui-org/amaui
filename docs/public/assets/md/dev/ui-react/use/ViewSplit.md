

### API

#### IViewSplit

```ts
interface IViewSplit extends ILine {
    tonal?: TTonal;
    color?: TColor;
    valueDefault?: number;
    value?: number;
    onChange?: (value: number) => any;
    version?: 'auto' | 'manual';
    orientation?: 'vertical' | 'horizontal';
    divider?: boolean;
    onFocus?: (event: React.FocusEvent<any>) => any;
    onBlur?: (event: React.FocusEvent<any>) => any;
    onMouseEnter?: (event: React.MouseEvent<any>) => any;
    onMouseLeave?: (event: React.MouseEvent<any>) => any;
    iconButtonComponent?: TElement;
    iconOrientationHorizontal?: TElement;
    iconOrientationVertical?: TElement;
    IconButtonProps?: TPropsAny;
    DividerProps?: TPropsAny;
}
```

#### ViewSplit

```ts
const ViewSplit: React.ForwardRefExoticComponent<Omit<IViewSplit, "ref"> & React.RefAttributes<unknown>>;
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
