

### API

#### IGoogleFont

```ts
interface IGoogleFont {
    name: string;
    weights: Array<string | number>;
}
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
