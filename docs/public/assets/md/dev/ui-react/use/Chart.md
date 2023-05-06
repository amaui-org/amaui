

### API

#### TChartValueValues

```ts
type TChartValueValues = Array<any>;
```

#### IChartValue

```ts
interface IChartValue {
    color?: TColor;
    tone?: TColorValues;
    name?: string;
    style?: TStyle;
    percentage?: string | number;
    values: TChartValueValues | Array<TChartValueValues>;
}
```

#### Chart

```ts
const Chart: React.ForwardRefExoticComponent<Omit<IChart, "ref"> & React.RefAttributes<unknown>>;
```

