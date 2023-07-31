
# Base

Base is a class with useful methods, for other classes to extend it.

Use case is a model class, representing an object in the database, when spreading the class instance to an object, it also leaves the `undefined` properties. Base has `clean` method that removes all properties with `undefined` values, so that new object in the mongo database will only retain properties with actual values.

### clean

```ts
class A extends Base {
  a = 114;
  a1;
}

const a = new A();

{ ...a }

// { a: 114, a1: undefined }

a.clean();

{ ...a }

// { a: 114 }
```

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
      "label": "Models: ResponsePagination",
      "to": "/library/models/use/ResponsePagination"
    },
    "next": {
      "label": "Models: getExpressParamValue",
      "to": "/library/models/use/getExpressParamValue"
    }
  }
}~
