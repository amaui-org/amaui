

### API

#### IColumnChartItem

```ts
interface IColumnChartItem extends IChart {
    name?: string;
    refs?: {
        wrapper?: HTMLElement;
        defs?: HTMLElement;
    };
```

#### ColumnChartItem

```ts
const ColumnChartItem: React.ForwardRefExoticComponent<Omit<IColumnChartItem, "ref"> & React.RefAttributes<unknown>>;
```

