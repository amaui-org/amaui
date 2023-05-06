

### API

#### IOptions

```ts
interface IOptions {
    clean?: boolean;
    cleanAfter?: boolean;
    optionsCleanValue?: IOptionsCleanValue;
    normalize?: {
        map?: Map<any, any>;
    };
```

#### map

```ts
const map: Map<any, any>;
```

#### simpleNormalize

```ts
const simpleNormalize: (value: any, options_?: IOptions) => string;
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
