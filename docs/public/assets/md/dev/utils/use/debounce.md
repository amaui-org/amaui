

## API

#### IDebounceMethod

```ts
interface IDebounceMethod {
    (...args: any[]): any;
    clear: () => void;
}
```

#### debounce

```ts
const debounce: (method_: TMethod, delay?: number) => IDebounceMethod;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: darken",
      "to": "/dev/utils/use/darken"
    },
    "next": {
      "label": "Utils: decode",
      "to": "/dev/utils/use/decode"
    }
  }
}~
