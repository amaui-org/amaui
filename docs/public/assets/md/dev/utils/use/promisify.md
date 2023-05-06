

### API

#### IOptions

```ts
interface IOptions {
    onError?: 'reject' | 'resolve';
}
```

#### promisify

```ts
const promisify: <T>(method: TMethod | Promise<any>, options_?: IOptions) => (...args: any[]) => Promise<any>;
```

