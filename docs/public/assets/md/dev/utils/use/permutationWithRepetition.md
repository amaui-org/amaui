
# permutationWithRepetition

Returns all permutations with repetitions, of values in the first argument (value array).

```ts
permutationWithRepetition([1, 2]);

// [[1, 1], [1, 2], [2, 1], [2, 2]]
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
const generator = permutationWithRepetition([1, 2, 3, 4], { response: 'yield' });

const makePermutations = generator();

makePermutations.next();

// { value: [1, 1, 1, 1],  done: false }
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

#### permutationWithRepetition

```ts
default function permutationWithRepetition(value_: any[], options_?: IPermutationOptions): TPermutation;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: permutation",
      "to": "/dev/utils/use/permutation"
    },
    "next": {
      "label": "Utils: pick",
      "to": "/dev/utils/use/pick"
    }
  }
}~
