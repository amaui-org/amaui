

### API

#### IBubbleChart

```ts
interface IBubbleChart extends IChart {
}
```

#### BubbleChart

```ts
const BubbleChart: React.ForwardRefExoticComponent<Omit<IBubbleChart, "ref"> & React.RefAttributes<unknown>>;
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