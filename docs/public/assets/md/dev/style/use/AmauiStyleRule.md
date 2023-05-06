

### API

#### TVersion

```ts
type TVersion = 'property' | 'at-rule';
```

#### IRuleItemWithString

```ts
interface IRuleItemWithString {
    property: string;
    value: AmauiStyleRule | AmauiStyleRuleProperty;
}
```

#### IAmauiStyleRuleValue

```ts
interface IAmauiStyleRuleValue {
    value: Array<string | (() => any) | AmauiSubscription>;
    options?: {
        rule?: IOptionsRule;
    };
```

#### TRules

```ts
type TRules = Array<{
```

#### IOptions

```ts
interface IOptions extends IOptionsRule {
    mode?: TMode;
    value_version?: TValueVersion;
    version?: TVersion;
    pure?: boolean;
    index?: number;
    owner?: AmauiStyleRule | AmauiStyleSheet;
    parents?: Array<AmauiStyleSheet | AmauiStyleRule>;
    amauiStyle?: AmauiStyle;
    amauiStyleSheet?: AmauiStyleSheet;
}
```

#### AmauiStyleRule

```ts
class AmauiStyleRule {
    value: any;
    property: string;
    options: IOptions;
    id: string;
    value_version: TValueVersion;
    mode: TMode;
    version: TVersion;
    pure: boolean;
    index: number;
    owner: AmauiStyleRule | AmauiStyleSheet;
    parents: Array<AmauiStyleSheet | AmauiStyleRule>;
    amauiStyleSheet: AmauiStyleSheet;
    amauiStyle: AmauiStyle;
    rule_: CSSStyleRule;
    status: TStatus;
    level: number;
    level_actual: number;
    isVariable: boolean;
    hash_: string;
    static: boolean;
    rules_owned: Array<AmauiStyleRule | AmauiStyleRuleProperty>;
    ref: TRef;
    className_: string;
    selector_: string;
    classNames_: string;
    keyframesName_: string;
    values: {
        value: any;
        css: string;
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
