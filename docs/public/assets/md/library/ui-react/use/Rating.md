

## API

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
    iconInactive?: TElement;
    iconActive?: TElement;
}
```

#### Rating

```ts
const Rating: React.ForwardRefExoticComponent<Omit<IRating, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Radios",
      "to": "/library/ui-react/use/Radios"
    },
    "next": {
      "label": "UI react: Reset",
      "to": "/library/ui-react/use/Reset"
    }
  }
}~
