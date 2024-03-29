
# amaui mongo

Utils for easier using of `mongodb` library.

### Add

```sh
yarn add @amaui/mongo
```

<br />
Add `mongodb` peer dependency.

```bash
yarn add mongodb
```

### Use

```ts
import { Mongo, BaseCollection } from '@amaui/mongo';
// Make if you wanna a config file and
// inside of it add all the process.env related props
import Config from './config';

// Make a new mongo instance
const mongo = new Mongo({
  uri: Config.db.mongo.uri,
  name: Config.db.mongo.name,
});

await mongo.connection;

// Make a collection class
class TodoCollection extends BaseCollection {

  public constructor() {
    super('todos', mongo);
  }

}

const todoCollection = new TodoCollection();

// Add
const todoCreated = await todoCollection.addOne({
  name: 'todo',
  description: 'description'
});

// Find one
const todo = await aCollection.findOne({
  _id: todoCreated._id
});

todo;

// {
//   _id: ObjectId('407f191e810c19729de860ea'),
//   name: 'todo',
//   description: 'description',
//   added_at: 1777044477
// }

// etc.
```

### Dev

#### One time local setup

Install docker and docker-compose
- https://docs.docker.com/get-docker
- https://docs.docker.com/compose/install

Make docker containers

```sh
yarn docker
```

Make mongoDB replica set

```sh
yarn make-replicaset
```

(mac) Add lines below to */private/etc/hosts*

```
127.0.0.1   mongo1
127.0.0.1   mongo2
127.0.0.1   mongo3
127.0.0.1   mongo1-test
127.0.0.1   mongo2-test
127.0.0.1   mongo3-test
```

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
      "label": "Models: Start",
      "to": "/library/models/start"
    },
    "next": {
      "label": "Mongo: AmauiMongo",
      "to": "/library/mongo/use/AmauiMongo"
    }
  }
}~
