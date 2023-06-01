
# AmauiStyle

Main class that maintains the state of all the plugins that are methods can use, generated css, classNames, style sheets added to the DOM, etc.

### Options

#### element

Element in the DOM that this `AmauiStyle` instance will be attached to.

#### mode

Values are `regular`, `atomic`, by default `regular`.

In `regular` mode, class values 1 or more are added as a part of the same selector. \
In `atomic` mode, every selector property, value pair will be generated into its own class name, it might be very usefull for some use cases to improve reusability of styles.

#### renderer

Instance of `AmauiStyleRenderer`.

#### rule

##### sort

If true, it will use sort plugin on `AmauiStyleRule`s.

##### prefix

If true, it will use prefix plugin on `AmauiStyleRule`s.

##### rtl

If true, it will use rtl plugin on `AmauiStyleRule`s.

#### minify

If true it will minify the css, by default true.

#### optimize

If true will try to optimize `AmauiStyleRule`s by reusing existing classes with exactly the same hash (css property, values), even if it's in another style sheet, manager, by default false.

### Use

```ts
const amauiStyle = new AmauiStyle(options);
```

### Plugins

#### Add

```ts
const amauiStyle = new AmauiStyle();

amauiStyle.plugins.add = [
  AmauiStyle.unit,
  AmauiStyle.prefix,
  AmauiStyle.sort
];
```

#### Remove

It removes based on the method reference.

```ts
const amauiStyle = new AmauiStyle();

amauiStyle.plugins.remove = [
  AmauiStyle.unit,
  AmauiStyle.prefix,
  AmauiStyle.sort
];
```

#### Making custom plugins

- All of the plugins depend on the `subscriptions` property, and emits for specific use cases.
- You can inspect any plugin file to see exact implementation of the plugin. More or less it takes in an instance of `AmauiStyle`, and simply subscribes inside to certain `subscriptions` emits, and does some transformations on the css properties, values, etc.
- You can find in the API part, all the `subscriptions` events that are available.

### response

This property is an object with css property, that will have, once all css is made, entire css made as a string.

### css

In this property you'll find once css is made, all the css as a string.

### Util methods

#### attributes

Defines array of attributes that will be added to an element, on which `AmauiStyle` instance will be attached to as a value.

#### Find `AmauiStyle` instance from an element

All these methods will try to find an element that has `AmauiStyle` instance attached to it, and return it.

```ts
AmauiStyle.get(element, 0);

AmauiStyle.first(element);

AmauiStyle.last(element);

AmauiStyle.nearest(element);

AmauiStyle.furthest(element);

AmauiStyle.all(element);

// AmauiStyle {}
// AmauiStyle {}
// AmauiStyle {}
// AmauiStyle {}
// AmauiStyle {}
// [AmauiStyle {}, AmauiStyle {}, AmauiStyle {}]
```

### Other

#### refs

Refs property in the `AmauiStyle` instance will hold refs of all classNames with specific hashes that can be reused, if `optimize` option is true.

#### sheets

Reference of all `AmauiStyleSheet`s that are a part of this `AmauiStyle` instance.

#### sheet_managers

Reference of all `AmauiStyleSheetManager`s that are a part of this `AmauiStyle` instance.

#### counter

Counter of all className, keyframesName's made, in the `AmauiStyle` instance.

## API

#### IAmauiPluginItem

```ts
interface IAmauiPluginItem {
    method: TMethod;
    arguments: any[];
}
```

#### TAmauiPlugin

```ts
type TAmauiPlugin = TMethod | IAmauiPluginItem;
```

#### AmauiPlugins

```ts
type AmauiPlugins = TAmauiPlugin | TAmauiPlugin[];
```

#### IOptions

```ts
interface IOptions {
    element?: Element;
    mode?: TMode;
    renderer?: AmauiStyleRenderer;
    rule?: IOptionsRule;
    minify?: boolean;
    optimize?: boolean;
}
```

#### AmauiStyle

```ts
class AmauiStyle {
    options: IOptions;
    id?: string;
    element?: Element;
    mode?: TMode;
    renderer: AmauiStyleRenderer;
    direction: string;
    subscriptions: {
        className: {
            pre: AmauiSubscription;
            name: AmauiSubscription;
            post: AmauiSubscription;
        };
        keyframes: {
            pre: AmauiSubscription;
            name: AmauiSubscription;
            post: AmauiSubscription;
        };
        rule: {
            pre: AmauiSubscription;
            unit: AmauiSubscription;
            value: AmauiSubscription;
            prefix: AmauiSubscription;
            rtl: AmauiSubscription;
            add: AmauiSubscription;
            update: AmauiSubscription;
            update_props: AmauiSubscription;
            remove: AmauiSubscription;
            post: AmauiSubscription;
        };
        rules: {
            sort: AmauiSubscription;
        };
        sheet: {
            add: AmauiSubscription;
            update: AmauiSubscription;
            update_props: AmauiSubscription;
            remove: AmauiSubscription;
        };
        sheet_manager: {
            add: AmauiSubscription;
            update: AmauiSubscription;
            update_props: AmauiSubscription;
            remove: AmauiSubscription;
        };
    };
    values: {
        css: string;
    };
    refs: TRefs;
    sheets: Array<AmauiStyleSheet>;
    sheet_managers: Array<AmauiStyleSheetManager>;
    counter: {
        className: number;
        keyframesName: number;
    };
    [p: string]: any;
    constructor(options?: IOptions);
    get response(): IValuesVersion;
    get css(): string;
    get plugins(): {
        add: AmauiPlugins;
        remove: AmauiPlugins;
    };
    init(): void;
    static attributes: string[];
    static get(value: Element, index?: number): AmauiStyle;
    static first(value: Element): AmauiStyle;
    static last(value: Element): AmauiStyle;
    static nearest(value: Element): AmauiStyle;
    static furthest(value: Element): AmauiStyle;
    static all(value: Element): Array<AmauiStyle>;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: Start",
      "to": "/dev/style/start"
    },
    "next": {
      "label": "Style: AmauiStyleRenderer",
      "to": "/dev/style/use/AmauiStyleRenderer"
    }
  }
}~
