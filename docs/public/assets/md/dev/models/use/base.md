

### API

#### IBase

```ts
interface IBase {
    clean?(): void;
    [p: string]: any;
}
```

#### Base

```ts
class Base implements IBase {
    [p: string]: any;
    clean?(): void;
}
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
