

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

#### variation

```ts
default function variation(value_: any[], items_?: number, options_?: IVariationOptions): TVariation;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: valueFromPercentageWithinRange",
      "to": "/dev/utils/use/valueFromPercentageWithinRange"
    },
    "next": {
      "label": "Utils: variationWithRepetition",
      "to": "/dev/utils/use/variationWithRepetition"
    }
  }
}~
