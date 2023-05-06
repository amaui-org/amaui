

### API

#### IRating

```ts
interface IRating extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    colorInactive?: TColor;
    size?: TSize;
    value?: number;
    valueDefault?: number;
    valueActive?: number;
    valueActiveDefault?: number;
    onChange?: (value: number) => any;
    onChangeActive?: (value: number) => any;
    values?: number;
    precision?: number;
    onlyValue?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    icon?: TElement;
    icons?: {
        default?: TElement;
        [property: number | string]: TElement;
    };
```

#### Rating

```ts
const Rating: React.ForwardRefExoticComponent<Omit<IRating, "ref"> & React.RefAttributes<unknown>>;
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
