
# alpha

Update opacity of any color version `rgb`, `rgba`, `hsl`, `hsla`, `hex`, `hexa`.

Opacity value is from 0 to 1.

```ts
alpha('#ff8c00', 0.4);
alpha('#ff8c0070', 0.4);
alpha('rgb(255, 140, 0)', 0.4);
alpha('rgba(255, 140, 0, 0.44)', 0.4);
alpha('hsl(33, 100%, 50%)', 0.4);
alpha('hsla(33.414, 100.44%, 50.4%)', 0.4);

// rgba(255, 140, 0, 0.4)
// rgba(255, 140, 0, 0.4)
// rgba(255, 140, 0, 0.4)
// rgba(255, 140, 0, 0.4)
// rgba(255, 140, 0, 0.4)
// rgba(255, 140, 0, 0.4)
```

## API

#### alpha

```ts
const alpha: (value: string, opacity: number) => string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: allImagesLoaded",
      "to": "/library/utils/use/allImagesLoaded"
    },
    "next": {
      "label": "Utils: arrayMoveItem",
      "to": "/library/utils/use/arrayMoveItem"
    }
  }
}~
