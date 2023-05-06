

### API

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
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}~
