

## API

#### IScatterChartItem

```ts
interface IScatterChartItem extends IChart {
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
}
```

#### ScatterChartItem

```ts
const ScatterChartItem: React.ForwardRefExoticComponent<Omit<IScatterChartItem, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: ScatterChart",
      "to": "/library/ui-react/use/ScatterChart"
    },
    "next": {
      "label": "UI react: ScreenCapture",
      "to": "/library/ui-react/use/ScreenCapture"
    }
  }
}~
