

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

~{
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
}~
