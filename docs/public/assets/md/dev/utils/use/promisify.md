

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