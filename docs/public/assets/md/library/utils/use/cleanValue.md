
# cleanValue

Updates the string value, while cleaning it up from various values, provided through options.

```ts
cleanValue('a, a. a- a_');

// a a a a
```

### Options

#### filters

Any item within filters will be replaced with `replaceWith` option.

```ts
cleanValue('a +', { filters: ['+'] });

// a
```

#### className

Converts any cammel case, capitalized cammel case, etc. into lowercased kebab case usually used for css properties, classes.

```ts
cleanValue('BackgroundImage', { className: true });

// background-image
```

#### cammelCaseTransform

At any part in the string where there's a capital letter joined together with another letter, it will be separated with a space value.

```ts
cleanValue('BackgroundImage', { cammelCaseTransform: true });

// Background Image
```

#### url

Cleans up strings that are a url value.

```ts
cleanValue('https://amaui.me/a/?a=a4', { url: true });

// https://amaui.me/a?a=a4
```

#### replaceWith

Value used to replace values that filters define.

```ts
cleanValue('a-', { replaceWith: '+' })

// a+
```

#### trim

Trims the string at start, end.

```ts
cleanValue('  a   ', { trim: true });

// a
```

#### capitalize

Capitalizes first letter of the string.

```ts
cleanValue('a a Aa a', { capitalize: true });

// A a Aa a
```

#### lowercase

Lowercases the entire string.

```ts
cleanValue('A a Aa a', { lowercase: true });

// a a aa a
```

## API

#### IOptions

```ts
interface IOptions {
    // default [',', '.', '-', '_', '\s+']
    filters?: string[];
    className?: boolean;
    cammelCaseTransform?: boolean;
    url?: boolean;
    // default ' '
    replaceWith?: string;
    // default true
    trim?: boolean;
    capitalize?: boolean;
    lowercase?: boolean;
}
```

#### optionsDefault

```ts
const optionsDefault: IOptions;
```

#### cleanValue

```ts
// defaults
// options: interface IOptions
const cleanValue: (value_: string, options_?: IOptions) => string | any;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: clamp",
      "to": "/library/utils/use/clamp"
    },
    "next": {
      "label": "Utils: colorToRgb",
      "to": "/library/utils/use/colorToRgb"
    }
  }
}~
