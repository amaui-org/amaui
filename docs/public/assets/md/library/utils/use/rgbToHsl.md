
# rgbToHsl

Makes rgb color value into a `hsl` color value.

```ts
rgbToHsl('rgb(179, 179, 0)');
rgbToHsl('rgba(174, 214, 224, 0.4)');
rgbToHsl('rgba(174, 214, 224, 0.4)');

// hsl(60, 100%, 35%)
// hsla(192, 45%, 78%, 0.4)
// hsla(192.414, 45.41%, 78.4%, 0.4)
```

### Options

#### opacity

Adds opacity to the `hsl` color value, making it `hsla` color value.

May be from 0 to 1.

#### array

If true, returns values as array of numbers, instead of an `hsl` string value.


## API

#### rgbToHsl

```ts
const rgbToHsl: (value: string, opacity?: number, array?: boolean) => string | number[];
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: rgbToHex",
      "to": "/dev/utils/use/rgbToHex"
    },
    "next": {
      "label": "Utils: rgbToHslPure",
      "to": "/dev/utils/use/rgbToHslPure"
    }
  }
}~
