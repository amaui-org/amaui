
# prefix

Usefull plugin if you are using properties that require prefixes, or properties's values require prefixes, in order to work properly in most of the browsers.

Plugin tests prefixes on the fly while rendering for each required property, to see which prefixes are available in that specific browser, and only than uses them.

### Options

#### ssr

##### all

If true it will add all the prefixes to the property in the SSR environment, as in SSR we can't test to know which browser request is coming from, that specifically supports some of the prefixes.

### Add

```ts
const amauiStyle = new AmauiStyle();

// Add to plugins
amauiStyle.plugins.add = prefix;
```

### Remove

```ts
const amauiStyle = new AmauiStyle();

// Remove from plugins
amauiStyle.plugins.remove = prefix;

// Add to plugins with options
amauiStyle.plugins.add = {
  method: prefix,
  arguments: [
    {
      ssr: {
        // default is true
        all: false
      }
    }
  ]
};
```

### Use

```ts
const styles = style(theme => ({
  a: {
    position: 'sticky',
    maskImage: 'inherit'
  }
}));

.a {
  position: '-webkit-sticky',
  position: 'sticky',
  -webkit-mask-image: 'inherit',
  mask-image: 'inherit'
}
```

## API

#### IPrefix

```ts
interface IPrefix {
    value?: any;
    arguments?: any;
}
```

#### IOptionsSSR

```ts
interface IOptionsSSR {
    all: boolean;
}
```

#### IOptions

```ts
interface IOptions {
    ssr?: IOptionsSSR;
}
```

#### prefix

```ts
function prefix(amauiStyle: AmauiStyle, options_?: IOptions): {
    methods: {
        method: (value_: {
            property: string;
            value: string;
        }) => IPrefix;
    };
    remove: () => void;
};
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: makeClassName",
      "to": "/library/style/use/makeClassName"
    },
    "next": {
      "label": "Style: pure",
      "to": "/library/style/use/pure"
    }
  }
}~
