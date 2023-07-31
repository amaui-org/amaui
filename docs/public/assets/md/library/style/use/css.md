
# css

- Method to add all classes as properties, and their css properties as object property values
- Provide CSS folders, and file details.
- Provide HTML file paths, and where to insert generated css.
- And on `amaui-style` command call, it will using its options, find all files in which `css` method is used, and it will generate all css based on it.

### Options

#### mode

Values are `regular` or `atomic`, default is `regular`.

Atomic will create a class name for every unique css property, value.

#### amaui\_style

Add `AmauiStyle` instance it will be a part of.

#### amaui\_theme

Add `AmauiTheme` instance it will use.

#### pure

If true it will be made as pure styles.

#### reset

If reset, reset styles will be added.

#### resetProps

If reset is true, there will be used as reset method props.

##### override

Reset override values.

#### css

##### file

Array of items.

###### name

Name of the css file.

###### hash

If file name should include hash of the file.

##### folders

Array of items.

###### url

URL of the folder.

###### clear

If file should be cleared prior to adding the new files, file updates.

##### clear

Clear general value that folder specific clear value overrides.

##### minify

If css should be minified.

#### html

##### files

Array of values.

###### url

URL of the file.

###### insert

- comment: Comment string which should be replaced with the css file import.

##### insert

Insert general value, which file specific insert value overrides.

##### add

If css should be added to the HTML.

##### addNames

If made css names should be also inserted into the HTML as javascript, so they are globally available on load.

#### rule

Rule options.

##### sort

##### prefix

##### rtl

#### log

If process should log.

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

const styles = css(
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
    amaui_style: { value: amauiStyle },
    css: {
      file: {
        name: 'style'
      },
      folders: [
        { url: './test/folders/css' },
      ]
    },
    html: {
      files: [
        { url: './test/folders/html/ad.html' },
        {
          url: './test/folders/html/ad1.html',
          insert: {
            comment: '<!-- a1 insert here -->'
          }
        }
      ],
      insert: {
        comment: '<!-- a insert here -->'
      },
      addNames: true
    },
    log: false
  }
);

await styles.make();
```


## API

#### IResponse

```ts
interface IResponse {
    make: () => Promise<void>;
}
```

#### css

```ts
function css(value__: TValue, options_?: ICSSOptions): IResponse;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: colors",
      "to": "/library/style/use/colors"
    },
    "next": {
      "label": "Style: inline",
      "to": "/library/style/use/inline"
    }
  }
}~
