

## API

#### IOptions

```ts
interface IOptions extends IOptionsRule {
    value_version?: TValueVersion;
    pure?: boolean;
    owner?: AmauiStyleRule;
    parents?: Array<AmauiStyleSheet | AmauiStyleRule>;
    amauiStyle?: AmauiStyle;
    amauiStyleSheet?: AmauiStyleSheet;
    amauiStyleRule?: AmauiStyleRule;
}
```

#### AmauiStyleRuleProperty

```ts
class AmauiStyleRuleProperty {
    value: any;
    property: string;
    options: IOptions;
    value_version: TValueVersion;
    pure: boolean;
    owner: AmauiStyleRule;
    parents: Array<AmauiStyleSheet | AmauiStyleRule>;
    amauiStyleRule: AmauiStyleRule;
    amauiStyleSheet: AmauiStyleSheet;
    amauiStyle: AmauiStyle;
    level: number;
    level_actual: number;
    id: string;
    values: {
        property: string;
        value: string;
        css: string;
    };
    constructor(value: any, property: string, options?: IOptions);
    get parent(): AmauiStyleRule;
    get response(): IValuesVersion;
    get css(): string;
    private updateValues;
    private init;
    update(value?: any): void;
    remove(): void;
    makeSelector(): void;
    private clear;
    static make(value: any, property: string, options?: IOptions): AmauiStyleRuleProperty;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: AmauiStyleRule",
      "to": "/dev/style/use/AmauiStyleRule"
    },
    "next": {
      "label": "Style: AmauiStyleSheet",
      "to": "/dev/style/use/AmauiStyleSheet"
    }
  }
}~