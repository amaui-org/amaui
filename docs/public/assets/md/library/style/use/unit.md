
# unit

Plugin that allows you to use number as a value for specific properties, and it will automatically add a default unit to their value.

### Options

#### units

Object with property, values, where a property is css property name, and a value is a unit.

It will override existing default units.

### Add

```ts
const amauiStyle = new AmauiStyle();

// Add to plugins
amauiStyle.plugins.add = unit;

// Add to plugins with options
amauiStyle.plugins.add = {
  method: unit,
  arguments: [
    {
      units: {
        width: '%'
      }
    }
  ]
};
```

### Remove

```ts
const amauiStyle = new AmauiStyle();

// Remove from plugins
amauiStyle.plugins.remove = unit;
```

### Use

```ts
const styles = style(theme => ({
  a: {
    width: 1114
  }
}));

// 1114px
```

### Values

```ts
'animation': 's',
'animation-delay': 's',
'animation-duration': 's',
'ascent-override': '%',

'background': '%',
'background-position': '%',
'background-size': '%',
'background-position-x': '%',
'background-position-y': '%',
'border': 'px',
'border-top': 'px',
'border-right': 'px',
'border-bottom': 'px',
'border-left': 'px',
'border-radius': 'px',
'border-top-left-radius': 'px',
'border-top-right-radius': 'px',
'border-bottom-left-radius': 'px',
'border-bottom-right-radius': 'px',
'border-width': 'px',
'border-top-width': 'px',
'border-right-width': 'px',
'border-bottom-width': 'px',
'border-left-width': 'px',
'border-image': '%',
'border-image-outset': 'px',
'border-image-slice': '%',
'border-image-width': 'px',
'border-spacing': 'px',
'block-size': 'px',
'border-block': 'px',
'border-block-end': 'px',
'border-block-end-width': 'px',
'border-block-start': 'px',
'border-block-start-width': 'px',
'border-block-width': 'px',
'border-end-end-radius': 'px',
'border-end-start-radius': 'px',
'border-inline': 'px',
'border-inline-end': 'px',
'border-inline-end-width': 'px',
'border-inline-start': 'px',
'border-inline-start-width': 'px',
'border-inline-width': 'px',
'border-style': 'px',
'border-start-end-radius': 'px',
'border-start-start-radius': 'px',
'box-shadow': 'px',
'bottom': '%',

'columns': 'px',
'column-width': 'px',
'column-gap': 'px',
'column-rule': 'px',
'column-rule-width': 'px',
'contain-intrinsic-block-size': 'px',
'contain-intrinsic-height': 'px',
'contain-intrinsic-inline-size': 'px',
'contain-intrinsic-size': 'px',
'contain-intrinsic-width': 'px',
'cx': '%',
'cy': '%',

'descent-override': '%',

'flex': '%',
'flex-basis': '%',
'font': 'px',
'font-size': 'px',
'font-synthesis': 'px',
'font-synthesis-weight': 'px',

'gap': 'px',
'grid': 'px',
'grid-auto-columns': 'px',
'grid-auto-rows': 'px',
'grid-column-gap': 'px',
'grid-gap': 'px',
'grid-row-gap': 'px',
'grid-template': 'px',
'grid-template-rows': 'px',
'grid-template-columns': 'px',

'height': 'px',

'inline-size': 'px',
'inset': 'px',
'inset-block': 'px',
'inset-block-end': 'px',
'inset-block-start': 'px',
'inset-inline': 'px',
'inset-inline-end': 'px',
'inset-inline-start': 'px',

'left': '%',
'letter-spacing': 'px',
'line-gap-override': '%',

'margin': 'px',
'margin-top': 'px',
'margin-right': 'px',
'margin-bottom': 'px',
'margin-left': 'px',
'margin-block': 'px',
'margin-block-end': 'px',
'margin-block-start': 'px',
'margin-inline': 'px',
'margin-inline-end': 'px',
'margin-inline-start': 'px',
'mask': 'px',
'mask-position': '%',
'mask-size': '%',
'max-block-size': 'px',
'max-inline-size': 'px',
'min-block-size': 'px',
'min-inline-size': 'px',
'max-height': 'px',
'max-width': 'px',
'min-height': 'px',
'min-width': 'px',

'object-position': '%',
'outline': 'px',
'outline-offset': 'px',
'outline-width': 'px',
'offset': 'px',
'offset-anchor': '%',
'offset-distance': '%',
'offset-position': '%',
'offset-rotate': 'deg',

'padding': 'px',
'padding-top': 'px',
'padding-right': 'px',
'padding-bottom': 'px',
'padding-left': 'px',
'padding-block': 'px',
'padding-block-end': 'px',
'padding-block-start': 'px',
'padding-inline': 'px',
'padding-inline-end': 'px',
'padding-inline-start': 'px',
'perspective': 'px',

'right': '%',
'row-gap': 'px',

'scroll-margin': 'px',
'scroll-margin-block': 'px',
'scroll-margin-block-end': 'px',
'scroll-margin-block-start': 'px',
'scroll-margin-bottom': 'px',
'scroll-margin-inline': 'px',
'scroll-margin-inline-end': 'px',
'scroll-margin-inline-start': 'px',
'scroll-margin-left': 'px',
'scroll-margin-right': 'px',
'scroll-margin-top': 'px',
'scroll-padding': 'px',
'scroll-padding-block': 'px',
'scroll-padding-block-end': 'px',
'scroll-padding-block-start': 'px',
'scroll-padding-bottom': 'px',
'scroll-padding-inline': 'px',
'scroll-padding-inline-end': 'px',
'scroll-padding-inline-start': 'px',
'scroll-padding-left': 'px',
'scroll-padding-right': 'px',
'scroll-padding-top': 'px',
'shape-margin': 'px',
'size': 'in',
'size-adjust': '%',

'text-decoration': 'px',
'text-decoration-thickness': 'px',
'text-indent': 'px',
'text-size-adjust': '%',
'text-shadow': 'px',
'text-underline-offset': 'px',
'top': '%',
'transform-origin': '%',
'transition': 's',
'transition-delay': 's',
'transition-duration': 's',

'width': 'px',
'word-spacing': 'px',

'zoom': '%'
```

## API

#### IUnit

```ts
interface IUnit {
    value?: {
        value: string;
        unit: string;
    };
    arguments?: any;
}
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
    methods: {
        method: (value_: {
            property: string;
            value: number;
        }) => IUnit;
    };
    remove: () => void;
};
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: style",
      "to": "/library/style/use/style"
    },
    "next": {
      "label": "Style: valueObject",
      "to": "/library/style/use/valueObject"
    }
  }
}~
