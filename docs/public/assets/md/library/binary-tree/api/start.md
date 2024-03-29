
### Add

```bash
yarn add @amaui/api
```

### Use

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

### Dev

Install

```bash
yarn
```

Test

```bash
yarn test
```

### Prod

Build

```bash
yarn build
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/library/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/library/api/use"
    }
  }
}~
