

## API

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
