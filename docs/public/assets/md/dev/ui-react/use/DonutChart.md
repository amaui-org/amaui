

### API

#### IDonutChart

```ts
interface IDonutChart extends IPieChart {
}
```

#### DonutChart

```ts
const DonutChart: React.ForwardRefExoticComponent<Omit<IDonutChart, "ref"> & React.RefAttributes<unknown>>;
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
