

### API

#### IScatterChart

```ts
interface IScatterChart extends IChart {
}
```

#### ScatterChart

```ts
const ScatterChart: React.ForwardRefExoticComponent<Omit<IScatterChart, "ref"> & React.RefAttributes<unknown>>;
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
