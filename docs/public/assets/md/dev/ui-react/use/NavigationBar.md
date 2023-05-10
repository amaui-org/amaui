

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


{
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