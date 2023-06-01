
# makeClassName

Plugin that leaves classNames with a simple counter added to property names in development, and in production build creates minimal class names for made css classes.

It uses `@amaui/utils`'s `variationWithRepetition` method to generate class names with at least 2 characters, and makes all the alphabet varations with repetitions for 2 characters, than resets and adds the 3rd character, etc.

### Options

#### production

If true, it will make production class names.

#### dom

##### unique

If true, for every class name, it will make a search in the current dom to check if such class name doesn't exist, so it will always make a unique class name at that moment.

### Add

```ts
const amauiStyle = new AmauiStyle();

// Add to plugins
amauiStyle.plugins.add = makeClassName;

// Add to plugins with options
amauiStyle.plugins.add = {
  method: makeClassName,
  arguments: [
    {
      // default is true if in browser
      // or in nodejs environment with process.env.NODE_ENV being prod or production
      production: true,
      dom: {
        // default is false
        unique: true
      }
    }
  ]
};
```

### Remove

```ts
const amauiStyle = new AmauiStyle();

// Remove from plugins
amauiStyle.plugins.remove = makeClassName;
```

### Use

```ts
const styles = style(theme => ({
  a: {
    width: '1114px'
  }
}));

// In development
.a-0 {
  width: '1114px'
}

// In production
.aa {
  width: '1114px'
}
```

## API

#### IOptionsDom

```ts
interface IOptionsDom {
    unique?: boolean;
}
```

#### IMakeClassName

```ts
interface IMakeClassName {
    value?: any;
    arguments?: any;
    version?: 'development' | 'production';
}
```

#### IOptions

```ts
interface IOptions {
    production?: boolean;
    dom?: IOptionsDom;
}
```

#### makeClassName

```ts
function makeClassName(amauiStyle: AmauiStyle, options_?: IOptions): {
    methods: {
        method: (value_: {
            property: string;
            value: any;
        }) => IMakeClassName;
    };
    remove: () => void;
};
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: interfaces",
      "to": "/dev/style/use/interfaces"
    },
    "next": {
      "label": "Style: prefix",
      "to": "/dev/style/use/prefix"
    }
  }
}~
