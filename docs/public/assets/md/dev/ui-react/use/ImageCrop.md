

### API

#### TImageCrop

```ts
type TImageCrop = {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
};
```

#### IImageCrop

```ts
interface IImageCrop extends IBaseElement {
    image?: string | HTMLCanvasElement;
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    selectorDefault?: TImageCrop;
    selector?: TImageCrop;
    onSelectorChange?: (value: TImageCrop) => any;
    type?: string;
    quality?: number;
    aspectRatio?: number;
    gridLines?: boolean;
    dynamicParent?: boolean;
    onFocus?: (event: React.FocusEvent<any>) => any;
    onBlur?: (event: React.FocusEvent<any>) => any;
    TooltipProps?: TPropsAny;
}
```

#### ImageCrop

```ts
const ImageCrop: React.ForwardRefExoticComponent<Omit<IImageCrop, "ref"> & React.RefAttributes<unknown>>;
```

