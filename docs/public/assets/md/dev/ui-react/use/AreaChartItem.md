

### API

#### IAreaChartItem

```ts
interface IAreaChartItem extends IChart {
    name?: string;
    refs?: {
        wrapper?: HTMLElement;
        defs?: HTMLElement;
    };
```

#### AreaChartItem

```ts
const AreaChartItem: React.ForwardRefExoticComponent<Omit<IAreaChartItem, "ref"> & React.RefAttributes<unknown>>;
```

