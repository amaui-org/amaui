

### API

#### IScatterChartItem

```ts
interface IScatterChartItem extends IChart {
    name?: string;
    refs?: {
        wrapper?: HTMLElement;
        defs?: HTMLElement;
    };
```

#### ScatterChartItem

```ts
const ScatterChartItem: React.ForwardRefExoticComponent<Omit<IScatterChartItem, "ref"> & React.RefAttributes<unknown>>;
```

