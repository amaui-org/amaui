

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

