

### API

#### ITextField

```ts
interface ITextField extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    size?: TSize;
    rootRef?: TRef;
    valueDefault?: string;
    value?: string;
    onChange?: (value: any, event?: React.ChangeEvent<HTMLInputElement>) => any;
    label?: string;
    align?: 'start' | 'end';
    start?: TElement;
    startVerticalAlign?: 'start' | 'center' | 'end';
    end?: TElement;
    endVerticalAlign?: 'start' | 'center' | 'end';
    placeholder?: string;
    fullWidth?: boolean;
    helperText?: string;
    counter?: number;
    prefix?: string;
    sufix?: string;
    noPrefixMargin?: boolean;
    noSufixMargin?: boolean;
    enabled?: boolean;
    name?: string;
    autoFocus?: boolean;
    autoComplete?: boolean;
    type?: React.HTMLInputTypeAttribute;
    required?: boolean;
    optional?: boolean;
    optionalText?: string;
    error?: boolean;
    multiline?: boolean;
    rows?: number;
    minRows?: number;
    maxRows?: number;
    focus?: boolean;
    footer?: TElement;
    readOnly?: boolean;
    disabled?: boolean;
    onFocus?: (event: React.FocusEvent<any>) => any;
    onBlur?: (event: React.FocusEvent<any>) => any;
    onMouseEnter?: (event: React.MouseEvent<any>) => any;
    onMouseLeave?: (event: React.MouseEvent<any>) => any;
    inputProps?: TPropsAny;
    InputWrapperProps?: TPropsAny;
    WrapperComponent?: TElementReference;
}
```

#### TextField

```ts
const TextField: React.ForwardRefExoticComponent<Omit<ITextField, "ref"> & React.RefAttributes<unknown>>;
```

