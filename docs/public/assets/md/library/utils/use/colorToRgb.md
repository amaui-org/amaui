
# colorToRgb

Makes any color version `rgb`, `rgba`, `hsl`, `hsla`, `hex`, `hexa`, into an `rgb/a` color value.

```ts
colorToRgb('#ff8c00');
colorToRgb('#ff8c0070');
colorToRgb('rgb(255, 140, 0)');
colorToRgb('rgba(255, 140, 04)');
colorToRgb('hsl(33, 100%, 50%)');
colorToRgb('hsla(33.414, 100.44%, 50.4%)');

// rgba(255, 140, 0)
// rgba(255, 140, 0)
// rgba(255, 140, 0)
// rgba(255, 140, 0)
// rgba(255, 140, 0)
// rgba(255, 140, 0)
```

### Options

#### opacity

Adds opacity to the value.

```ts
colorToRgb('#ff8c00', 0.4);
colorToRgb('#ff8c0070', 0.4);
colorToRgb('rgb(255, 140, 0)', 0.4);
colorToRgb('rgba(255, 140, 0, 0.44)', 0.4);
colorToRgb('hsl(33, 100%, 50%)', 0.4);
colorToRgb('hsla(33.414, 100.44%, 50.4%)', 0.4);

// rgba(255, 140, 0, 0.4)
// rgba(255, 140, 0, 0.4)
// rgba(255, 140, 0, 0.4)
// rgba(255, 140, 0, 0.4)
// rgba(255, 140, 0, 0.4)
// rgba(255, 140, 0, 0.4)
```

#### array

Returns the values as array of numbers;

```ts
colorToRgb('#ff8c00', 0.4, true);

// [255, 140, 0, 0.4]
```

## API

#### colorToRgb

```ts
// defaults
// array: false
const colorToRgb: (value: string, opacity?: number, array?: boolean) => string | number[];
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: cleanValue",
      "to": "/library/utils/use/cleanValue"
    },
    "next": {
      "label": "Utils: combination",
      "to": "/library/utils/use/combination"
    }
  }
}~
