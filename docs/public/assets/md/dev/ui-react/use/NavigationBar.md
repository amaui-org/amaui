

### API

#### TNavigationBarValue

```ts
type TNavigationBarValue = Array<string>;
```

#### INavigationBar

```ts
interface INavigationBar extends ISurface {
    value?: TNavigationBarValue;
    valueDefault?: TNavigationBarValue;
    onChange?: (value: TNavigationBarValue) => any;
    fixed?: boolean;
}
```

#### NavigationBar

```ts
const NavigationBar: React.ForwardRefExoticComponent<Omit<INavigationBar, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Move",
      "to": "/dev/ui-react/use/Move"
    },
    "next": {
      "label": "UI react: NavigationDrawer",
      "to": "/dev/ui-react/use/NavigationDrawer"
    }
  }
}~
