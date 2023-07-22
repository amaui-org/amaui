
# promisify

Makes a regular method that accepts a callback, into a Promise method.

```ts
const method = (a, ad, method_) => {
  setTimeout(() => {
    if (a !== 'a') method_([a, ad], new Error('a'));
    else (method_([a, ad]));
  }, 400);
};

await promisify(method)('a', true);
```

### Options

#### onError

If to reject, or resolve on error.

## API

#### IOptions

```ts
interface IOptions {
    // default: reject
    onError?: 'reject' | 'resolve';
}
```

#### promisify

```ts
// defaults
// options: interface IOptions
const promisify: <T>(method: TMethod | Promise<any>, options_?: IOptions) => (...args: any[]) => Promise<any>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: polyfills",
      "to": "/dev/utils/use/polyfills"
    },
    "next": {
      "label": "Utils: quantize",
      "to": "/dev/utils/use/quantize"
    }
  }
}~
