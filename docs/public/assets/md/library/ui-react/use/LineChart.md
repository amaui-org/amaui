

## API

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


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Line",
      "to": "/library/ui-react/use/Line"
    },
    "next": {
      "label": "UI react: LineChartItem",
      "to": "/library/ui-react/use/LineChartItem"
    }
  }
}~
