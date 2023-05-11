

### API

#### IBubbleChartItem

```ts
interface IBubbleChartItem extends IChart {
    name?: string;
    minSize?: number;
    maxSize?: number;
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

#### BubbleChartItem

```ts
const BubbleChartItem: React.ForwardRefExoticComponent<Omit<IBubbleChartItem, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: BubbleChart",
      "to": "/dev/ui-react/use/BubbleChart"
    },
    "next": {
      "label": "UI react: Button",
      "to": "/dev/ui-react/use/Button"
    }
  }
}~
