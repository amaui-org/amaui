

### API

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
      "to": "/dev/style/use/pure"
    },
    "next": {
      "label": "Style: rtl",
      "to": "/dev/style/use/rtl"
    }
  }
}~