

## API

#### ICheckbox

```ts
interface ICheckbox extends IIconButton {
    inputRef?: TRef;
    colorIndeterminate?: TColor;
    colorUnchecked?: TColor;
    valueDefault?: any;
    checked?: boolean;
    onChange?: (value: boolean, event: React.ChangeEvent<any>) => any;
    indeterminate?: boolean;
    disabled?: boolean;
}
```

#### Checkbox

```ts
const Checkbox: React.ForwardRefExoticComponent<Omit<ICheckbox, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Chart",
      "to": "/dev/ui-react/use/Chart"
    },
    "next": {
      "label": "UI react: Chip",
      "to": "/dev/ui-react/use/Chip"
    }
  }
}~
