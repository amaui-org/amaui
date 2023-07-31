
# rtl

Plugin that updates the property name into it's mirrored version, ie. `padding-left` into `padding-right`. \
Usually used when `dir` is changed from `ltr` to `rtl`, makes a web app `rtl` ready.

### Add

```ts
const amauiStyle = new AmauiStyle();

// Add to plugins
amauiStyle.plugins.add = rtl;
```

### Remove

```ts
const amauiStyle = new AmauiStyle();

// Remove from plugins
amauiStyle.plugins.remove = rtl;
```

### Use

```ts
const styles = style(theme => ({
  a: {
    paddingLeft: '114px'
  }
}));

.a {
  padding-right: '114px';
}
```

## API

#### IRtl

```ts
interface IRtl {
    value?: any;
    arguments?: any;
}
```

#### rtl

```ts
function rtl(amauiStyle: AmauiStyle): {
    methods: {
        method: (value_: {
            value: string;
            property: string;
        }) => IRtl;
    };
    remove: () => void;
};
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: reset",
      "to": "/library/style/use/reset"
    },
    "next": {
      "label": "Style: sort",
      "to": "/library/style/use/sort"
    }
  }
}~
