
# inline

Method that makes inline styles to be added into the `style` attribute of an element.

### Options

#### element

Element which potentially has `AmauiStyle`, `AmauiTheme` instanced bound to it.

#### amaui\_style

Add `AmauiStyle` instance it will be a part of.

#### amaui\_theme

Add `AmauiTheme` instance it will use.

#### response

Values are `css` or `json`, default is `css`.

#### response\_json\_property\_version

Values are `cammel` or `kebab`, default is `cammel`.

### Use

Returns string or object as a response of made inline styles.

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

const a: any = {
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
  animation: '$a .4s ease',

  // Function
  backgroundColor: props => props.a === 114 ? 'yellow' : 'orange',
};

inline(
  // styles
  a,
  // props
  { a: 114 },
  // options
  { amaui_style: { value: amauiStyle } }
);

// `-webkit-mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent); -webkit-mask-origin: inherit; -webkit-mask-position: 40% 74%;  background: #faa; background-color: yellow; float: right; margin: 0 14px 4px 40px; margin-right: 41px; mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent); mask-origin: inherit; mask-position: 40% 74%; max-width: 100px; padding: 40px; padding-right: 41px; position: sticky; transition: all .4s ease; width: 100px;`
```

## API

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
      "to": "/library/style/use/css"
    },
    "next": {
      "label": "Style: interfaces",
      "to": "/library/style/use/interfaces"
    }
  }
}~
