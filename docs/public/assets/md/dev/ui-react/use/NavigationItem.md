

### API

#### INavigationItem

```ts
interface INavigationItem extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    version?: 'regular' | 'auto';
    value?: any;
    vertical?: boolean;
    label?: TElement;
    icon?: TElement;
    iconSelected?: TElement;
    selected?: boolean;
    disabled?: boolean;
    IconWrapperComponent?: TElementReference;
    onFocus?: (event: React.FocusEvent<any>) => any;
    onBlur?: (event: React.FocusEvent<any>) => any;
    onKeyDown?: (event: React.KeyboardEvent<any>) => any;
    onMouseDown?: (event: React.MouseEvent<any>) => any;
    onMouseEnter?: (event: React.MouseEvent<any>) => any;
    onMouseLeave?: (event: React.MouseEvent<any>) => any;
    onTouchStart?: (event: React.TouchEvent<any>) => any;
    TooltipProps?: TPropsAny;
    IconWrapperProps?: TPropsAny;
}
```

#### NavigationItem

```ts
const NavigationItem: React.ForwardRefExoticComponent<Omit<INavigationItem, "ref"> & React.RefAttributes<unknown>>;
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
