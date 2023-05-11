

### API

#### IFab

```ts
interface IFab extends IButton {
}
```

#### Fab

```ts
const Fab: React.ForwardRefExoticComponent<Omit<IFab, "ref"> & React.RefAttributes<unknown>>;
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
