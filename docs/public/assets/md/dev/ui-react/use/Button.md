

### API

#### IButton

```ts
interface IButton extends Omit<ISurface, 'elevation'> {
    size?: TSizeAny;
    fullWidth?: boolean;
    fontSize?: number;
    selected?: boolean;
    iconSelected?: TElement;
    start?: TElement;
    startSelected?: TElement;
    end?: TElement;
    endSelected?: TElement;
    elevation?: boolean;
    backgroundOpacity?: number;
    align?: 'start' | 'center' | 'end';
    loading?: boolean;
    loadingLabel?: TElement;
    loadingIcon?: TElement;
    loadingIconPosition?: 'start' | 'center' | 'end';
    fab?: boolean;
    chip?: boolean;
    icon?: boolean;
    focus?: boolean;
    value?: any;
    noIconRootFontSize?: boolean;
    firstLevelChildren?: TElement;
    disabled?: boolean;
    onFocus?: (event: React.FocusEvent<any>) => any;
    onBlur?: (event: React.FocusEvent<any>) => any;
    IconWrapperComponent?: TElementReference;
    InteractionProps?: TPropsAny;
    IconWrapperProps?: TPropsAny;
}
```

#### Button

```ts
const Button: React.ForwardRefExoticComponent<Omit<IButton, "ref"> & React.RefAttributes<unknown>>;
```

