

## API

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


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Stepper",
      "to": "/dev/ui-react/use/Stepper"
    },
    "next": {
      "label": "UI react: Switch",
      "to": "/dev/ui-react/use/Switch"
    }
  }
}~
