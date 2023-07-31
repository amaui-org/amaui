

## API

#### IAreaChart

```ts
interface IAreaChart extends IChart {
    smooth?: boolean;
    smoothRatio?: number;
    linearGradient?: boolean;
}
```

#### AreaChart

```ts
const AreaChart: React.ForwardRefExoticComponent<Omit<IAreaChart, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Append",
      "to": "/library/ui-react/use/Append"
    },
    "next": {
      "label": "UI react: AreaChartItem",
      "to": "/library/ui-react/use/AreaChartItem"
    }
  }
}~
