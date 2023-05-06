

### API

#### IPrefix

```ts
interface IPrefix {
    value?: any;
    arguments?: any;
}
```

#### IOptionsSSR

```ts
interface IOptionsSSR {
    all: boolean;
}
```

#### IOptions

```ts
interface IOptions {
    ssr?: IOptionsSSR;
}
```

#### prefix

```ts
function prefix(amauiStyle: AmauiStyle, options_?: IOptions): {
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
