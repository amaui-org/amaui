

## API

#### IStep

```ts
interface IStep extends ILine {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    iconColor?: TColor;
    iconColorActive?: TColor;
    dividerColor?: TColor;
    dividerColorActive?: TColor;
    step?: number;
    activeStep?: number;
    active?: boolean;
    completed?: boolean;
    primary?: TElement;
    secondary?: TElement;
    stepDirection?: 'row' | 'column';
    orientation?: 'vertical' | 'horizontal';
    button?: boolean;
    divider?: boolean;
    renderIcon?: (step: number, active: boolean, completed: boolean, activeStep: number) => TElement;
    ListItemProps?: TPropsAny;
    DividerProps?: TPropsAny;
}
```

#### Step

```ts
const Step: React.ForwardRefExoticComponent<Omit<IStep, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: SpyScroll",
      "to": "/dev/ui-react/use/SpyScroll"
    },
    "next": {
      "label": "UI react: Stepper",
      "to": "/dev/ui-react/use/Stepper"
    }
  }
}~
