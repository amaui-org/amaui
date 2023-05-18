
# rgbToHslPure

Makes rgb color value into a `hsl` color value.

```ts
rgbToHslPure(179, 179, 0);
rgbToHslPure(174, 214, 224);
rgbToHslPure(174, 214, 224);

// hsl(60, 100%, 35%)
// hsla(192, 45%, 78%)
// hsla(192.414, 45.41%, 78.4%)
```

### Options

#### opacity

Adds opacity to the `hsl` color value, making it `hsla` color value.

May be from 0 to 1.

#### array

If true, returns values as array of numbers, instead of an `hsl` string value.


## API

#### rgbToHslPure

```ts
const rgbToHslPure: (r_: number, g_: number, b_: number) => number[];
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: rgbToHsl",
      "to": "/dev/utils/use/rgbToHsl"
    },
    "next": {
      "label": "Utils: rgbToRgba",
      "to": "/dev/utils/use/rgbToRgba"
    }
  }
}~
