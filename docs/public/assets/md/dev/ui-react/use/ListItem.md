

### API

#### IListItem

```ts
interface IListItem extends ISurface {
    colorSelected?: TColor;
    menu?: TElement;
    menuId?: string;
    menuOpen?: boolean;
    openMenu?: boolean;
    openMenuDefault?: boolean;
    openList?: boolean;
    openListDefault?: boolean;
    menuItem?: boolean;
    list?: TElement;
    inset?: boolean;
    primary?: TElement;
    secondary?: TElement;
    tertiary?: TElement;
    preselected?: boolean;
    selected?: boolean;
    start?: TElement;
    startAlign?: 'start' | 'center' | 'end';
    end?: TElement;
    endAlign?: 'start' | 'center' | 'end';
    size?: TSize;
    noPadding?: boolean;
    href?: string;
    button?: boolean;
    shape?: 'round';
    shapePosition?: 'both' | 'start' | 'end' | 'none';
    footer?: TElement;
    include?: Array<THTMLElement>;
    tabIndex?: string | number;
    menuCloseOnClick?: boolean;
    listCloseOnClick?: boolean;
    indicator?: boolean;
    noOutline?: boolean;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<any>) => any;
    onFocus?: (event: React.FocusEvent<any>) => any;
    onBlur?: (event: React.FocusEvent<any>) => any;
    onMouseEnter?: (event: React.MouseEvent<any>) => any;
    onMouseLeave?: (event: React.MouseEvent<any>) => any;
    onClose?: () => any;
    RootComponent?: TElementReference;
    ExpandIcon?: TElementReference;
    ListTransitionComponent?: TElementReference;
    WrapperProps?: TPropsAny;
    ListProps?: TPropsAny;
    RootProps?: TPropsAny;
    InteractionProps?: TPropsAny;
    PrimaryProps?: TPropsAny;
    SecondaryProps?: TPropsAny;
    TertiaryProps?: TPropsAny;
    ListTransitionComponentProps?: TPropsAny;
    ExpandProps?: TPropsAny;
    MenuProps?: TPropsAny;
}
```

#### ListItem

```ts
const ListItem: React.ForwardRefExoticComponent<Omit<IListItem, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}
