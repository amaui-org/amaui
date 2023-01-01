
### Add

```sh
// yarn
yarn add @amaui/mongo

// npm
npm install @amaui/mongo
```

### Use

```javascript
import { Mongo, BaseCollection } from '@amaui/mongo';
import { Query } from '@amaui/models';

// Make a new mongo instance
const mongo = new Mongo({
  uri: process.env.db.mongo.uri,
  name: process.env.db.mongo.name,
});

// Make a collection class
class ACollection extends BaseCollection {

  public constructor() {
    super('a', mongo);
  }

}

const aCollection = new ACollection();

// Add
const value = await aCollection.addOne({ _id: new ObjectId(), a: 'a' });

// Find one
const item = await aCollection.findOne(new Query({
  queries: {
    find: { a: value._id },
  },
}));

// { _id: ObjectId('407f191e810c19729de860ea'), a: 'a' }

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
      "to": "/dev/models/start"
    },
    "next": {
      "label": "Mongo: Use",
      "to": "/dev/mongo/use"
    }
  }
}~
