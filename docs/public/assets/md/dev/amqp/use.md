
### Use

Only able to use server side, so without interactive example.

```javascript
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

  // Await for a channel
  await amauiAmqp.channel;

  // Send to a queue
  await amauiAmqp.send('a', 'a');

  // Check a queue
  await amauiAmqp.checkQueue();

  // { queue: 'a', messageCount: 1, etc. }
```
