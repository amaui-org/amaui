

### API

#### ISurface

```ts
interface ISurface extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    elevation?: TElevation;
    backgroundOpacity?: number;
    noOutline?: boolean;
    AdditionalProps?: TPropsAny;
}
```

#### Surface

```ts
const Surface: React.ForwardRefExoticComponent<Omit<ISurface, "ref"> & React.RefAttributes<unknown>>;
```

