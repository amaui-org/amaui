
# debounce

Delays a method invokation any time its debounce on that method is called, until timeout runs out and that method is invoked.

Useful for when users are quickly typing in the search element, to call the method for search api only once user pauses from typing for ie. 140ms, instead of spamming the api calls on every keyDown event.

```ts
const method = (a = 14) => { console.log(a); };

const methodDebounced = debounce(method, 140);

methodDebounced(1);
methodDebounced(14);
methodDebounced(114);

// After 140 ms
// 1114
```

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
// defaults
// delay: 140
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
