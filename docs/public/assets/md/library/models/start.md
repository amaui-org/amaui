
# amaui models

Useful classes, methods used as a default in other packages like `@amaui/mongo`.

### Add

```sh
yarn add @amaui/models
```

### Use

```ts
import express from 'express';

import { Query, Response } from '@amaui/models';

async function route(req: express.Request, res: express.Response) {
  const query = Query.fromRequest(req);

  const response = await todoCollection.searchMany(query);

  return res.status(200).json(Response.fromQuery(response));
}

// etc.
```

### Dev

Install

```sh
yarn
```

Test

```sh
yarn test
```

### Prod

Build

```sh
yarn build
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Meta: Start",
      "to": "/library/meta/start"
    },
    "next": {
      "label": "Models: base",
      "to": "/library/models/use/base"
    }
  }
}~
