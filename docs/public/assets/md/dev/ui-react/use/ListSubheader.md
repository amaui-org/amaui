

### API

#### IListSubheader

```ts
interface IListSubheader extends IListItem {
}
```

#### ListSubheader

```ts
const ListSubheader: React.ForwardRefExoticComponent<Omit<IListSubheader, "ref"> & React.RefAttributes<unknown>>;
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
