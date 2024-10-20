

## API

#### IAreaChartItem

```ts
interface IAreaChartItem extends IChart {
    name?: string;
    refs?: {
        wrapper?: HTMLElement;
        defs?: HTMLElement;
    };
    rects?: {
        wrapper?: DOMRect;
        svg?: DOMRect;
    };
    values?: IChartValueValues;
    updateDefs: TMethod;
    updateLegend: TMethod;
    smooth?: boolean;
    smoothRatio?: number;
    linearGradient?: boolean;
}
```

#### AreaChartItem

```ts
const AreaChartItem: React.ForwardRefExoticComponent<Omit<IAreaChartItem, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: AreaChart",
      "to": "/library/ui-react/use/AreaChart"
    },
    "next": {
      "label": "UI react: AutoComplete",
      "to": "/library/ui-react/use/AutoComplete"
    }
  }
}~
