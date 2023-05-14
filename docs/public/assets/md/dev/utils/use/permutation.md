

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
      "to": "/dev/utils/use/percentageFromValueWithinRange"
    },
    "next": {
      "label": "Utils: permutationWithRepetition",
      "to": "/dev/utils/use/permutationWithRepetition"
    }
  }
}~