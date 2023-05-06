

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

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}~
