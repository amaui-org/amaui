

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

#### IImageEdit

```ts
interface IImageEdit extends ILine {
    tonal?: TTonal;
    color?: TColor;
    image?: string | HTMLCanvasElement;
    name?: string;
    type?: string;
    openDefault?: boolean;
    openedOptionDefault?: string;
    valueDefault?: HTMLCanvasElement;
    value?: HTMLCanvasElement;
    valueCopyDefault?: HTMLCanvasElement;
    valueCopy?: HTMLCanvasElement;
    onChange?: (value: HTMLCanvasElement) => any;
    onChangeCopy?: (value: HTMLCanvasElement) => any;
    onlyFilters?: Array<string>;
    filters?: Array<TImageEditFilter>;
    meta?: boolean;
    filtersOption?: boolean;
    cropOption?: boolean;
    resizeOption?: boolean;
    qualityOption?: boolean;
    downloadOption?: boolean;
    resizeAspectRatio?: boolean;
    renderOption?: (item?: {
        label: string;
        value: string;
        Icon: TElementReference;
    }, selected?: boolean, openOption?: (value: any) => any) => TElement;
    renderOptionClear?: (onReset: (imageReset: boolean, valueCopyReset: boolean, resizeReset: boolean) => any) => any;
    renderSave?: (onSave: () => any) => any;
    renderCancel?: (onSave: () => any) => any;
    renderSlider?: (value: string, filterValuesCopy: any, onFilterSliderChange: TMethod) => TElement;
    renderDownload?: (onDownload: () => any) => any;
    renderInput?: (value: HTMLCanvasElement, valueCopy: HTMLCanvasElement, resize: Array<number>, onChange: (value: string, ...args: any[]) => any, property?: string) => TElement;
    IconBrightness?: TElementReference;
    IconContrast?: TElementReference;
    IconSaturation?: TElementReference;
    IconFade?: TElementReference;
    IconInvert?: TElementReference;
    IconOldPhoto?: TElementReference;
    IconSave?: TElementReference;
    IconCancel?: TElementReference;
    IconClear?: TElementReference;
    IconCrop?: TElementReference;
    IconFilters?: TElementReference;
    IconResize?: TElementReference;
    IconQuality?: TElementReference;
    IconDownload?: TElementReference;
    ChipProps?: TPropsAny;
    SliderProps?: TPropsAny;
    TooltipProps?: TPropsAny;
    ImageCropProps?: TPropsAny;
    IconButtonProps?: TPropsAny;
}
```

#### ImageEdit

```ts
const ImageEdit: React.ForwardRefExoticComponent<Omit<IImageEdit, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: ImageCrop",
      "to": "/dev/ui-react/use/ImageCrop"
    },
    "next": {
      "label": "UI react: ImageList",
      "to": "/dev/ui-react/use/ImageList"
    }
  }
}~
