
# AmauiRedis

### Options

#### uri

Redis connection uri.

### Connection

#### connection

Make a connection.

```ts
const amauiRedis = new AmauiRedis(options);

// Connect
await amauiRedis.connection;
```

#### client

Get a client.

```ts
const amauiRedis = new AmauiRedis(options);

// Client
await amauiRedis.client;
```

#### disconnect

Closes the connection to the service.

```ts
const amauiRedis = new AmauiRedis(options);

// Connect
await amauiRedis.connection;

// Disconnect
await amauiRedis.disconnect;
``` 

### Methods 

#### set 

Sets a value 

```ts
const amauiRedis = new AmauiRedis(options);

// Connect
await amauiRedis.connection;

const value = await amauiRedis.set('a', 'a14');
```

#### get 

Gets a value 

```ts
const amauiRedis = new AmauiRedis(options);

// Connect
await amauiRedis.connection;

const value = await amauiRedis.get('a'); 

value; 
// a14 
```

#### publish 

Publishes a value to a channel 

```ts
const amauiRedis = new AmauiRedis(options);

// Connect
await amauiRedis.connection;

await amauiRedis.publish('a', { a: 14 });
```

#### subscribe  

Subscribes a method for receiving messages from a 1 or more channels 

```ts
const amauiRedis = new AmauiRedis(options);

// Connect
await amauiRedis.connection;

await amauiRedis.subscribe('a', message => {
  console.log('Received a message:', message);
});

await amauiRedis.publish('a', { a: 14 });

// Received a message: { a: 14 }
```

### Other

#### reset

Removes all queues, exchanges mentioned in the options, and emits a `reset` subscription event.

```ts
const amauiRedis = new AmauiRedis(options);

// Connect
await amauiRedis.connection;

// Reset
await amauiRedis.reset();
```

#### subscriptions

Using `@amaui/subscription` library, provides `subscription` property, where you'll receive following events:
- `connected` on connect success.
- `connect:error` on connect error.
- `disconnected` on disconnect success.
- `disconnect:error` on disconnect error.
- `reset` on reset success.


## API

#### IMessageDataOptions

```ts
interface IMessageDataOptions {
    parse?: boolean;
}
```

#### IOptions

```ts
interface IOptions {
    uri?: string;
}
```

#### optionsDefault

```ts
const optionsDefault: IOptions;
```

#### AmauiRedis

```ts
class AmauiAmqp {
    client_: IRedisClient;
    connected: boolean;
    private amalog;
    private options_;
    subscription: AmauiSubscription<any>;
    get options(): IOptions;
    set options(options: IOptions);
    constructor(options?: IOptions);
    get(key: string, options?: {
        parse: boolean;
    }): Promise<any>;
    set(key: string, value: any): Promise<any>;
    subscribe(channels: string | string[], method: (message: string) => any, bufferMode?: boolean): Promise<void>;
    unsubscribe(channels: string | string[], method: (message: string) => any, bufferMode?: boolean): Promise<void>;
    messageData(message: string, options?: IMessageDataOptions): any;
    publish(channel: string, data?: any, options?: {
        serialize: boolean;
    }): Promise<any>;
    get client(): Promise<IRedisClient>;
    get disconnect(): Promise<void>;
    connect(): Promise<IRedisClient | undefined>;
    reset(): Promise<any>;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Redis: Start",
      "to": "/library/redis/start"
    },
    "next": {
      "label": "Request: Start",
      "to": "/library/request/start"
    }
  }
}~
