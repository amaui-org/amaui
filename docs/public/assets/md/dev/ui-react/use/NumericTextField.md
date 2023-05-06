

### API

#### INumericTextField

```ts
interface INumericTextField extends IAdvancedTextField {
    min?: number;
    max?: number;
    increment?: boolean;
    decrement?: boolean;
    incrementValue?: number;
    decrementValue?: number;
    IconIncrement?: TElementReference;
    IconDecrement?: TElementReference;
    IconButtonProps?: TPropsAny;
}
```

#### NumericTextField

```ts
const NumericTextField: React.ForwardRefExoticComponent<Omit<INumericTextField, "ref"> & React.RefAttributes<unknown>>;
```

