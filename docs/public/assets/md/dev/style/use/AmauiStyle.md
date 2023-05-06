

### API

#### AmauiPlugin

```ts
type AmauiPlugin = TMethod | {
```

#### AmauiPlugins

```ts
type AmauiPlugins = AmauiPlugin | AmauiPlugin[];
```

#### IOptions

```ts
interface IOptions {
    element?: Element;
    mode?: TMode;
    renderer?: AmauiStyleRenderer;
    rule?: IOptionsRule;
    minify?: boolean;
    optimize?: boolean;
}
```

#### AmauiStyle

```ts
class AmauiStyle {
    options: IOptions;
    id?: string;
    element?: Element;
    mode?: TMode;
    renderer: AmauiStyleRenderer;
    direction: string;
    subscriptions: {
        className: {
            pre: AmauiSubscription;
            name: AmauiSubscription;
            post: AmauiSubscription;
        };
```

