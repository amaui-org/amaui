

## API

#### ISwitch

```ts
interface ISwitch extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    size?: TSize;
    inputRef?: TRef;
    valueDefault?: boolean;
    checked?: boolean;
    onChange?: (value: boolean, event: React.ChangeEvent<any>) => any;
    OnIcon?: TElementReference;
    OffIcon?: TElementReference;
    disabled?: boolean;
}
```

#### Switch

```ts
const Switch: React.ForwardRefExoticComponent<Omit<ISwitch, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Surface",
      "to": "/dev/ui-react/use/Surface"
    },
    "next": {
      "label": "UI react: Tab",
      "to": "/dev/ui-react/use/Tab"
    }
  }
}~
