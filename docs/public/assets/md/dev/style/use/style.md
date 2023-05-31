

## API

#### IOptions

```ts
interface IOptions {
    element?: Element;
    name?: string;
    mode?: TMode;
    amaui_style?: IOptionsAmauiStyle;
    amaui_theme?: IOptionsAmauiTheme;
    add?: boolean;
    return?: 'ids' | 'classNames' | 'classes' | 'keyframes';
}
```

#### style

```ts
function style(value_: TValue, options_?: IOptions): IMethodResponse;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: sort",
      "to": "/dev/style/use/sort"
    },
    "next": {
      "label": "Style: unit",
      "to": "/dev/style/use/unit"
    }
  }
}~