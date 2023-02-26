
### Add

```sh
yarn add @amaui/models
```

### Use

```javascript
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
      "to": "/dev/meta/start"
    },
    "next": {
      "label": "Models: Use",
      "to": "/dev/models/use"
    }
  }
}~
