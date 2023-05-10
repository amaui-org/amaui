

### API

#### IOptions

```ts
interface IOptions {
    URL?: boolean;
}
```

#### getURL

```ts
const getURL: (value: string, options_?: IOptions) => URL | string;
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