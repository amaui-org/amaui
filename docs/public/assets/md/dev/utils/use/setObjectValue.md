

### API

#### IOptions

```ts
interface IOptions {
    valueOverride?: boolean;
}
```

#### setObjectValue

```ts
const setObjectValue: <T extends unknown>(object: T, keys?: string | string[], value?: any, options_?: IOptions) => T;
```

