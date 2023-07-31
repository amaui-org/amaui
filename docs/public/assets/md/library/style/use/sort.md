
# sort

Plugin that sorts the properties within the the class, in order of more specific property being after the less specific properties.

### Options

#### priority

##### original

Original order.

##### shorthand

Shorthand properties have higher priority.

##### individual

More specific properties have higher priority.

### Add

```ts
const amauiStyle = new AmauiStyle();

// Add to plugins
amauiStyle.plugins.add = sort;

// Add to plugins with options
amauiStyle.plugins.add = {
  method: sort,
  arguments: [
    {
      // default is individual
      priority: 'original'
    }
  ]
};
```

### Remove

```ts
const amauiStyle = new AmauiStyle();

// Remove from plugins
amauiStyle.plugins.remove = sort;
```

### Use

```ts
const styles = style(theme => ({
  a: {
    paddingLeft: '114px',
    padding: '114px'
    paddingRight: '114px'
  }
}));

.a {
  padding: 114px;
  padding-left: 114px;
  padding-right: 114px;
}
```

## API

#### ISort

```ts
interface ISort {
    value?: any;
    arguments?: any;
}
```

#### TOptionsPriority

```ts
type TOptionsPriority = 'original' | 'shorthand' | 'individual';
```

#### IOptions

```ts
interface IOptions {
    priority?: TOptionsPriority;
}
```

#### sort

```ts
function sort(amauiStyle: AmauiStyle, options_?: IOptions): {
    methods: {
        method: (values: Array<IRuleItem>) => ISort;
    };
    remove: () => void;
};
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: rtl",
      "to": "/library/style/use/rtl"
    },
    "next": {
      "label": "Style: style",
      "to": "/library/style/use/style"
    }
  }
}~
