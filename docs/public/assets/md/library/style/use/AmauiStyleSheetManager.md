
# AmauiStyleSheetManager

Used for managing multiple `AmauiStyleSheet` instances in one place, for the same use cases.

You have to provide `AmauiStyle` instance in the options, as it will use the available plugins from it, and provide made css to it. It also needs an `AmauiTheme` instance if you want to have theme available for `AmauiStyleRuleProperty`'s within it.

Usually if you create styles that include multiple classes, where some have static, some dynamic property values, then you would add all those styles to `AmauiStyleSheetManager` instance which sorts those selectors into static, dynamic ones, and creates for each static, dynamic `AmauiStyleSheet` instances, and manages all of those within itself.

### Use

```ts
const amauiStyleSheetManager = new AmauiStyleSheetManager({
  '@keyframes a': {
    '0%': {
        color: 'white'
    },
    '40%': {
        color: 'yellow'
    }
  },

  a: {
    width: 100,

    'max-width': 100,

    // Simple
    background: '#faa',

    margin: '0 14px 4px 40px',

    // rtl
    marginLeft: 41,
    float: 'left',

    // sort
    paddingLeft: 41,
    padding: 40,

    // prefixes
    position: 'sticky',
    transition: 'all .4s ease',
    maskOrigin: 'inherit',
    maskImage: 'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
    maskPosition: '40% 74%',

    // animation
    animation: '$a .4s ease'
  },

  a14: {
    // Function
    background: props => props.a === 1 ? 'yellow' : 'orange'
  }
}, options);
```

### Methods

#### response

Returns in an object with css property's value entire css generated from all the `AmauiStyleSheet`'s.

#### css

Returns in a string value entire css generated from all the `AmauiStyleSheet`'s.

#### add

Adds the made selectors & their values to the DOM, for each of the `AmauiStyleSheet`'s.

#### update

Updates all of the `AmauiStyleSheet`'s with new rules.

#### props

Updates the props, and triggers updates for all dynamic `AmauiStyleSheet`'s.

```ts
const amauiStyleSheetManager = new AmauiStyleSheetManager(value, options);

// Updates props
amauiStyleSheetManager.props = {
  a: 114
};
```

#### remove

Removes all of the `AmauiStyleSheet`'s from the DOM.

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
      "to": "/library/style/use/AmauiStyleSheet"
    },
    "next": {
      "label": "Style: AmauiTheme",
      "to": "/library/style/use/AmauiTheme"
    }
  }
}~
