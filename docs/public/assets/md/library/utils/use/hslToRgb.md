
# hslToRgb

Makes hsl color value into an `rgb` color value.

```ts
hslToRgb('hsl(60, 100%, 35%)');
hslToRgb('hsla(192, 45%, 78%, 0.4)');
hslToRgb('hsla(192.414, 45.41%, 78.4%, 0.4)');

// rgb(179, 179, 0)
// rgba(174, 214, 224, 0.4)
// rgba(174, 214, 224, 0.4)
```

### Options

#### opacity

Adds opacity to the `rgb` color value, making it `rgba` color value.

May be from 0 to 1.

#### array

If true, returns values as array of numbers, instead of an `rgb` string value.

## API

#### hslToRgb

```ts
// defaults
// array: false
const hslToRgb: (value: string, opacity?: number, array?: boolean) => string | number[];
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: hexToRgb",
      "to": "/library/utils/use/hexToRgb"
    },
    "next": {
      "label": "Utils: hslToRgbPure",
      "to": "/library/utils/use/hslToRgbPure"
    }
  }
}~
