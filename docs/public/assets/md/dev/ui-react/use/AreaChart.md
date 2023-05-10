

### API

#### IAreaChart

```ts
interface IAreaChart extends IChart {
    smooth?: boolean;
    smoothRatio?: number;
    linearGradient?: boolean;
}
```

#### AreaChart

```ts
const AreaChart: React.ForwardRefExoticComponent<Omit<IAreaChart, "ref"> & React.RefAttributes<unknown>>;
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