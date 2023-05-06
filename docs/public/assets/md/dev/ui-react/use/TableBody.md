

### API

#### ITableBody

```ts
interface ITableBody extends ISurface {
    size?: TSize;
}
```

#### TableBody

```ts
const TableBody: React.ForwardRefExoticComponent<Omit<ITableBody, "ref"> & React.RefAttributes<unknown>>;
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
