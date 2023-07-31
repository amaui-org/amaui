
# models

Useful types for typescript, more in the API part.

## API

#### IClass

```ts
interface IClass {
    new (...args: any[]): any;
    [p: string]: any;
}
```

#### TMethod

```ts
type TMethod = (...args: any[]) => any;
```

#### TObject

```ts
type TObject = Record<string, any>;
```

#### IQueryKeys

```ts
interface IQueryKeys {
    allowed: any[];
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Models: getMongoOperator",
      "to": "/library/models/use/getMongoOperator"
    },
    "next": {
      "label": "Models: MongoResponse",
      "to": "/library/models/use/MongoResponse"
    }
  }
}~
