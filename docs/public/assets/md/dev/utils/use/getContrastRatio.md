
# getContrastRatio

If contrast ratio is lower towards 1 contrast is low between the 2 colors, otherwise if it's towards 21, it's higher.

Both colors can be any color version `rgb`, `rgba`, `hsl`, `hsla`, `hex`, `hexa`.

```ts
getContrastRatio('hsla(60, 100%, 34%)', 'rgb(207, 207, 103)')

// 1.45
```

### Why?

It's very useful when you wanna compare the background color, and text color on top of that background, and want to decide if you should emphasize (lighten, darken) that text more until proper contrast ratio is achieved.

## API

#### getContrastRatio

```ts
const getContrastRatio: (valueA: string, valueB: string) => number | undefined;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: flattenObject",
      "to": "/dev/utils/use/flattenObject"
    },
    "next": {
      "label": "Utils: getCountry",
      "to": "/dev/utils/use/getCountry"
    }
  }
}~
