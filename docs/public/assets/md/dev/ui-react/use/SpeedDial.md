

### API

#### ISpeedDial

```ts
interface ISpeedDial extends Omit<ILine, 'direction'> {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    open?: boolean;
    openDefault?: boolean;
    onOpen?: () => any;
    onClose?: () => any;
    in?: boolean;
    position?: 'top' | 'bottom';
    alignment?: 'start' | 'left' | 'center' | 'right' | 'end';
    direction?: 'top' | 'left' | 'right' | 'bottom';
    closeOnClick?: boolean;
    tooltipOpen?: boolean;
    noRotate?: boolean;
    tooltipLabel?: TElement;
    onKeyDown?: (event: React.KeyboardEvent<any>) => any;
    disabled?: boolean;
    IconOpen?: TElementReference;
    Icon?: TElementReference;
    FabTransitionComponent?: TElementReference;
    SpeeDialItemTransitionComponent?: TElementReference;
    TooltipProps?: TPropsAny;
    FabProps?: TPropsAny;
    FabTransitionComponentProps?: TPropsAny;
    SpeeDialItemTransitionComponentProps?: TPropsAny;
}
```

#### SpeedDial

```ts
const SpeedDial: React.ForwardRefExoticComponent<Omit<ISpeedDial, "ref"> & React.RefAttributes<unknown>>;
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