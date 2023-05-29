
# amaui log

Logging utils for front end & back end.

Very useful, especially for the back end logs, where you can add much more granularity to the lines that are being logged. \
Add prefix to your log lines, to easier find when some log lines happened when debugging using your server log history.

### Add

```sh
yarn add @amaui/log
```

### Use

```ts
import AmauiLog from '@amaui/log';

// Make a new log instance
// with an optional options value
const amauiLog = new AmauiLog({
  arguments: {
    pre: [
      'Mongo'
    ]
  }
});

// Log any array of values
amauiLog.info('Collection: A', 'Response: 40ms');

// Output

  // 04-04-2014 04:04:14.141 (info):

  // Mongo
  // Collection: A
  // Response: 40ms

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
      "label": "Linked List: Start",
      "to": "/dev/linked-list/start"
    },
    "next": {
      "label": "Log: Use",
      "to": "/dev/log/use"
    }
  }
}~
