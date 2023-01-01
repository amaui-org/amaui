
### Add

```bash
// yarn
yarn add @amaui/amqp

// npm
npm install @amaui/amqp
```

### Use

```javascript
import AmauiAmqp from '@amaui/amqp';

// Make a new amqp instance
const amauiAmqp = new AmauiAmqp({
  uri: process.env.amqp.rabbitmq.uri,
  queues: process.env.amqp.rabbitmq.queues,
  exchanges: process.env.amqp.rabbitmq.exchanges,
});

// Await for a channel
await amauiAmqp.channel;

// Send to a queue
await amauiAmqp.send('a', 'a');

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
      "label": "Icons Material React: Start",
      "to": "/dev/icons-material-react/start"
    },
    "next": {
      "label": "AMQP: Use",
      "to": "/dev/amqp/use"
    }
  }
}~
