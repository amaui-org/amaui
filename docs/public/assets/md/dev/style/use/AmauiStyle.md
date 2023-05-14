

## API

#### IAmauiPluginItem

```ts
interface IAmauiPluginItem {
    method: TMethod;
    arguments: any[];
}
```

#### TAmauiPlugin

```ts
type TAmauiPlugin = TMethod | IAmauiPluginItem;
```

#### AmauiPlugins

```ts
type AmauiPlugins = TAmauiPlugin | TAmauiPlugin[];
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
        keyframes: {
            pre: AmauiSubscription;
            name: AmauiSubscription;
            post: AmauiSubscription;
        };
        rule: {
            pre: AmauiSubscription;
            unit: AmauiSubscription;
            value: AmauiSubscription;
            prefix: AmauiSubscription;
            rtl: AmauiSubscription;
            add: AmauiSubscription;
            update: AmauiSubscription;
            update_props: AmauiSubscription;
            remove: AmauiSubscription;
            post: AmauiSubscription;
        };
        rules: {
            sort: AmauiSubscription;
        };
        sheet: {
            add: AmauiSubscription;
            update: AmauiSubscription;
            update_props: AmauiSubscription;
            remove: AmauiSubscription;
        };
        sheet_manager: {
            add: AmauiSubscription;
            update: AmauiSubscription;
            update_props: AmauiSubscription;
            remove: AmauiSubscription;
        };
    };
    values: {
        css: string;
    };
    refs: TRefs;
    sheets: Array<AmauiStyleSheet>;
    sheet_managers: Array<AmauiStyleSheetManager>;
    counter: {
        className: number;
        keyframesName: number;
    };
    [p: string]: any;
    constructor(options?: IOptions);
    get response(): IValuesVersion;
    get css(): string;
    get plugins(): {
        add: AmauiPlugins;
        remove: AmauiPlugins;
    };
    init(): void;
    static attributes: string[];
    static get(value: Element, index?: number): AmauiStyle;
    static first(value: Element): AmauiStyle;
    static last(value: Element): AmauiStyle;
    static nearest(value: Element): AmauiStyle;
    static furthest(value: Element): AmauiStyle;
    static all(value: Element): Array<AmauiStyle>;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: Start",
      "to": "/dev/style/start"
    },
    "next": {
      "label": "Style: AmauiStyleRenderer",
      "to": "/dev/style/use/AmauiStyleRenderer"
    }
  }
}~