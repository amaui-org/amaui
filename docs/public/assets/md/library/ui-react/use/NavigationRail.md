

## API

#### INavigationRail

```ts
interface INavigationRail extends ISurface {
    size?: TSize;
    value?: any;
    valueDefault?: any;
    onChange?: (value: any) => any;
    justify?: 'start' | 'center' | 'end';
    border?: boolean;
    header?: TElement;
    fixed?: boolean;
    NavigationBarProps?: TPropsAny;
    DividerProps?: TPropsAny;
}
```

#### NavigationRail

```ts
const NavigationRail: React.ForwardRefExoticComponent<Omit<INavigationRail, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: NavigationItem",
      "to": "/library/ui-react/use/NavigationItem"
    },
    "next": {
      "label": "UI react: NumericTextField",
      "to": "/library/ui-react/use/NumericTextField"
    }
  }
}~
