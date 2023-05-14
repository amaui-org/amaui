

## API

#### IAmauiMiddleware

```ts
interface IAmauiMiddleware {
    name: string;
    method: TMethod;
    parent: AmauiGroup;
    file?: string;
    responses?: Array<IAmauiResponse>;
}
```

#### AmauiMiddleware

```ts
class AmauiMiddleware implements IAmauiMiddleware {
    name: string;
    method: TMethod;
    parent: AmauiGroup;
    file?: string;
    responses: Array<IAmauiResponse>;
    constructor(name: string, method: TMethod);
}
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Test: AmauiGroup",
      "to": "/dev/test/use/AmauiGroup"
    },
    "next": {
      "label": "Test: AmauiTest",
      "to": "/dev/test/use/AmauiTest"
    }
  }
}~
