

### API

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

#### variationWithRepetition

```ts
function variationWithRepetition(value_: any[], items?: number, options_?: IVariationOptions): TVariation;
```

