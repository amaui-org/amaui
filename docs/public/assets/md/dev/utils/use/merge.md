

### API

#### IOptions

```ts
interface IOptions {
    copy?: boolean;
    merge?: {
        array?: boolean;
    };
}
```

#### merge

```ts
const merge: <T extends unknown>(target: T, source: any, options_?: IOptions) => T;
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