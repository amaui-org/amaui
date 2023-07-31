

## API

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
      "label": "UI react: Radio",
      "to": "/library/ui-react/use/Radio"
    },
    "next": {
      "label": "UI react: Rating",
      "to": "/library/ui-react/use/Rating"
    }
  }
}~
