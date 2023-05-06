

### API

#### ILineChartItem

```ts
interface ILineChartItem extends IChart {
    name?: string;
    refs?: {
        wrapper?: HTMLElement;
        defs?: HTMLElement;
    };
```

#### LineChartItem

```ts
const LineChartItem: React.ForwardRefExoticComponent<Omit<ILineChartItem, "ref"> & React.RefAttributes<unknown>>;
```

