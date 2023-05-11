

### API

#### ILabel

```ts
interface ILabel extends ILine {
    tonal?: TTonal;
    color?: TColor;
    colorUnchecked?: TColor;
    version?: TVersion;
    size?: TSize;
    position?: 'start' | 'bottom' | 'end';
    input?: TElement;
    label?: TElement;
    valueDefault?: boolean;
    checked?: boolean;
    onChange?: (value: boolean, event?: React.ChangeEvent<any>) => any;
    disabled?: boolean;
    TypeProps?: TPropsAny;
}
```

#### Label

```ts
const Label: React.ForwardRefExoticComponent<Omit<ILabel, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: useKeyframes",
      "to": "/dev/ui-react/use/useKeyframes"
    },
    "next": {
      "label": "UI react: Line",
      "to": "/dev/ui-react/use/Line"
    }
  }
}~
