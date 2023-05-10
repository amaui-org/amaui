

### API

#### ITableHeader

```ts
interface ITableHeader extends ISurface {
    size?: TSize;
}
```

#### TableHeader

```ts
const TableHeader: React.ForwardRefExoticComponent<Omit<ITableHeader, "ref"> & React.RefAttributes<unknown>>;
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