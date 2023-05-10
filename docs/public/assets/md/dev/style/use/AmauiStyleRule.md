

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
}
```

#### TRules

```ts
type TRules = Array<{
    property: string;
    value: AmauiStyleRule | AmauiStyleRuleProperty;
}>;
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
    rules: TRules;
    constructor(value: any, property: string, options?: IOptions);
    get selector(): string;
    private set selector(value);
    get className(): string;
    set className(value: string);
    get classNames(): string;
    set classNames(value: string);
    get keyframesName(): string;
    set keyframesName(value: string);
    get hash(): string;
    get parent(): AmauiStyleRule | AmauiStyleSheet;
    get response(): IValuesVersion;
    get css(): string;
    get allOwnedCss(): string;
    get counter(): {
        className: number;
        keyframesName: number;
    };
    private makeRuleClassNameDefault;
    private makeRuleKeyframesNameDefault;
    updateValues(hash_?: boolean): void;
    private makeHash;
    private init;
    addProperty(prop: string, value: any, index?: number, unique?: boolean, add?: boolean): void;
    add(update?: boolean): boolean;
    updateProps(): void;
    update(value?: any): void;
    remove(): void;
    private addRuleToCss;
    addRuleRef(): void;
    makeSelector(): void;
    private makeClassName;
    private makeRuleClassName;
    private makeRuleKeyframesName;
    get rule(): CSSStyleRule;
    set rule(rule: CSSStyleRule);
    private get unique();
    private clear;
    static make(value: any, property: string, options?: IOptions): AmauiStyleRule;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: AmauiStyleRenderer",
      "to": "/dev/style/use/AmauiStyleRenderer"
    },
    "next": {
      "label": "Style: AmauiStyleRuleProperty",
      "to": "/dev/style/use/AmauiStyleRuleProperty"
    }
  }
}~