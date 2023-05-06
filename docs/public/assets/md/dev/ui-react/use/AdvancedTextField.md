

### API

#### IAdvancedTextField

```ts
interface IAdvancedTextField extends ITextField {
    validate?: (value: string) => boolean;
    mask?: Array<any>;
    maskProactive?: boolean;
    thousand?: boolean;
    thousandSeparator?: ',' | '.';
    TextFieldProps?: TPropsAny;
}
```

#### AdvancedTextField

```ts
const AdvancedTextField: React.ForwardRefExoticComponent<Omit<IAdvancedTextField, "ref"> & React.RefAttributes<unknown>>;
```

