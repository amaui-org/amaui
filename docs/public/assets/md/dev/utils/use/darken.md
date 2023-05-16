
# darken

Update color to a darker version of any color version `rgb`, `rgba`, `hsl`, `hsla`, `hex`, `hexa`.

Coefficient is from 0 to 1.

```ts
darken('#ff8c00', 0.4);
darken('#ff8c0070', 0.4);
darken('rgb(255, 140, 0)', 0.4);
darken('rgba(255, 140, 0, 0.44)', 0.4);
darken('hsl(33, 100%, 50%)', 0.4);
darken('hsla(33.414, 100.44%, 50.4%)', 0.4);

// rgba(153, 84, 0, 0.4)
// rgba(153, 84, 0, 0.44)
// rgba(153, 84, 0, 0.4)
// rgba(153, 84, 0, 0.44)
// rgba(153, 84, 0, 0.4)
// rgba(153, 84, 0, 0.44)
```

## API

#### darken

```ts
const darken: (value: string, coefficient: number) => string | undefined;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: countries",
      "to": "/dev/utils/use/countries"
    },
    "next": {
      "label": "Utils: debounce",
      "to": "/dev/utils/use/debounce"
    }
  }
}~
