
# valueObject

Plugin that allows you to use an object value for specific properties instead of string value.

### Add

```ts
const amauiStyle = new AmauiStyle();

// Add to plugins
amauiStyle.plugins.add = valueObject;
```

### Remove

```ts
const amauiStyle = new AmauiStyle();

// Remove from plugins
amauiStyle.plugins.remove = valueObject;
```

### Use

```ts
const styles = style(theme => ({
  a: {
    'animation': {
      name: 'a',
      duration: '1.14s',
      easingFunction: 'ease-in',
      delay: '1.4s',
      iterationCount: 1,
      direction: 'alternate',
      fillMode: 'forwards',
      playState: 'paused',
    }
  }
}));
```

#### Values

```ts
'animation' {
  name,
  duration,
  easingFunction,
  delay,
  iterationCount,
  direction,
  fillMode,
  playState
}

'background' {
  color,
  image,
  repeat,
  position
}

'border'
'border-top'
'border-right'
'border-bottom'
'border-left'
'border-block'
'border-block-end'
'border-block-start'
'border-inline-end'
'border-inline-start'
'column-rule' {
  width,
  style,
  color
}

'outline' {
  width,
  style,
  color
}

'border-color'
'border-top-color'
'border-right-color'
'border-bottom-color'
'border-left-color' {
  top,
  right,
  bottom,
  left
}

'background-position' {
  top,
  bottom
}

'font' {
  style,
  weight,
  fontSize,
  lineHeight,
  fontFamily
}

'margin'
'padding'
'border-width'
'border-image-outset' {
  top,
  right,
  bottom,
  left
}

'scroll-margin'
'scroll-padding' {
  top,
  right,
  bottom,
  left
}

'overflow'
'background-repeat' {
  x,
  y
}

'background-size' {
  width,
  height
}

'border-bottom-left-radius'
'border-bottom-right-radius'
'border-top-left-radius'
'border-top-right-radius'
'border-end-end-radius'
'border-end-start-radius'
'border-start-end-radius'
'border-start-start-radius' {
  horizontal,
  vertical
}

'border-image' {
  source,
  width,
  slice,
  outset,
  repeat
}

'border-radius' {
  topLeft,
  topRight,
  bottomLeft,
  bottomRight
}

'border-style' {
  top,
  right,
  bottom,
  left
}

'columns' {
  width,
  count
}

'flex' {
  grow,
  shrink,
  basis
}

'flex-flow' {
  direction,
  wrap
}

'gap' {
  row,
  column
}

'grid' {
  autoFlow,
  autoRows,
  autoColumns,
  templateRows,
  templateColumns
}

'grid-area' {
  rowStart,
  rowEnd,
  columnStart,
  columnEnd
}

'grid-column'
'grid-row' {
  start,
  end
}

'grid-template' {
  areas,
  templateRows,
  templateColumns
}

'list-style' {
  type,
  image,
  position
}

'mask' {
  image,
  mode,
  repeat,
  position,
  clip,
  origin,
  size,
  composite
}

'offset' {
  path,
  distance,
  rotate,
  position,
  anchor
}

'place-items'
'place-self'
'place-content' {
  align,
  justify
}

'text-decoration' {
  line,
  style,
  color
}

'text-emphasis' {
  style,
  color
}

'transition' {
  name,
  duration,
  easingFunction,
  delay
}
```

## API

#### IValueObject

```ts
interface IValueObject {
    value?: any;
    arguments?: any;
}
```

#### valueObject

```ts
function valueObject(amauiStyle: AmauiStyle): {
    methods: {
        method: (value_?: {
            property?: string;
            value?: any;
        }) => IValueObject;
    };
    remove: () => void;
};
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: unit",
      "to": "/dev/style/use/unit"
    },
    "next": {
      "label": "Subscription: Start",
      "to": "/dev/subscription/start"
    }
  }
}~
