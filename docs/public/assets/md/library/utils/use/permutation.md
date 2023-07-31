
# permutation

Returns all permutations of values in the first argument (value array).

```ts
permutation([1, 2, 3]);

// [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
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
const generator = permutation([1, 2, 3, 4], { response: 'yield' });

const makePermutations = generator();

makePermutations.next();

// { value: [1, 2, 3, 4],  done: false }
```

## API

#### TPermutation

```ts
type TPermutation = Array<any> | (() => IterableIterator<any>);
```

#### IPermutationOptions

```ts
interface IPermutationOptions {
    items?: number;
    response?: 'array' | 'yield';
}
```

#### permutation

```ts
default function permutation(value_: any[], options_?: IPermutationOptions): TPermutation;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: percentageFromValueWithinRange",
      "to": "/library/utils/use/percentageFromValueWithinRange"
    },
    "next": {
      "label": "Utils: permutationWithRepetition",
      "to": "/library/utils/use/permutationWithRepetition"
    }
  }
}~
