

### API

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


{
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