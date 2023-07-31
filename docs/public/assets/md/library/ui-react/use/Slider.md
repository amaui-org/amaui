

## API

#### TSliderValue

```ts
type TSliderValue = number | Array<number>;
```

#### ISlider

```ts
interface ISlider extends IBaseElement {
    tonal?: TTonal;
    color?: TColor;
    size?: TSize;
    value?: TSliderValue;
    valueDefault?: TSliderValue;
    onChange?: (value: TSliderValue) => any;
    orientation?: 'vertical' | 'horizontal';
    marks?: Array<{
        value?: number;
        label?: TElement;
    }>;
    precision?: number;
    min?: number;
    max?: number;
    tooltip?: 'always' | boolean;
    labels?: boolean;
    onlyMarks?: boolean;
    labelTooltipResolve?: (value: number) => TElement;
    iconButtonPositionResolve?: (value: number, normalized: number, size: TSize) => string;
    noTrack?: boolean;
    noButtons?: boolean;
    square?: boolean;
    inverted?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    IconButtonProps?: TPropsAny;
    TooltipProps?: TPropsAny;
}
```

#### Slider

```ts
const Slider: React.ForwardRefExoticComponent<Omit<ISlider, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: Slide",
      "to": "/library/ui-react/use/Slide"
    },
    "next": {
      "label": "UI react: Snackbar",
      "to": "/library/ui-react/use/Snackbar"
    }
  }
}~
