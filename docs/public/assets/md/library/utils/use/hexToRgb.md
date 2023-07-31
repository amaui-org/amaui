
# hexToRgb

Makes hex color value into an `rgb` color value.

```ts
hexToRgb('#adad00');
hexToRgb('#b1b100');
hexToRgb('#aed6e070');

// rgb(173, 173, 0)
// rgb(177, 177, 0)
// rgba(174, 214, 224, 0.44)
```

### Options

#### opacity

Adds opacity to the `rgb` color value, making it `rgba` color value.

May be from 0 to 1.

#### array

If true, returns values as array of numbers, instead of an `rgb` string value.

## API

#### hexToRgb

```ts
// defaults
// array: false
const hexToRgb: (value: string, opacity?: number, array?: boolean) => string | number[];
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: hexadecimalStringToBinary",
      "to": "/library/utils/use/hexadecimalStringToBinary"
    },
    "next": {
      "label": "Utils: hslToRgb",
      "to": "/library/utils/use/hslToRgb"
    }
  }
}~
