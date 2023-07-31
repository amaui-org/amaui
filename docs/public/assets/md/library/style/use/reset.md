
# reset

Method to add all reset values for various css elements, with optionally developer provided ones as addition to the default values.

### Options

#### element

Element which potentially has `AmauiStyle`, `AmauiTheme` instanced bound to it.

#### name

Name for this style, usually if `style` method is used per UI element type, name should be that element's name.

#### mode

Values are `regular` or `atomic`, default is `regular`.

Atomic will create a class name for every unique css property, value.

#### amaui\_style

Add `AmauiStyle` instance it will be a part of.

#### amaui\_theme

Add `AmauiTheme` instance it will use.

#### override

If true, css selectors (properties) will fully override existing selector's values, otherwise it will just add onto the existing css properties for that selector, using `@amaui/utils`'s `merge` method, by default it's false.

### Use

When using reset, styles are added as pure, meaning selector is exactly what is writen, and will not be made into a class name.

Usefull for any element selector, etc.

```ts
const amauiStyle = new AmauiStyle();

// Plugins
amauiStyle.plugins.add = [
  AmauiStyle.unit,
  AmauiStyle.sort,
  AmauiStyle.prefix,
  AmauiStyle.makeClassName,
  AmauiStyle.rtl
];

const styles = reset(
  theme => ({
    '@keyframes a': {
      '0%': {
          color: 'white'
      },
      '40%': {
          color: 'yellow'
      }
    },

    a: {
      // unit
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

    meta: {
      width: 100
    },

    main: {
      // Function
      background: props => props.a === 1 ? 'yellow' : 'orange'
    }
  }),
  {
    name: 'Reset',
    amaui_style: { value: amauiStyle }
  }
);

// Add to the dom
const response = styles.add();

response;

// {
//   ids: {
//     static: [
//       '1b2b0876-238b-416e-b10b-c01f8dbdfd76'
//     ],
//     dynamic: [
//       '4a4e395b-2db7-4619-ad12-f17737a0d3d1'
//     ]
//   },
//   classNames: { },
//   classes: { },
//   keyframes: {
//     a: 'a-0'
//   }
// }
```

## API

#### IOptions

```ts
interface IOptions {
    element?: Element;
    name?: string;
    mode?: TMode;
    amaui_style?: IOptionsAmauiStyle;
    amaui_theme?: IOptionsAmauiTheme;
    override?: boolean;
}
```

#### FONT_FAMILY

```ts
const FONT_FAMILY: {
    primary: string;
    secondary: string;
    mono: string;
};
```

#### normalize.css

```ts
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
```

#### normalize

```ts
const normalize: {
    html: {
        lineHeight: number;
        '-webkit-text-size-adjust': string;
    };
    main: {
        display: string;
    };
    h1: {
        fontSize: string;
    };
    hr: {
        boxSizing: string;
        height: number;
        overflow: string;
    };
    pre: {
        fontFamily: string;
        fontSize: string;
    };
    a: {
        backgroundColor: string;
    };
    'abbr[title]': {
        borderBottom: string;
        textDecoration: {
            value: string;
            fallbacks: string[];
        };
    };
    'b, strong': {
        fontWeight: string;
    };
    'code, kbd, samp': {
        fontFamily: string;
        fontSize: string;
    };
    small: {
        fontSize: string;
    };
    'sub, sup': {
        fontSize: string;
        lineHeight: number;
        position: string;
        verticalAlign: string;
    };
    sub: {
        bottom: string;
    };
    sup: {
        top: string;
    };
    img: {
        borderStyle: string;
    };
    'button, input, optgroup, select, textarea': {
        fontFamily: string;
        fontSize: string;
        lineHeight: number;
        margin: number;
    };
    'button, input': {
        overflow: string;
    };
    'button, select': {
        textTransform: string;
    };
    'button, [type="button"], [type="reset"], [type="submit"]': {
        '-webkit-appearance': string;
    };
    'button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner': {
        borderStyle: string;
        padding: number;
    };
    'button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring': {
        outline: string;
    };
    fieldset: {
        padding: string;
    };
    legend: {
        boxSizing: string;
        color: string;
        display: string;
        maxWidth: string;
        padding: number;
        whiteSpace: string;
    };
    progress: {
        verticalAlign: string;
    };
    textarea: {
        overflow: string;
    };
    '[type="checkbox"], [type="radio"]': {
        boxSizing: string;
        padding: number;
    };
    '[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button': {
        height: string;
    };
    '[type="search"]': {
        '-webkit-appearance': string;
        outlineOffset: number;
    };
    '[type="search"]::-webkit-search-decoration': {
        '-webkit-appearance': string;
    };
    '::-webkit-file-upload-button': {
        '-webkit-appearance': string;
        font: string;
    };
    details: {
        display: string;
    };
    summary: {
        display: string;
    };
    template: {
        display: string;
    };
    '[hidden]': {
        display: string;
    };
};
```

#### resetDefault

```ts
const resetDefault: {
    '*': {
        margin: number;
        padding: number;
        border: number;
        outline: string;
        fontSize: string;
        background: string;
        boxSizing: string;
        touchAction: string;
        '-webkit-tap-highlight-color': string;
        '-webkit-focus-ring-color': string;
        '&[contenteditable]': {
            userSelect: string;
        };
    };
    body: {
        fontSize: string;
        fontFamily: string;
        fontWeight: string;
        fontStyle: string;
        position: string;
        overflowX: string;
        backgroundColor: string;
    };
    'img, embed, object, video': {
        maxWidth: string;
        height: string;
    };
    a: {
        textDecoration: string;
        cursor: string;
    };
    form: {
        width: string;
    };
    span: {
        wordWrap: string;
    };
    hr: {
        height: string;
        background: string;
        width: string;
        margin: string;
    };
    'pre, code, kbd, samp': {
        fontFamily: string;
    };
    code: {
        '& span': {
            whiteSpace: string;
        };
    };
    ':focus': {
        outline: string;
    };
};
```

#### reset

```ts
function reset(value_: TValue, options_?: IOptions): IMethodResponse;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: pure",
      "to": "/library/style/use/pure"
    },
    "next": {
      "label": "Style: rtl",
      "to": "/library/style/use/rtl"
    }
  }
}~
