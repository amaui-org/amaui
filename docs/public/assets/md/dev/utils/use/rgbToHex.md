
# rgbToHex

Makes rgb color value into a `hex` color value.

```ts
rgbToHex('rgb(173, 173, 0)');
rgbToHex('rgb(177, 177, 0)');
rgbToHex('rgba(174, 214, 224, 0.44)');

// #adad00
// #b1b100
// #aed6e070
```

### Options

#### opacity

Adds opacity to the `hex` color value, making it `hexa` color value.

May be from 0 to 1.

#### array

If true, returns values as array of numbers, instead of an `hex` string value.


## API

#### rgbToHex

```ts
const rgbToHex: (value: string, opacity_?: number, array?: boolean) => string | number[];
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: removeObjectValue",
      "to": "/dev/utils/use/removeObjectValue"
    },
    "next": {
      "label": "Utils: rgbToHsl",
      "to": "/dev/utils/use/rgbToHsl"
    }
  }
}~
