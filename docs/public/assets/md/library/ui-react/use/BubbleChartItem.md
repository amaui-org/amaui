

## API

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
    values?: IChartValueValues;
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
      "to": "/library/ui-react/use/BubbleChart"
    },
    "next": {
      "label": "UI react: Button",
      "to": "/library/ui-react/use/Button"
    }
  }
}~
