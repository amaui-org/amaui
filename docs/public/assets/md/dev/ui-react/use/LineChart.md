

### API

#### ILineChart

```ts
interface ILineChart extends IChart {
    smooth?: boolean;
    smoothRatio?: number;
}
```

#### LineChart

```ts
const LineChart: React.ForwardRefExoticComponent<Omit<ILineChart, "ref"> & React.RefAttributes<unknown>>;
```

