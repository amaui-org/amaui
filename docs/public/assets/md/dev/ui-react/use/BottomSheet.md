

### API

#### IBottomSheet

```ts
interface IBottomSheet extends INavigationDrawer {
}
```

#### BottomSheet

```ts
const BottomSheet: React.ForwardRefExoticComponent<Omit<IBottomSheet, "ref"> & React.RefAttributes<unknown>>;
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
