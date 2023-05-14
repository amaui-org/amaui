

## API

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
      "label": "models: Start",
      "to": "/dev/models/start"
    },
    "next": {
      "label": "Models: getExpressParamValue",
      "to": "/dev/models/use/getExpressParamValue"
    }
  }
}~
