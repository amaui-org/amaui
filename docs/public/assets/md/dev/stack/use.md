
# AmauiStack

### Options

#### value

Initial stack value.

#### limit

Limit to how many values can be in the stack.

### Methods

#### push

Adds new value into the stack.

```ts
const stack = new AmauiStack();

stack.push(1114);

stack.length;

// 1
```

#### pop

Remove last added item from the stack, and returns it.

```ts
const stack = new AmauiStack([1114]);

stack.push(114);

stack.pop();

stack.length;

// 114
// 1
```

#### clear

Makes the value [], clears the entire stack.

```ts
const stack = new AmauiStack([1114]);

stack.push(114);

stack.clear();

stack.length;

// 0
```

### Properties

#### value

Value of the stack (entire stack), as an array of items.

#### first

Returns the first item in the stack.

```ts
const stack = new AmauiStack([1114]);

stack.push(114);

stack.first;

// 114
```

#### peak

Alias for the first property.

#### length

Number of items in the stack.

#### empty

True if stack has no items.

#### full

True if stack number of items is equal to the limit.

## API

#### TAmauiStackValue

```ts
type TAmauiStackValue = Array<any>;
```

#### AmauiStack

```ts
default class AmauiStack {
    value: TAmauiStackValue;
    limit: number;
    constructor(value: TAmauiStackValue, limit: number);
    get length(): number;
    get first(): any;
    get peak(): any;
    get empty(): boolean;
    get full(): boolean;
    push(...values: TAmauiStackValue): boolean;
    pop(): any;
    clear(): AmauiStack;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Stack: Start",
      "to": "/dev/stack/start"
    },
    "next": {
      "label": "Storage: Start",
      "to": "/dev/storage/start"
    }
  }
}~
