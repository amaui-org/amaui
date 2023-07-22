
# AmauiStyleRuleProperty

Used for creating 1 style rule, having a property & value.

### Use

- In the options you have to add `amauiStyle`, `amauiStyleSheet`, `amauiStyleRule` instances, as once you make an instance of `AmauiStyleRuleProperty` it will based on those options make class name potentially (if not a pure selector), and use plugins on the class name, value, and create a ready made css property, value.
- It will add itself to the `AmauiStyleRule` instance, ready to be added to the DOM.

```ts
const amauiStyleRuleProperty = new AmauiStyleRuleProperty('width', 1114, options);
```

### Values

#### Static

If value is of type `number`, `string` a simple value it will be added to the static style sheet.

##### Non string values

If value is a number, object etc. it has to use one of the plugins that can transform that value into a string.

ie. `unit`, `valueObject` plugins, etc.

#### Dynamic

If value is one of the below options, it will be added to the dynamic style sheet.

Those are css rule property values that can change after they were initially added to the DOM.

##### Method

If value is a method, it takes an argument which are props, so any times props change in `AmauiStyleSheet` instance, it will trigger an update of all `AmauiStyleRuleProperty`'s that have dynamic value using a method, to update their value.

##### AmauiSubscription

If value is `@amaui/subscription` instance, it will subscribe to the emits from it, and any time it emits a new value, that changes the previous value in that subscription, it will update its value.

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
