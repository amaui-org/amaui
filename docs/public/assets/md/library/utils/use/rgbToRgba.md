
# rgbToRgba

Makes rgb color value into an `rgba` color value.

```ts
rgbToRgba('rgba(173, 173, 0)', 0.4);
rgbToRgba('rgba(174, 214, 224, 0.44)', 0.4);

// rgba(173, 173, 0, 0.4)
// rgba(174, 214, 224, 0.4)
```

### Options

#### opacity

Adds opacity to the `rgb` color value, making it `rgba` color value.

May be from 0 to 1.

#### array

If true, returns values as array of numbers, instead of an `rgb` string value.


## API

#### rgbToRgba

```ts
const rgbToRgba: (value: string, opacity?: number, array?: boolean) => string | number[];
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: rgbToHslPure",
      "to": "/dev/utils/use/rgbToHslPure"
    },
    "next": {
      "label": "Utils: serialize",
      "to": "/dev/utils/use/serialize"
    }
  }
}~
