

### API

#### IPieChart

```ts
interface IPieChart extends IChart {
}
```

#### PieChart

```ts
const PieChart: React.ForwardRefExoticComponent<Omit<IPieChart, "ref"> & React.RefAttributes<unknown>>;
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
