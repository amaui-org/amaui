

### API

#### IOptions

```ts
interface IOptions {
    copy?: boolean;
    merge?: {
        array?: boolean;
    };
```

#### merge

```ts
const merge: <T extends unknown>(target: T, source: any, options_?: IOptions) => T;
```

