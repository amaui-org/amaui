

### API

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