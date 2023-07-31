
# style

Method to add all classes as properties, and their css properties as object property values.

- Add your styles into it either as a pure object, or as a method with theme argument passed into it.
- Once method is invoked, all classNames are premade, and ready to inject into the dom, or used for generating SSR css.
- It returns `IMethodResponse` with add method in it, and references to the made class names.
- Invoking the add method, will insert those css styles into the dom.

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

#### add

If true, adds the styles to the DOM as soon as `style` method is invoked, automatically, default is false.

#### return

If add is true, what to return from the add response, values `'ids' | 'classNames' | 'classes' | 'keyframes'`.

### Use

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

const styles = style(
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

    a14: {
      // Function
      background: props => props.a === 1 ? 'yellow' : 'orange'
    }
  }),
  {
    name: 'Button',
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
//   classNames: {
//     a: 'a-0',
//     a14: 'a1-1'
//   },
//   classes: {
//     a: 'a-0',
//     a14: 'a1-1'
//   },
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
      "to": "/library/style/use/sort"
    },
    "next": {
      "label": "Style: unit",
      "to": "/library/style/use/unit"
    }
  }
}~
