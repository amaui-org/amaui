
# amaui amqp

Utils for easier using of the amqplib, ie. rabbitmq, queue messaging service.

### Add

```bash
yarn add @amaui/amqp
```

### Use

```ts
import AmauiAmqp from '@amaui/amqp';
// Make if you wanna a config file and
// inside of it add all the process.env related props
import Config from './config';

// Make a new amqp instance
const amauiAmqp = new AmauiAmqp({
  uri: Config.amqp.rabbitmq.uri,
  queues: Config.amqp.rabbitmq.queues,
  exchanges: Config.amqp.rabbitmq.exchanges,
});

// Await for a connection
await amauiAmqp.connection;

// Subscribe to a queue
await amauiAmqp.subscribe('a', async message => {
  ...
});

// Send to a queue
await amauiAmqp.send('a', { a: 1114 });

// Check a queue
await amauiAmqp.checkQueue();

// { queue: 'a', messageCount: 1, etc. }
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
      "label": "Algorithms: Start",
      "to": "/dev/algorithms/start"
    },
    "next": {
      "label": "AMQP: Use",
      "to": "/dev/amqp/use"
    }
  }
}~
