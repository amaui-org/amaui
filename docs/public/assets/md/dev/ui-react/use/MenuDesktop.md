

### API

#### TMenuDesktopValue

```ts
type TMenuDesktopValue = string | number;
```

#### TMenuDesktopItem

```ts
type TMenuDesktopItem = {
    value?: TMenuDesktopValue;
    label?: TElement;
    menu?: TElement;
    disabled?: boolean;
};
```

#### IMenuDesktop

```ts
interface IMenuDesktop extends ILine {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    items?: Array<TMenuDesktopItem>;
    valueDefault?: TMenuDesktopValue;
    value_?: TMenuDesktopValue;
    openOnHover?: boolean;
    openOnClick?: boolean;
    openOnFocus?: boolean;
    renderItem?: (item: TMenuDesktopItem, index: number) => any;
    indicator?: boolean;
    menuTransition?: boolean;
    menuTransitionClassName?: (status: TTransitionStatus, open: TMenuDesktopValue) => string;
    menuTransitionStyle?: (status: TTransitionStatus, open: TMenuDesktopValue) => TStyle;
    onOpen?: () => any;
    onClose?: () => any;
    onChange?: (value: TMenuDesktopValue) => any;
    TransitionComponent?: TElementReference;
    IconIndicator?: TElementReference;
    AppendProps?: TPropsAny;
    TypeProps?: TPropsAny;
    ItemProps?: TPropsAny;
    IconProps?: TPropsAny;
    TransitionComponentProps?: TPropsAny;
    WrapperProps?: TPropsAny;
    WrapperMenuProps?: TPropsAny;
}
```

#### MenuDesktop

```ts
const MenuDesktop: React.ForwardRefExoticComponent<Omit<IMenuDesktop, "ref"> & React.RefAttributes<unknown>>;
```

