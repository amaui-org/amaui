

### API

#### IUnit

```ts
interface IUnit {
    value?: {
        value: string;
        unit: string;
    };
```

#### TOptionsUnits

```ts
type TOptionsUnits = Record<string, any>;
```

#### IOptions

```ts
interface IOptions {
    units?: TOptionsUnits;
}
```

#### unitsDefault

```ts
const unitsDefault: {
    animation: string;
    'animation-delay': string;
    'animation-duration': string;
    'ascent-override': string;
    background: string;
    'background-position': string;
    'background-size': string;
    'background-position-x': string;
    'background-position-y': string;
    border: string;
    'border-top': string;
    'border-right': string;
    'border-bottom': string;
    'border-left': string;
    'border-radius': string;
    'border-top-left-radius': string;
    'border-top-right-radius': string;
    'border-bottom-left-radius': string;
    'border-bottom-right-radius': string;
    'border-width': string;
    'border-top-width': string;
    'border-right-width': string;
    'border-bottom-width': string;
    'border-left-width': string;
    'border-image': string;
    'border-image-outset': string;
    'border-image-slice': string;
    'border-image-width': string;
    'border-spacing': string;
    'block-size': string;
    'border-block': string;
    'border-block-end': string;
    'border-block-end-width': string;
    'border-block-start': string;
    'border-block-start-width': string;
    'border-block-width': string;
    'border-end-end-radius': string;
    'border-end-start-radius': string;
    'border-inline': string;
    'border-inline-end': string;
    'border-inline-end-width': string;
    'border-inline-start': string;
    'border-inline-start-width': string;
    'border-inline-width': string;
    'border-style': string;
    'border-start-end-radius': string;
    'border-start-start-radius': string;
    'box-shadow': string;
    bottom: string;
    columns: string;
    'column-width': string;
    'column-gap': string;
    'column-rule': string;
    'column-rule-width': string;
    'contain-intrinsic-block-size': string;
    'contain-intrinsic-height': string;
    'contain-intrinsic-inline-size': string;
    'contain-intrinsic-size': string;
    'contain-intrinsic-width': string;
    cx: string;
    cy: string;
    'descent-override': string;
    flex: string;
    'flex-basis': string;
    font: string;
    'font-size': string;
    'font-synthesis': string;
    'font-synthesis-weight': string;
    gap: string;
    grid: string;
    'grid-auto-columns': string;
    'grid-auto-rows': string;
    'grid-column-gap': string;
    'grid-gap': string;
    'grid-row-gap': string;
    'grid-template': string;
    'grid-template-rows': string;
    'grid-template-columns': string;
    height: string;
    'inline-size': string;
    inset: string;
    'inset-block': string;
    'inset-block-end': string;
    'inset-block-start': string;
    'inset-inline': string;
    'inset-inline-end': string;
    'inset-inline-start': string;
    left: string;
    'letter-spacing': string;
    'line-gap-override': string;
    margin: string;
    'margin-top': string;
    'margin-right': string;
    'margin-bottom': string;
    'margin-left': string;
    'margin-block': string;
    'margin-block-end': string;
    'margin-block-start': string;
    'margin-inline': string;
    'margin-inline-end': string;
    'margin-inline-start': string;
    mask: string;
    'mask-position': string;
    'mask-size': string;
    'max-block-size': string;
    'max-inline-size': string;
    'min-block-size': string;
    'min-inline-size': string;
    'max-height': string;
    'max-width': string;
    'min-height': string;
    'min-width': string;
    'object-position': string;
    outline: string;
    'outline-offset': string;
    'outline-width': string;
    offset: string;
    'offset-anchor': string;
    'offset-distance': string;
    'offset-position': string;
    'offset-rotate': string;
    padding: string;
    'padding-top': string;
    'padding-right': string;
    'padding-bottom': string;
    'padding-left': string;
    'padding-block': string;
    'padding-block-end': string;
    'padding-block-start': string;
    'padding-inline': string;
    'padding-inline-end': string;
    'padding-inline-start': string;
    perspective: string;
    right: string;
    'row-gap': string;
    'scroll-margin': string;
    'scroll-margin-block': string;
    'scroll-margin-block-end': string;
    'scroll-margin-block-start': string;
    'scroll-margin-bottom': string;
    'scroll-margin-inline': string;
    'scroll-margin-inline-end': string;
    'scroll-margin-inline-start': string;
    'scroll-margin-left': string;
    'scroll-margin-right': string;
    'scroll-margin-top': string;
    'scroll-padding': string;
    'scroll-padding-block': string;
    'scroll-padding-block-end': string;
    'scroll-padding-block-start': string;
    'scroll-padding-bottom': string;
    'scroll-padding-inline': string;
    'scroll-padding-inline-end': string;
    'scroll-padding-inline-start': string;
    'scroll-padding-left': string;
    'scroll-padding-right': string;
    'scroll-padding-top': string;
    'shape-margin': string;
    size: string;
    'size-adjust': string;
    'text-decoration': string;
    'text-decoration-thickness': string;
    'text-indent': string;
    'text-size-adjust': string;
    'text-shadow': string;
    'text-underline-offset': string;
    top: string;
    'transform-origin': string;
    transition: string;
    'transition-delay': string;
    'transition-duration': string;
    width: string;
    'word-spacing': string;
    zoom: string;
};
```

#### unit

```ts
function unit(amauiStyle: AmauiStyle, options_?: IOptions): {
```

