

## API

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
      "label": "Utils: variation",
      "to": "/dev/utils/use/variation"
    },
    "next": {
      "label": "Utils: wait",
      "to": "/dev/utils/use/wait"
    }
  }
}~