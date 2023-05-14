

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