

### API

#### ITable

```ts
interface ITable extends ISurface {
    size?: TSize;
    header?: TElement;
    footer?: TElement;
    WrapperComponentProps?: TPropsAny;
    TableComponent?: TElementReference;
    WrapperComponent?: TElementReference;
}
```

#### Table

```ts
const Table: React.ForwardRefExoticComponent<Omit<ITable, "ref"> & React.RefAttributes<unknown>>;
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
