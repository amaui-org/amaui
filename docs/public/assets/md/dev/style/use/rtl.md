

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
      "to": "/dev/style/use/reset"
    },
    "next": {
      "label": "Style: sort",
      "to": "/dev/style/use/sort"
    }
  }
}~