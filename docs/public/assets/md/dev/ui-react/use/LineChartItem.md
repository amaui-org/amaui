

## API

#### ILineChartItem

```ts
interface ILineChartItem extends IChart {
    name?: string;
    refs?: {
        wrapper?: HTMLElement;
        defs?: HTMLElement;
    };
    rects?: {
        wrapper?: DOMRect;
        svg?: DOMRect;
    };
    values?: TChartValueValues;
    updateDefs: TMethod;
    updateLegend: TMethod;
    smooth?: boolean;
    smoothRatio?: number;
}
```

#### LineChartItem

```ts
const LineChartItem: React.ForwardRefExoticComponent<Omit<ILineChartItem, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: LineChart",
      "to": "/dev/ui-react/use/LineChart"
    },
    "next": {
      "label": "UI react: LinearMeter",
      "to": "/dev/ui-react/use/LinearMeter"
    }
  }
}~
