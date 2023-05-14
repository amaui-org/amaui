

## API

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
      "label": "UI react: ColumnChart",
      "to": "/dev/ui-react/use/ColumnChart"
    },
    "next": {
      "label": "UI react: ConfirmContext",
      "to": "/dev/ui-react/use/ConfirmContext"
    }
  }
}~
