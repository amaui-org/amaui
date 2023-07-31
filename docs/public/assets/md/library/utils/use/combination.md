
# combination

Returns all n (items, argument 2) combinations, using provided values in first argument value array.

If items number is larger than number of items in the first argument (value array), then combinationWithRepetions is used.

```ts
combination([1, 2, 3, 4, 5], 4);

// [[1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 4, 5], [1, 3, 4, 5], [2, 3, 4, 5]]
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
const generator = combination([1, 2, 3, 4, 5], 4, { response: 'yield' });

const makeCombinations = generator();

makeCombinations.next();

// { value: [1, 2, 3, 4],  done: false }
```

## API

#### TCombination

```ts
type TCombination = Array<any> | (() => IterableIterator<any>);
```

#### ICombinationOptions

```ts
interface ICombinationOptions {
    items?: number;
    response?: 'array' | 'yield';
}
```

#### combination

```ts
// defaults
// items: 0
default function combination(value_: any[], items_?: number, options_?: ICombinationOptions): TCombination;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: colorToRgb",
      "to": "/library/utils/use/colorToRgb"
    },
    "next": {
      "label": "Utils: combinationWithRepetition",
      "to": "/library/utils/use/combinationWithRepetition"
    }
  }
}~
