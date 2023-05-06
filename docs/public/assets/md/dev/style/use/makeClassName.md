

### API

#### IOptionsDom

```ts
interface IOptionsDom {
    unique?: boolean;
}
```

#### IMakeClassName

```ts
interface IMakeClassName {
    value?: any;
    arguments?: any;
    version?: 'development' | 'production';
}
```

#### IOptions

```ts
interface IOptions {
    production?: boolean;
    dom?: IOptionsDom;
}
```

#### makeClassName

```ts
function makeClassName(amauiStyle: AmauiStyle, options_?: IOptions): {
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
