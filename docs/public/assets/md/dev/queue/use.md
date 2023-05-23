
# AmauiQueue

### Options

#### value

Initial queue value.

#### limit

Limit to how many values can be in the queue.

### Methods

#### push

Adds new value into the queue.

```ts
const queue = new AmauiQueue();

queue.push(1114);

queue.length;

// 1
```

#### pop

Remove last added item from the queue, and returns it.

```ts
const queue = new AmauiQueue([1114]);

queue.push(114);

queue.pop();

queue.length;

// 1114
// 1
```

#### clear

Makes the value [], clears the entire queue.

```ts
const queue = new AmauiQueue([1114]);

queue.push(114);

queue.clear();

queue.length;

// 0
```

### Properties

#### value

Value of the queue (entire queue), as an array of items.

#### first

Returns the first item in the queue.

```ts
const queue = new AmauiQueue([1114]);

queue.push(114);

queue.first;

// 1114
```

#### peak

Alias for the first property.

#### length

Number of items in the queue.

#### empty

True if queue has no items.

#### full

True if queue number of items is equal to the limit.

## API

#### TAmauiQueueValue

```ts
type TAmauiQueueValue = Array<any>;
```

#### AmauiQueue

```ts
default class AmauiQueue {
    value: TAmauiQueueValue;
    limit: number;
    constructor(value: TAmauiQueueValue, limit: number);
    get length(): number;
    get first(): any;
    get peak(): any;
    get empty(): boolean;
    get full(): boolean;
    push(...values: TAmauiQueueValue): boolean;
    pop(): any;
    clear(): AmauiQueue;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Queue: Start",
      "to": "/dev/queue/start"
    },
    "next": {
      "label": "Request: Start",
      "to": "/dev/request/start"
    }
  }
}~
