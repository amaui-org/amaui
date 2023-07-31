
# variation

Returns all n (items, argument 2) variations, using provided values in first argument value array.

If items number is larger than number of items in the first argument (value array), then variationWithRepetition is used.

```ts
variation([1, 2, 3], 2);

// [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]
```

### Options

#### response

array or yield

##### array

Returns all values as an array of arrays of values, above example.

##### yield

Returns a generator function, where calling next, will yield next value, only when you need it.

This is very useful when there are a lot of values produced, but you don't want them all at the same time, but one at a time.

```ts
const generator = variation([1, 2, 3, 4], 3, { response: 'yield' });

const makeVariations = generator();

makeVariations.next();

// { value: [1, 2, 3],  done: false }
```

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
// defaults
// items: 0
default function variation(value_: any[], items_?: number, options_?: IVariationOptions): TVariation;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: valueFromPercentageWithinRange",
      "to": "/library/utils/use/valueFromPercentageWithinRange"
    },
    "next": {
      "label": "Utils: variationWithRepetition",
      "to": "/library/utils/use/variationWithRepetition"
    }
  }
}~
