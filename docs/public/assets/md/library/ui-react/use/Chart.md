

## API

#### TChartValueValues

```ts
type TChartValueValues = Array<any>;
```

#### IChartValue

```ts
interface IChartValue {
    color?: TColor;
    tone?: TColorValues;
    name?: string;
    style?: TStyle;
    percentage?: string | number;
    values: TChartValueValues | Array<TChartValueValues>;
}
```

#### IChart

```ts
interface IChart extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    title?: TElementAny;
    subtitle?: TElementAny;
    values?: Array<IChartValue>;
    defs?: TElement;
    pre?: TElement;
    elements?: Array<{
        item: IChartValue;
        element?: TElement;
        elements?: TElement;
    }>;
    names?: {
        x?: string;
        y?: string;
        [property: string]: string;
    };
    nameX?: boolean | Record<TValueBreakpoints, boolean>;
    nameY?: boolean | Record<TValueBreakpoints, boolean>;
    tooltip?: boolean | Record<TValueBreakpoints, boolean>;
    tooltipIndividually?: boolean | Record<TValueBreakpoints, boolean>;
    tooltipCloseOnMouseLeave?: boolean | Record<TValueBreakpoints, boolean>;
    elementTooltip?: boolean | Record<TValueBreakpoints, boolean>;
    guidelines?: 'both' | 'vertical' | 'horizontal' | Record<TValueBreakpoints, 'both' | 'vertical' | 'horizontal'>;
    guidelinesAppend?: boolean | Record<TValueBreakpoints, boolean>;
    guidelinesDisplayInactive?: boolean | Record<TValueBreakpoints, boolean>;
    animate?: boolean;
    animateTimeout?: number;
    additionalLines?: TElement;
    legend?: 'auto' | false | TElement | Record<TValueBreakpoints, 'auto' | false | TElement>;
    legendManageVisibility?: boolean;
    legendPosition?: 'top' | 'bottom';
    labels?: 'auto' | false | Array<{
        value?: number;
        label?: string | number;
    }> | Record<TValueBreakpoints, 'auto' | false | Array<{
        value?: number;
        label?: string | number;
    }>>;
    labelsX?: boolean | Record<TValueBreakpoints, boolean>;
    labelsY?: boolean | Record<TValueBreakpoints, boolean>;
    labelDecimalPlaces?: number | Record<TValueBreakpoints, number>;
    labelsAutoNumber?: number | Record<TValueBreakpoints, number>;
    labelsYAutoNumber?: number | Record<TValueBreakpoints, number>;
    labelsXAutoNumber?: number | Record<TValueBreakpoints, number>;
    marks?: 'auto' | false | Array<{
        value?: number;
    }> | Record<TValueBreakpoints, 'auto' | false | Array<{
        value?: number;
    }>>;
    marksX?: boolean | Record<TValueBreakpoints, boolean>;
    marksY?: boolean | Record<TValueBreakpoints, boolean>;
    marksAutoNumber?: number | Record<TValueBreakpoints, number>;
    marksYAutoNumber?: number | Record<TValueBreakpoints, number>;
    marksXAutoNumber?: number | Record<TValueBreakpoints, number>;
    grid?: 'auto' | false | Array<{
        value?: number;
    }> | Record<TValueBreakpoints, 'auto' | false | Array<{
        value?: number;
    }>>;
    gridX?: boolean | Record<TValueBreakpoints, boolean>;
    gridY?: boolean | Record<TValueBreakpoints, boolean>;
    gridAutoNumber?: number | Record<TValueBreakpoints, number>;
    gridYAutoNumber?: number | Record<TValueBreakpoints, number>;
    gridXAutoNumber?: number | Record<TValueBreakpoints, number>;
    points?: boolean | Record<TValueBreakpoints, boolean>;
    pointsVisibility?: 'hover' | 'visible' | 'hidden' | Record<TValueBreakpoints, 'hover' | 'visible' | 'hidden'>;
    borders?: boolean | Record<TValueBreakpoints, boolean>;
    borderStart?: boolean | Record<TValueBreakpoints, boolean>;
    borderLeft?: boolean | Record<TValueBreakpoints, boolean>;
    borderEnd?: boolean | Record<TValueBreakpoints, boolean>;
    borderRight?: boolean | Record<TValueBreakpoints, boolean>;
    borderTop?: boolean | Record<TValueBreakpoints, boolean>;
    borderBottom?: boolean | Record<TValueBreakpoints, boolean>;
    minX?: number | Record<TValueBreakpoints, number>;
    maxX?: number | Record<TValueBreakpoints, number>;
    minY?: number | Record<TValueBreakpoints, number>;
    maxY?: number | Record<TValueBreakpoints, number>;
    minMaxPadding?: number | Record<TValueBreakpoints, number>;
    minPadding?: number | Record<TValueBreakpoints, number>;
    maxPadding?: number | Record<TValueBreakpoints, number>;
    minPaddingX?: number | Record<TValueBreakpoints, number>;
    minPaddingY?: number | Record<TValueBreakpoints, number>;
    maxPaddingX?: number | Record<TValueBreakpoints, number>;
    maxPaddingY?: number | Record<TValueBreakpoints, number>;
    noMain?: boolean;
    tooltipRender: (values: IChartValue) => any;
    tooltipGroupRender: (groups: Array<IChartValue>, groupsSorted: string[]) => any;
    labelRender: (value: IChartValue) => any;
    labelResolve: (value: number, axes: 'x' | 'y', item: IChartValue, version?: 'group' | 'individual') => string;
    onUpdateRects?: (rects: {
        wrapper: DOMRect;
        svg: DOMRect;
    }) => any;
    SvgProps?: TPropsAny;
    TypeProps?: TPropsAny;
    TitleProps?: TPropsAny;
    SubtitleProps?: TPropsAny;
    PathProps?: TPropsAny;
    PointsProps?: TPropsAny;
    PointProps?: TPropsAny;
    HeaderProps?: TPropsAny;
    AppendProps?: TPropsAny;
    AdditionalLineProps?: TPropsAny;
    AdditionalLinesProps?: TPropsAny;
    LegendProps?: TPropsAny;
    LegendItemProps?: TPropsAny;
    GuidelineProps?: TPropsAny;
    WrapperProps?: TPropsAny;
}
```

#### Chart

```ts
const Chart: React.ForwardRefExoticComponent<Omit<IChart, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Carousel",
      "to": "/dev/ui-react/use/Carousel"
    },
    "next": {
      "label": "UI react: Checkbox",
      "to": "/dev/ui-react/use/Checkbox"
    }
  }
}~
