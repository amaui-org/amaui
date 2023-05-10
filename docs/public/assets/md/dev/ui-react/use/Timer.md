

### API

#### ITimer

```ts
interface ITimer extends ISurface {
    renderValue?: (value: string) => any;
    icon?: boolean;
    onStart?: (event: React.MouseEvent<any>) => any;
    onFlag?: (event: React.MouseEvent<any>) => any;
    onPause?: (event: React.MouseEvent<any>) => any;
    onStop?: (event: React.MouseEvent<any>) => any;
    onResume?: (event: React.MouseEvent<any>) => any;
    Icon?: TElementReference;
    IconStart?: TElementReference;
    IconPause?: TElementReference;
    IconFlag?: TElementReference;
    IconStop?: TElementReference;
    TreeProps?: TPropsAny;
    TooltipProps?: TPropsAny;
    IconButtonProps?: TPropsAny;
    IconProps?: TPropsAny;
}
```

#### Timer

```ts
const Timer: React.ForwardRefExoticComponent<Omit<ITimer, "ref"> & React.RefAttributes<unknown>>;
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