

### API

#### IMakeStyles

```ts
interface IMakeStyles {
    amaui_style_sheet_manager: AmauiStyleSheetManager;
    ids: IIds;
    add: (props?: any) => void;
    update: (props: any) => void;
    remove: () => void;
}
```

#### IOptions

```ts
interface IOptions {
    element?: Element;
    amaui_style?: IOptionsAmauiStyle;
    amaui_theme?: IOptionsAmauiTheme;
    response?: 'css' | 'json';
    response_json_property_version?: 'cammel' | 'kebab';
}
```

#### inline

```ts
function inline(value_: TValue, props?: any, options_?: IOptions): any;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: css",
      "to": "/dev/style/use/css"
    },
    "next": {
      "label": "Style: interfaces",
      "to": "/dev/style/use/interfaces"
    }
  }
}~