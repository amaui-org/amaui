

### API

#### ISort

```ts
interface ISort {
    value?: any;
    arguments?: any;
}
```

#### TOptionsPriority

```ts
type TOptionsPriority = 'original' | 'shorthand' | 'individual';
```

#### IOptions

```ts
interface IOptions {
    priority?: TOptionsPriority;
}
```

#### sort

```ts
function sort(amauiStyle: AmauiStyle, options_?: IOptions): {
```

