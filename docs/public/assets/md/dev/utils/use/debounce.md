

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

