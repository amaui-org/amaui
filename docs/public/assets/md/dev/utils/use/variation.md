

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

#### variation

```ts
function variation(value_: any[], items_?: number, options_?: IVariationOptions): TVariation;
```

