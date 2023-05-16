
# lighten

Update color to a lighter version of any color version `rgb`, `rgba`, `hsl`, `hsla`, `hex`, `hexa`.

Coefficient is from 0 to 1.

```ts
lighten('#ff8c00', 0.4);
lighten('#ff8c0070', 0.4);
lighten('rgb(255, 140, 0)', 0.4);
lighten('rgba(255, 140, 0, 0.44)', 0.4);
lighten('hsl(33, 100%, 50%)', 0.4);
lighten('hsla(33.414, 100.41%, 50.4%)', 0.4);

// rgba(255, 186, 102, 0.4)
// rgba(255, 186, 102, 0.44)
// rgba(255, 186, 102, 0.4)
// rgba(255, 186, 102, 0.44)
// rgba(255, 186, 102, 0.4)
// rgba(255, 186, 102, 0.44)
`

## API

#### lighten

```ts
const lighten: (value: string, coefficient: number) => string | undefined;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: isValid",
      "to": "/dev/utils/use/isValid"
    },
    "next": {
      "label": "Utils: matchRoute",
      "to": "/dev/utils/use/matchRoute"
    }
  }
}~
