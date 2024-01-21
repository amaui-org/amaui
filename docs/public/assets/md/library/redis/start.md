
# amaui redis

Utils for easier using of the redis, memory database.

### Add

```bash
yarn add @amaui/redis
```

<br />
Add `redis` peer dependency.

```bash
yarn add redis
```

### Use

```ts
import AmauiRedis from '@amaui/redis';
// Make if you wanna a config file and
// inside of it add all the process.env related props
import Config from './config';

// Make a new redis instance
const amauiRedis = new AmauiRedis({
  uri: Config.redis.uri
});

// Await for a connection
await amauiRedis.connection;

// Send to a queue
await amauiRedis.publish('a', 'a'); 
```

### Dev

#### One time local setup

Install docker and docker-compose

- https://docs.docker.com/get-docker
- https://docs.docker.com/compose/install

Make docker containers

```bash
yarn docker
```

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
      "label": "Queue: Start",
      "to": "/library/queue/start"
    },
    "next": {
      "label": "Redis: Use",
      "to": "/library/redis/use"
    }
  }
}~
