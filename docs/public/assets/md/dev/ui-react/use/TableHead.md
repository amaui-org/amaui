

### API

#### ITableHead

```ts
interface ITableHead extends ISurface {
    size?: TSize;
    sticky?: boolean;
}
```

#### TableHead

```ts
const TableHead: React.ForwardRefExoticComponent<Omit<ITableHead, "ref"> & React.RefAttributes<unknown>>;
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
