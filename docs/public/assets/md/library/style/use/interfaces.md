
# interfaces

Usefull interfaces that you can read about in the API part.

## API

#### 'csstype'

```ts
module 'csstype' {
    interface Properties {
        animationDuration?: CSS.Property.AnimationDuration | number | undefined;
        position?: CSS.Property.Position | CSS.Property.BackgroundPosition | undefined;
        [index: string]: any;
    }
}
```

#### TValueObjectValue

```ts
type TValueObjectValue = (string | ((props?: any) => TValueObjectValue) | AmauiSubscription | CSS.Properties<string | number | Array<string | number> | Array<Array<string | number>> | Array<TValueObjectValue> | Array<Array<TValueObjectValue>> | ((props?: any) => TValueObjectValue)> | Record<string, any> | {
    [index: string]: CSS.Properties<TValueObjectValue>;
});
```

#### TValueObject

```ts
type TValueObject = Record<string, TValueObjectValue>;
```

#### TValueMethod

```ts
type TValueMethod = (theme: AmauiTheme) => TValueObject;
```

#### TValue

```ts
type TValue = TValueObject | TValueMethod;
```

#### TMode

```ts
type TMode = 'regular' | 'atomic';
```

#### TDirection

```ts
type TDirection = 'ltr' | 'rtl';
```

#### TValueVersion

```ts
type TValueVersion = 'value' | 'method' | 'amaui_subscription';
```

#### TRef

```ts
type TRef = {
    main: {
        sheet: AmauiStyleSheet;
        rule: AmauiStyleRule;
    };
    className: string;
    refs: Array<AmauiStyleSheet>;
};
```

#### TRefs

```ts
type TRefs = Record<string, TRef>;
```

#### IIds

```ts
interface IIds {
    static: Array<string>;
    dynamic: Array<string>;
}
```

#### TStatus

```ts
type TStatus = 'idle' | 'inited' | 'active' | 'remove';
```

#### IValuesVersion

```ts
interface IValuesVersion {
    css: string;
}
```

#### IOptionsRule

```ts
interface IOptionsRule {
    sort?: boolean;
    prefix?: boolean;
    rtl?: boolean;
}
```

#### IAddRuleResponse

```ts
interface IAddRuleResponse {
    className: string;
    classNames: string;
    keyframeName: string;
}
```

#### IResponse

```ts
interface IResponse {
    ids: IIds;
    classNames: Record<string, string>;
    classes: Record<string, string>;
    keyframes: Record<string, string>;
    className: string;
    class: string;
    styles: (...args: string[]) => string;
}
```

#### TPriority

```ts
type TPriority = 'lower' | 'upper';
```

#### ISheets

```ts
interface ISheets {
    static: Array<AmauiStyleSheet>;
    dynamic: Array<AmauiStyleSheet>;
}
```

#### IMethodResponse

```ts
interface IMethodResponse {
    amaui_style_sheet_manager: AmauiStyleSheetManager;
    sheets: ISheets;
    ids: IIds;
    add: (props?: any) => IResponse;
    update: (value: any) => void;
    props: {
        props: any;
        ids: string | Array<string>;
    } | ((value: {
        props: any;
        ids: string | Array<string>;
    }) => any);
    remove: (ids?: string | Array<string>) => void;
    addRule: (value: any, property?: string) => IAddRuleResponse;
}
```

#### IOptionsAmauiTheme

```ts
interface IOptionsAmauiTheme {
    value?: AmauiTheme;
    get?: (value?: Element) => AmauiTheme;
}
```

#### IOptionsAmauiStyle

```ts
interface IOptionsAmauiStyle {
    value?: AmauiStyle;
    get?: (value?: Element) => AmauiStyle;
}
```

#### IInsert

```ts
interface IInsert {
    comment?: string;
}
```

#### ICSSOptions

```ts
interface ICSSOptions {
    amaui_style?: IOptionsAmauiStyle;
    amaui_theme?: IOptionsAmauiTheme;
    mode?: TMode;
    pure?: boolean;
    reset?: boolean;
    resetProps?: {
        override?: boolean;
    };
    css?: {
        file?: {
            name?: string;
            hash?: boolean;
        };
        folders?: Array<{
            url?: string;
            clear?: boolean;
        }>;
        clear?: boolean;
        minify?: boolean;
    };
    html?: {
        files?: Array<{
            url?: string;
            insert?: IInsert;
        }>;
        insert?: IInsert;
        add?: boolean;
        addNames?: boolean;
    };
    rule?: IOptionsRule;
    optimize?: boolean;
    log?: boolean;
}
```

#### IAmauiStyleSheetManagerProps

```ts
interface IAmauiStyleSheetManagerProps {
    props: any;
    ids: string | Array<string>;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: inline",
      "to": "/library/style/use/inline"
    },
    "next": {
      "label": "Style: makeClassName",
      "to": "/library/style/use/makeClassName"
    }
  }
}~
