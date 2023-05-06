

### API

#### IOptionsStyle

```ts
interface IOptionsStyle {
    attributes?: Record<string, any>;
}
```

#### IOptions

```ts
interface IOptions {
    mode?: TMode;
    pure?: boolean;
    priority?: TPriority;
    amauiTheme?: AmauiTheme;
    amauiStyle?: AmauiStyle;
    style?: IOptionsStyle;
    rule?: IOptionsRule;
    amaui_style_cache?: boolean;
    name?: string;
}
```

#### AmauiStyleSheetManager

```ts
class AmauiStyleSheetManager {
    value?: TValueObject;
    options: IOptions;
    id: string;
    status: TStatus;
    mode: TMode;
    pure: boolean;
    priority: TPriority;
    amauiTheme: AmauiTheme;
    amauiStyle: AmauiStyle;
    values: {
        css: string;
    };
```

