

### API

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
```

