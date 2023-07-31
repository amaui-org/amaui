

## API

#### IRoundProgress

```ts
interface IRoundProgress extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    size?: TSize;
    version?: 'determinate' | 'indeterminate';
    value?: number;
    noShrink?: boolean;
    thickness?: number;
    rounded?: boolean;
    pathProps?: TPropsAny;
    pathBackgroundProps?: TPropsAny;
}
```

#### RoundProgress

```ts
const RoundProgress: React.ForwardRefExoticComponent<Omit<IRoundProgress, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: RoundMeter",
      "to": "/library/ui-react/use/RoundMeter"
    },
    "next": {
      "label": "UI react: ScatterChart",
      "to": "/library/ui-react/use/ScatterChart"
    }
  }
}~
