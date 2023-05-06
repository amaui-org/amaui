

### API

#### TImageEditFilter

```ts
type TImageEditFilter = {
    label?: string;
    Icon?: TElementReference;
    value?: string;
    method: (value: number, mainCanvas: HTMLCanvasElement, valueCopy: HTMLCanvasElement) => HTMLCanvasElement;
    renderIconButton: (value: string, selected: boolean, onChangeFilter: TMethod) => TElement;
    renderSlider: (value: string, filterValuesCopy: any, onFilterSliderChange: TMethod) => TElement;
};
```

#### ImageEdit

```ts
const ImageEdit: React.ForwardRefExoticComponent<Omit<IImageEdit, "ref"> & React.RefAttributes<unknown>>;
```

