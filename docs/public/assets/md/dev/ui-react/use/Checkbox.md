

### API

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

