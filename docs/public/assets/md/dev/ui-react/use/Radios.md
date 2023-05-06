

### API

#### IRadios

```ts
interface IRadios extends ILine {
    tonal?: TTonal;
    color?: TColor;
    colorUnchecked?: TColor;
    version?: TVersion;
    size?: TSize;
    label?: TElement;
    uncheck?: boolean;
    valueDefault?: any;
    value?: any;
    onChange?: (value: any) => any;
    disabled?: boolean;
    LabelProps?: TPropsAny;
}
```

#### Radios

```ts
const Radios: React.ForwardRefExoticComponent<Omit<IRadios, "ref"> & React.RefAttributes<unknown>>;
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
}~
