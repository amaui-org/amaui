

## API

#### IProperties

```ts
interface IProperties {
    static: Array<{
        property: string;
        value: any;
    }>;
    dynamic: Array<{
        property: string;
        value: any;
    }>;
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
    properties: IProperties;
    sheets: ISheets;
    names: IResponse;
    users: number;
    constructor(value?: TValueObject, options?: IOptions);
    private propertiesVersion;
    set props(value: IAmauiStyleSheetManagerProps);
    get ids(): IIds;
    get response(): IValuesVersion;
    get css(): string;
    private init;
    add(props?: any): IResponse;
    update(value: any): IResponse;
    remove(ids_?: string[]): void;
    private versions;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: AmauiStyleSheet",
      "to": "/dev/style/use/AmauiStyleSheet"
    },
    "next": {
      "label": "Style: AmauiTheme",
      "to": "/dev/style/use/AmauiTheme"
    }
  }
}~
