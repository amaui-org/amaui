
# hslToRgbPure

Makes hsl number color values into an `rgb` color value.

```ts
hslToRgbPure(60, 100, 35);
hslToRgbPure(192, 45, 78);
hslToRgbPure(192.414, 45.41, 78.4);

// rgb(179, 179, 0)
// rgba(174, 214, 224)
// rgba(174, 214, 224)
```

## API

#### hslToRgbPure

```ts
const hslToRgbPure: (h_: number, s_: number, l_: number) => number[];
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: hslToRgb",
      "to": "/dev/utils/use/hslToRgb"
    },
    "next": {
      "label": "Utils: imageToPalette",
      "to": "/dev/utils/use/imageToPalette"
    }
  }
}~
