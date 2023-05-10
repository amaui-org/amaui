

### API

#### IRoundMeter

```ts
interface IRoundMeter extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    size?: TSize;
    parts?: number;
    lineCap?: 'inherit' | 'round' | 'square' | 'butt';
    padding?: number;
    gap?: number;
    border?: boolean;
    background?: boolean;
    boundary?: number;
    boundaryWidth?: number;
    arcProgress?: boolean;
    arcsVisible?: boolean;
    marksVisible?: boolean;
    labelsVisible?: boolean;
    marks?: Array<{
        size?: number;
        position?: number;
        padding?: number;
        [property: string]: any;
    }>;
    markSize?: number;
    markWidth?: number;
    labels?: Array<{
        value?: number;
        position?: number;
        padding?: number;
        style?: TStyle;
        [property: string]: any;
    }>;
    renderLabel?: (x: number, y: number, value: number, otherProps: any) => React.ReactNode;
    childrenPosition?: 'pre' | 'pre-marks' | 'pre-labels' | 'post';
    additional?: TElement;
    textProps?: TPropsAny;
    pathProps?: TPropsAny;
    SvgProps?: TPropsAny;
    MarkProps?: TPropsAny;
    LabelProps?: TPropsAny;
    BackgroundProps?: TPropsAny;
    BorderProps?: TPropsAny;
    ArcProps?: TPropsAny;
    ArcMainProps?: TPropsAny;
    ArcsProgressProps?: TPropsAny;
    ArcProgressProps?: TPropsAny;
}
```

#### RoundMeter

```ts
const RoundMeter: React.ForwardRefExoticComponent<Omit<IRoundMeter, "ref"> & React.RefAttributes<unknown>>;
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