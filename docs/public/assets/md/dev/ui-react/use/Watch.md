

### API

#### IWatch

```ts
interface IWatch extends Omit<ISurface, 'version'> {
    version?: 'regular' | 'analog' | 'modern' | 'minimal';
    size?: TSize;
    timeVisible?: boolean;
    timeOfDayVisible?: boolean;
    dateVisible?: boolean;
    timeFormatString?: string;
    dateFormatString?: string;
    renderTime?: (value: number) => TElement;
    renderDate?: (value: number) => TElement;
    shadow?: boolean;
    AnalogProps?: TPropsAny;
    RegularProps?: TPropsAny;
    MinimalProps?: TPropsAny;
    ModernProps?: TPropsAny;
}
```

#### Watch

```ts
const Watch: React.ForwardRefExoticComponent<Omit<IWatch, "ref"> & React.RefAttributes<unknown>>;
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
