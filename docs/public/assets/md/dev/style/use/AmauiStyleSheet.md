
# AmauiStyleSheet

Used to encapsulate all of the different made selectors, and their values.

### Use

```ts
const amauiStyleSheetStatic = new AmauiStyleSheet({
  a: {
    width: 1114
  },

  a14: {
    background: 'yellow'
  }
}, options);

const amauiStyleSheetDynamic = new AmauiStyleSheet({
  a14: {
    background: props => props.a === 1 ? 'yellow' : 'beige'
  }
}, options);
```

### Version

#### Static

Static `AmauiStyleSheet` will have all the `AmauiStyleRule`'s with static `AmauiStyleRuleProperty`'s values.

#### Dynamic

Dynamic `AmauiStyleSheet` will have all the `AmauiStyleRule`'s with dynamic `AmauiStyleRuleProperty`'s values.

### Methods

#### response

Returns in an object with css property's value entire css generated from all the `AmauiStyleRule`'s.

#### css

Returns in a string value entire css generated from all the `AmauiStyleRule`'s.

#### add

Adds the made selectors & their values to the DOM.

#### update

Updates the entire `AmauiStyleSheet` with new rules.

Based on the value provided, it will add new `AmauiStyleRule`'s, update existing ones, and remove ones that currently exist, but are not part of the new value.

#### props

Updates the props, and triggers updates for all `AmauiStyleRule`'s `AmauiStyleRuleProperty`'s with dynamic values of type method.

```ts
const amauiStyleSheet = new AmauiStyleSheet(value, options);

// Updates props
amauiStyleSheet.props = {
  a: 114
};
```

#### remove

Removes the `AmauiStyleSheet` from the DOM.

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
