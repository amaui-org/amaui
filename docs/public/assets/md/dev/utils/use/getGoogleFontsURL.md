

### API

#### IGoogleFont

```ts
interface IGoogleFont {
    name: string;
    weights: Array<string | number>;
}
```

#### *

```ts
/**
 * Example:
 * Input:
 * getGoogleFontsURL([
 *   { name: 'Roboto', weights: [400, 700] },
 *   { name: 'Source Sans 3', weights: ['italic 200', 400, 700] },
 * ]);
 * Output:
 * 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Source+Sans+3:ital,wght@0,200;0,700;1,200&display=swap'
 */
```

#### getGoogleFontsURL

```ts
const getGoogleFontsURL: (value: Array<IGoogleFont>) => string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}~