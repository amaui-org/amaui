

### API

#### ITableRow

```ts
interface ITableRow extends ISurface {
    size?: TSize;
    hover?: boolean;
    selected?: boolean;
    position?: 'head' | 'body';
}
```

#### TableRow

```ts
const TableRow: React.ForwardRefExoticComponent<Omit<ITableRow, "ref"> & React.RefAttributes<unknown>>;
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
