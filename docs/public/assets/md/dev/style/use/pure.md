

### API

#### IOptions

```ts
interface IOptions {
    element?: Element;
    name?: string;
    amaui_style?: IOptionsAmauiStyle;
    amaui_theme?: IOptionsAmauiTheme;
}
```

#### pure

```ts
function pure(value_: TValue, options_?: IOptions): IMethodResponse;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: prefix",
      "to": "/dev/style/use/prefix"
    },
    "next": {
      "label": "Style: reset",
      "to": "/dev/style/use/reset"
    }
  }
}~