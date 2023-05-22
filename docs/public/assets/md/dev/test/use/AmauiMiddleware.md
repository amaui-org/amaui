
# AmauiMiddleware

Use to run a method priror or post running of specific methods. \
Types of middleware methods, and order in which they run is explained in the AmauiGroup page.

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
