
# Amaui API

### Decorators

Use the decorators to easily organize your API endpoints, by enclosing them within classes, and just register every class in Routes method, where you also pass into your express app, and all routes, and their middlewares you defined will be easily made.

#### Routes

Every API route class has to implement `response` & `error` methods, that you can inherit from the Base class that implements those as well, as both methods are called depending if the API route method returns a response, or throws an error.

In those methods you can define your own logic how to handle responses, errors. You can find the API of those methods in the API part below.

Routes method takes in list of class definitions (within which you've used decorators below), and your express app, and methods will make all the routes with all their middlewares automatically.

```ts
import express from 'express';
import { Route, Method, IRouteClassInstance, Routes } from '@amaui/api';

class Base implements IRouteClassInstance {

  public response(req: express.Request, response: express.Response, options: { method: 'json' | 'send', type: 'application/json', }) { return ...; }

  public error(req: express.Request, error: Error) { return ...; }

}

// Add decorator to a class representing a route
@Route(
  '/a',
  method
)
class A extends Base {

  @Method(
    'get',
    '/a',
    method1
  )
  public a() { }

}

// Create an express app
const app = express();

// Register all classes as app routes
Routes([A], app);

// app routes:
// GET /a/a, middlewares: method, method1

// etc.
```

#### Method

You can use this general decorator, and provide a first argument about what http method it is.

```ts
@Route(
  '/a',
  middleware
)
class A extends Base {

  @Method(
    'get',
    '/a',
    middleware1
  )
  public a() { }

}
```

#### Get

Get http method, api endpoint.

```ts
@Route(
  '/a',
  middleware
)
class A extends Base {

  @Get(
    '/a',
    middleware1
  )
  public a() { }

}
```

#### Post

Post http method, api endpoint.

```ts
@Route(
  '/a',
  middleware
)
class A extends Base {

  @Post(
    '/a',
    middleware1
  )
  public a() { }

}
```

#### Put

Put http method, api endpoint.

```ts
@Route(
  '/a',
  middleware
)
class A extends Base {

  @Put(
    '/a',
    middleware1
  )
  public a() { }

}
```

#### Patch

Patch http method, api endpoint.

```ts
@Route(
  '/a',
  middleware
)
class A extends Base {

  @Patch(
    '/a',
    middleware1
  )
  public a() { }

}
```

#### Head

Head http method, api endpoint.

```ts
@Route(
  '/a',
  middleware
)
class A extends Base {

  @Head(
    '/a',
    middleware1
  )
  public a() { }

}
```

#### Options

Options http method, api endpoint.

```ts
@Route(
  '/a',
  middleware
)
class A extends Base {

  @Options(
    '/a',
    middleware1
  )
  public a() { }

}
```

#### Delete

Delete http method, api endpoint.

```ts
@Route(
  '/a',
  middleware
)
class A extends Base {

  @Delete(
    '/a',
    middleware1
  )
  public a() { }

}
```

## API

#### IResponseOptions

```ts
interface IResponseOptions {
    method: 'json' | 'send';
    type: 'application/json';
}
```

#### IRouteClassInstance

```ts
interface IRouteClassInstance {
    response: (req: express.Request, response: express.Response, options: IResponseOptions) => any;
    error: (req: express.Request, error: Error) => any;
    [p: string]: any;
}
```

#### IRouteClass

```ts
interface IRouteClass {
    new (...args: any[]): IRouteClassInstance;
}
```

#### IRoute

```ts
interface IRoute {
    method: 'string';
    route: 'string';
    middlewares: Array<express.RequestHandler>;
    property: 'string';
}
```

#### TRouteArgs

```ts
type TRouteArgs = Array<string | TMethod>;
```

#### Routes

```ts
function Routes(value: IRouteClass[], app: express.Application): void;
```

#### Route

```ts
function Route(...args: TRouteArgs): ClassDecorator;
```

#### Method

```ts
function Method(...args: TRouteArgs): MethodDecorator;
```

#### Get

```ts
function Get(...args: TRouteArgs): MethodDecorator;
```

#### Post

```ts
function Post(...args: TRouteArgs): MethodDecorator;
```

#### Put

```ts
function Put(...args: TRouteArgs): MethodDecorator;
```

#### Patch

```ts
function Patch(...args: TRouteArgs): MethodDecorator;
```

#### Head

```ts
function Head(...args: TRouteArgs): MethodDecorator;
```

#### Options

```ts
function Options(...args: TRouteArgs): MethodDecorator;
```

#### Delete

```ts
function Delete(...args: TRouteArgs): MethodDecorator;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "API: Start",
      "to": "/dev/api/start"
    },
    "next": {
      "label": "AWS: Start",
      "to": "/dev/aws/start"
    }
  }
}~
