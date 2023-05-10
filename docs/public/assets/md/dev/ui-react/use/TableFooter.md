

### API

#### ITableFooter

```ts
interface ITableFooter extends ISurface {
    size?: TSize;
}
```

#### TableFooter

```ts
const TableFooter: React.ForwardRefExoticComponent<Omit<ITableFooter, "ref"> & React.RefAttributes<unknown>>;
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