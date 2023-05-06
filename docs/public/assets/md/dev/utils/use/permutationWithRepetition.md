

### API

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
function permutationWithRepetition(value_: any[], options_?: IPermutationOptions): TPermutation;
```

