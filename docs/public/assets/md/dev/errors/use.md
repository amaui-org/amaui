
# AmauiError

Main Error class is AmauiError that extends Error, and adds onto it.

```ts
const amauiError = new AmauiError('a');

amauiError.name;
amauiError.message;
amauiError.added_at;
amauiError.stack;

// AmauiError
// 'a'
// 1643893234
// 'AmauiError: a\n    at eval (eval at evaluate (:3:2389), <anonymous>:2:31)\n    at t.default.evaluate (<anonymous>:3:2412)\n    at t.default.<anonymous> (<anonymous>:1:44)'
```

### All error version

Each has a specific error class, and error name.

Useful for example in the express API in the error middleware to check error name, and based on it send a specific response status code, ie:

- 'ValidationError' 400
- 'AuthenticationError' 401
- 'PermissionError' 403
- etc.

#### AmauiError

```ts
new AmauiError();
```

#### AmauiTestError

```ts
new AmauiTestError();
```

#### AssertError

```ts
new AssertError();
```

#### AuthenticationError

```ts
new AuthenticationError();
```

#### AuthorizationError

```ts
new AuthorizationError();
```

#### ValidationError

```ts
new ValidationError();
```

#### NotFoundError

```ts
new NotFoundError();
```

#### PermissionError

```ts
new PermissionError();
```

#### AmauiAmqpError

```ts
new AmauiAmqpError();
```

#### AmauiAwsError

```ts
new AmauiAwsError();
```

#### AmauiMongoError

```ts
new AmauiMongoError();
```

#### ConnectionError

```ts
new ConnectionError();
```

#### DeveloperError

```ts
new DeveloperError();
```

### Custom errors

You can make your own custom error by extending the main `AmauiError`.

```ts
class MyError extends AmauiError {

  public constructor(value: TAmauiErrorValue = '', ...args: any[]) {
    super(value, MyError, ...args);

    this.name = 'MyError';
  }

}
```

## API

#### IClass

```ts
interface IClass {
    new (...args: any[]): any;
    [p: string]: any;
}
```

#### IAmauiError

```ts
interface IAmauiError {
    message: string;
    name: string;
    stack: string;
    added_at: number;
    [p: string]: any;
}
```

#### TAmauiErrorValue

```ts
type TAmauiErrorValue = Error | string;
```

#### AmauiError

```ts
class AmauiError extends Error implements IAmauiError {
    added_at: number;
    stack: string;
    [p: string]: any;
    constructor(value?: TAmauiErrorValue, Constructor?: IClass, options?: any);
}
```

#### AmauiTestError

```ts
class AmauiTestError extends AmauiError {
    constructor(value?: TAmauiErrorValue, ...args: any[]);
}
```

#### AssertError

```ts
class AssertError extends AmauiError {
    constructor(value?: TAmauiErrorValue, ...args: any[]);
}
```

#### AuthenticationError

```ts
class AuthenticationError extends AmauiError {
    constructor(value?: TAmauiErrorValue, ...args: any[]);
}
```

#### AuthorizationError

```ts
class AuthorizationError extends AmauiError {
    constructor(value?: TAmauiErrorValue, ...args: any[]);
}
```

#### ValidationError

```ts
class ValidationError extends AmauiError {
    constructor(value?: TAmauiErrorValue, ...args: any[]);
}
```

#### NotFoundError

```ts
class NotFoundError extends AmauiError {
    constructor(value?: TAmauiErrorValue, ...args: any[]);
}
```

#### PermissionError

```ts
class PermissionError extends AmauiError {
    constructor(value?: TAmauiErrorValue, ...args: any[]);
}
```

#### AmauiAmqpError

```ts
class AmauiAmqpError extends AmauiError {
    constructor(value?: TAmauiErrorValue, ...args: any[]);
}
```

#### AmauiAwsError

```ts
class AmauiAwsError extends AmauiError {
    constructor(value?: TAmauiErrorValue, ...args: any[]);
}
```

#### AmauiMongoError

```ts
class AmauiMongoError extends AmauiError {
    constructor(value?: TAmauiErrorValue, ...args: any[]);
}
```

#### ConnectionError

```ts
class ConnectionError extends AmauiError {
    constructor(value?: TAmauiErrorValue, ...args: any[]);
}
```

#### DeveloperError

```ts
class DeveloperError extends AmauiError {
    constructor(value?: TAmauiErrorValue, ...args: any[]);
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Errors: Start",
      "to": "/dev/errors/start"
    },
    "next": {
      "label": "Graph: Start",
      "to": "/dev/graph/start"
    }
  }
}~
