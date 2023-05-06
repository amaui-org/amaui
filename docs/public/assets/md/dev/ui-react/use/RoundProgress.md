

### API

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

