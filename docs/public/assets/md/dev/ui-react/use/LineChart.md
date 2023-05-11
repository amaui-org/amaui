

### API

#### ILineChart

```ts
interface ILineChart extends IChart {
    smooth?: boolean;
    smoothRatio?: number;
}
```

#### LineChart

```ts
const LineChart: React.ForwardRefExoticComponent<Omit<ILineChart, "ref"> & React.RefAttributes<unknown>>;
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
