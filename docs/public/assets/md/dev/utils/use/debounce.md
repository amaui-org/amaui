

### API

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
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}~