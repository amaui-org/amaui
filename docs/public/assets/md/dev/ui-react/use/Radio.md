

### API

#### IRadio

```ts
interface IRadio extends IIconButton {
    inputRef?: TRef;
    colorUnchecked?: TColor;
    valueDefault?: any;
    checked?: boolean;
    onChange?: (value: boolean, event: React.ChangeEvent<any>) => any;
    disabled?: boolean;
}
```

#### Radio

```ts
const Radio: React.ForwardRefExoticComponent<Omit<IRadio, "ref"> & React.RefAttributes<unknown>>;
```

