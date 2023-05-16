
# emphasize

Emphasizes any color version `rgb`, `rgba`, `hsl`, `hsla`, `hex`, `hexa`, if luminance is larger than 0.5 it's darkened, otherwise it's lightened.

Coefficient is from 0 to 1.

```ts
emphasize('#ffa500', 0.4);
emphasize('#ffa50070', 0.4);
emphasize('rgb(174, 214, 224)', 0.4);
emphasize('rgba(174, 214, 224, 0.44)', 0.4);
emphasize('hsl(192, 45%, 77%)', 0.4);
emphasize('hsla(192.414, 45.41%, 77.4%)', 0.4);

// #ffa500
// #ffa50070
// rgb(174, 214, 224)
// rgba(174, 214, 224, 0.44)
// hsl(192, 45%, 77%)
// hsla(192.414, 45.41%, 77.4%, 0.4)
`


## API

#### emphasize

```ts
const emphasize: (value: string, coefficient?: number) => string | undefined;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: elementToCanvas",
      "to": "/dev/utils/use/elementToCanvas"
    },
    "next": {
      "label": "Utils: encode",
      "to": "/dev/utils/use/encode"
    }
  }
}~
