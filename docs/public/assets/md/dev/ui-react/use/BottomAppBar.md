

### API

#### IBottomAppBar

```ts
interface IBottomAppBar extends ISurface {
    size?: TSize;
    main?: TElement;
    fixed?: boolean;
    noTransition?: boolean;
}
```

#### BottomAppBar

```ts
const BottomAppBar: React.ForwardRefExoticComponent<Omit<IBottomAppBar, "ref"> & React.RefAttributes<unknown>>;
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
}~
