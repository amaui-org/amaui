### Use

Only able to use server side, so without interactive example.

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

  // Await for a channel
  await amauiAmqp.channel;

  // Send to a queue
  await amauiAmqp.send('a', 'a');

  // Check a queue
  await amauiAmqp.checkQueue();

  // { queue: 'a', messageCount: 1, etc.
```


## API

#### IExchange

```ts
interface IExchange {
    name: string;
    type: string;
}
```

#### IOptions

```ts
interface IOptions {
    uri?: string;
    queues?: Array<string>;
    exchanges?: Array<IExchange>;
}
```

#### optionsDefault

```ts
const optionsDefault: IOptions;
```

#### AmauiAmqp

```ts
class AmauiAmqp {
    connection_: amqp.Connection;
    channel_: amqp.Channel;
    connected: boolean;
    private amalog;
    private options_;
    subscription: AmauiSubscription;
    queues: Record<string, any>;
    exchanges: Record<string, any>;
    sendOptions: amqp.Options.Publish;
    exchangeOptions: amqp.Options.Publish;
    get options(): IOptions;
    set options(options: IOptions);
    constructor(options?: IOptions);
    get(queue: string, options?: amqp.Options.Get): Promise<amqp.GetMessage | false>;
    ack(message: amqp.Message, allUpTo?: boolean): Promise<void>;
    consume(queue: string, method: (msg: amqp.ConsumeMessage) => any, options?: amqp.Options.Consume): Promise<amqp.Replies.Consume>;
    send(queue: string, data?: any, options?: amqp.Options.Publish): Promise<boolean>;
    publish(exchange: string, routingKey: string, data?: any, options?: amqp.Options.Publish): Promise<boolean>;
    bindQueue(queue: string, exchange: string, routingKey: string): Promise<amqp.Replies.Empty>;
    cancel(consumerTag: string): Promise<amqp.Replies.Empty>;
    get connection(): Promise<amqp.Connection>;
    get channel(): Promise<amqp.Channel>;
    private createChannel;
    assertQueue(name?: string, options?: amqp.Options.AssertQueue): Promise<amqp.Replies.AssertQueue>;
    assertExchange(exchange: IExchange, options?: amqp.Options.AssertExchange): Promise<amqp.Replies.AssertExchange>;
    assertQueues(): Promise<any>;
    assertExhanges(): Promise<any>;
    checkQueue(name: string): Promise<amqp.Replies.AssertQueue>;
    checkExchange(name: string): Promise<amqp.Replies.Empty>;
    removeQueue(name: string, options?: amqp.Options.DeleteQueue): Promise<amqp.Replies.DeleteQueue>;
    removeExchange(name: string, options?: amqp.Options.DeleteQueue): Promise<amqp.Options.DeleteExchange>;
    get disconnect(): Promise<void>;
    private connect;
    reset(): Promise<void>;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Start",
      "to": "/dev/api/start"
    }
  }
}~
