
# combinationWithRepetition

Returns all n (items, argument 2) combinations with repetitions, using provided values in first argument value array.

This method produces a lot more values than combinations method, as now items in first argument (value array) can repeat.

```ts
combinationWithRepetition([1, 2], 4);

// [[1, 1, 1, 1], [1, 1, 1, 2], [1, 1, 2, 2], [1, 2, 2, 2], [2, 2, 2, 2]]
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
const generator = combinationWithRepetition([1, 2], 4, { response: 'yield' });

const makeCombinations = generator();

makeCombinations.next();

// { value: [1, 1, 1, 1],  done: false }
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

#### combinationWithRepetition

```ts
// defaults
// items: 0
default function combinationWithRepetition(value_: any[], items_?: number, options_?: ICombinationOptions): TCombination;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: combination",
      "to": "/dev/utils/use/combination"
    },
    "next": {
      "label": "Utils: copy",
      "to": "/dev/utils/use/copy"
    }
  }
}~
