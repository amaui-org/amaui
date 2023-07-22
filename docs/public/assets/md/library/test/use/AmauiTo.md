
# AmauiTo

Method to run an individual test. \

First argument is name of the test, and second argument is the method that runs the actual test.

Method can be either of 3:
- Synchronous, regular method.
- Async method, which returns or throws an error. Useful when you have to await for methods.
- Synchronous method, with 2 arguments, resolve, reject, same as in promise resolve makes test successfully, and reject errors the test. Useful when you have nested async code, instead of awaited methods.

```ts
to('Regular method', () => {
  ...
});

to('Async method', async () => {
  ...
});

to('Synchronous method with resolve, reject', (resolve, reject) => {
  ...
});
```

## API

#### IAmauiTo

```ts
interface IAmauiTo {
    name: string;
    method: TMethod;
    parent: AmauiGroup;
    level: number;
    file?: string;
    index: number;
    mainIndex: number;
    response?: IAmauiResponse;
}
```

#### AmauiTo

```ts
class AmauiTo implements IAmauiTo {
    name: string;
    method: TMethod;
    parent: AmauiGroup;
    index: number;
    mainIndex: number;
    level: number;
    file?: string;
    response: IAmauiResponse;
    constructor(name: string, method: TMethod);
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Test: AmauiTest",
      "to": "/dev/test/use/AmauiTest"
    },
    "next": {
      "label": "Test: assert",
      "to": "/dev/test/use/assert"
    }
  }
}~
