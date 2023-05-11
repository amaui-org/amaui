

### API

#### IColumnChartItem

```ts
interface IColumnChartItem extends IChart {
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
    width?: number;
    updateDefs: TMethod;
    updateLegend: TMethod;
}
```

#### ColumnChartItem

```ts
const ColumnChartItem: React.ForwardRefExoticComponent<Omit<IColumnChartItem, "ref"> & React.RefAttributes<unknown>>;
```


~{
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
