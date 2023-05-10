

### API

#### TVariation

```ts
type TVariation = Array<any> | (() => IterableIterator<any>);
```

#### IVariationOptions

```ts
interface IVariationOptions {
    response?: 'array' | 'yield';
}
```

#### variationWithRepetition

```ts
default function variationWithRepetition(value_: any[], items?: number, options_?: IVariationOptions): TVariation;
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