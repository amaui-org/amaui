
### Add

```bash
yarn add @amaui/queue
```

### Use cases
- First come, first serve, use cases
- CPU Scheduling
- Memory management
- Website requests handling on the server
- Routers and switches in networking
- etc.

### Use

```javascript
import AmauiQueue from '@amaui/queue';

// Make a new queue instance
const amauiQueue = new AmauiQueue();

// Add values
amauiQueue.push(1, 2, 3, 4);

amauiQueue.first;
// 1

amauiQueue.length;
// 4

const value = amauiQueue.pop();

value;
// 1

amauiQueue.first;
// 2

amauiQueue.length;
// 3
```

### Dev

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
      "label": "Node: Start",
      "to": "/dev/node/start"
    },
    "next": {
      "label": "Queue: Use",
      "to": "/dev/queue/use"
    }
  }
}~
