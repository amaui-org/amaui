

### API

#### IColumnChart

```ts
interface IColumnChart extends IChart {
}
```

#### ColumnChart

```ts
const ColumnChart: React.ForwardRefExoticComponent<Omit<IColumnChart, "ref"> & React.RefAttributes<unknown>>;
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
