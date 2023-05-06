

### API

#### IStepper

```ts
interface IStepper extends ILine {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    iconColor?: TColor;
    iconColorActive?: TColor;
    dividerColor?: TColor;
    dividerColorActive?: TColor;
    active?: number;
    completed?: boolean;
    stepDirection?: 'row' | 'column';
    orientation?: 'vertical' | 'horizontal';
    dividerActive?: boolean;
    individualDividers?: boolean;
    DividerProps?: TPropsAny;
}
```

#### Stepper

```ts
const Stepper: React.ForwardRefExoticComponent<Omit<IStepper, "ref"> & React.RefAttributes<unknown>>;
```

