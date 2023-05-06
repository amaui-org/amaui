

### API

#### IBubbleChartItem

```ts
interface IBubbleChartItem extends IChart {
    name?: string;
    minSize?: number;
    maxSize?: number;
    refs?: {
        wrapper?: HTMLElement;
        defs?: HTMLElement;
    };
```

#### BubbleChartItem

```ts
const BubbleChartItem: React.ForwardRefExoticComponent<Omit<IBubbleChartItem, "ref"> & React.RefAttributes<unknown>>;
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
