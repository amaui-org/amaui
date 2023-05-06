

### API

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
```

