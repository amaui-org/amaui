

## API

#### TVersion

```ts
type TVersion = 'all' | 'static' | 'dynamic';
```

#### IRuleItem

```ts
interface IRuleItem {
    property: string;
    value: any;
}
```

#### IOptionsStyle

```ts
interface IOptionsStyle {
    attributes?: Record<string, any>;
}
```

#### IOptions

```ts
interface IOptions {
    version?: TVersion;
    mode?: TMode;
    pure?: boolean;
    priority?: TPriority;
    amauiTheme?: AmauiTheme;
    amauiStyleSheetManager?: AmauiStyleSheetManager;
    amauiStyle?: AmauiStyle;
    props?: any;
    style?: IOptionsStyle;
    rule?: IOptionsRule;
    name?: string;
}
```

#### AmauiStyleSheet

```ts
class AmauiStyleSheet {
    value?: TValueObject;
    options: IOptions;
    id: string;
    version: TVersion;
    mode: TMode;
    pure: boolean;
    priority: TPriority;
    amauiTheme: AmauiTheme;
    amauiStyleSheetManager: AmauiStyleSheetManager;
    amauiStyle: AmauiStyle;
    status: TStatus;
    element: HTMLStyleElement;
    sheet: CSSStyleSheet;
    domElementForTesting: HTMLDivElement;
    private props_;
    values: {
        css: string;
    };
    rules: Array<IRuleItem>;
    names: {
        classNames: {};
        classes: {};
        keyframes: {};
        styles: (...args: string[]) => string;
    };
    constructor(value?: TValueObject, options?: IOptions);
    get props(): any;
    set props(props: any);
    get response(): IValuesVersion;
    get css(): string;
    private get sort();
    private init;
    addRule(value: any, property_?: string, add?: boolean): IAddRuleResponse;
    add(props?: any): void;
    update(value: any): void;
    remove(): void;
    private updateProps;
    private propsAreNew;
    private makeRule;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: AmauiStyleRuleProperty",
      "to": "/dev/style/use/AmauiStyleRuleProperty"
    },
    "next": {
      "label": "Style: AmauiStyleSheetManager",
      "to": "/dev/style/use/AmauiStyleSheetManager"
    }
  }
}~