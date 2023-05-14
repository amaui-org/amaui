

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