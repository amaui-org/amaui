

### API

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
function combinationWithRepetition(value_: any[], items_?: number, options_?: ICombinationOptions): TCombination;
```

