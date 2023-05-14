

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
      "to": "/dev/style/use/makeClassName"
    },
    "next": {
      "label": "Style: pure",
      "to": "/dev/style/use/pure"
    }
  }
}~
