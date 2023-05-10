

### API

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
    values?: TChartValueValues;
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


{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}