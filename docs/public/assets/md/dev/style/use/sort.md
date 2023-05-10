

### API

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
      "to": "/dev/style/use/rtl"
    },
    "next": {
      "label": "Style: style",
      "to": "/dev/style/use/style"
    }
  }
}~