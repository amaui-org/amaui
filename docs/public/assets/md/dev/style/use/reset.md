

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

#### normalize

```ts
const normalize: {
    html: {
        lineHeight: number;
        '-webkit-text-size-adjust': string;
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
```

#### reset

```ts
function reset(value_: TValue, options_?: IOptions): IMethodResponse;
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
