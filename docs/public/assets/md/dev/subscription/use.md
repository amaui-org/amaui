

## API

#### ISubscribe

```ts
interface ISubscribe {
    unsubscribe: () => void;
}
```

#### IOptions

```ts
interface IOptions {
    emit?: {
        priorValue?: boolean;
        copy?: boolean;
        pre?: {
            method?: TMethod;
        };
        post?: {
            method?: TMethod;
        };
    };
}
```

#### IAmauiSubscription

```ts
interface IAmauiSubscription {
    methods: Array<TMethod>;
    emit(...args: any[]): void;
    subscribe(method: TMethod): void;
    unsubscribe(method: TMethod): void;
    [p: string]: any;
}
```

#### AmauiSubscription

```ts
class AmauiSubscription implements IAmauiSubscription {
    value?: any;
    options: IOptions;
    methods: Array<TMethod>;
    constructor(value?: any, options?: IOptions);
    get length(): number;
    emit(...args: any[]): void;
    forEach(...args: any[]): void;
    map(value_?: any): any;
    subscribe(method: TMethod): ISubscribe;
    unsubscribe(method: TMethod): void;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Subscription: Start",
      "to": "/dev/subscription/start"
    },
    "next": {
      "label": "Test: Start",
      "to": "/dev/test/start"
    }
  }
}~
