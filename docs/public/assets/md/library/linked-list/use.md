
# AmauiLinkedList

### Options

#### main

First AmauiNode in the list.

### Methods

#### Add

Adds an item to the list, by adding it to the last item's next value.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114);

amauiLinkedList.array;

// [114]
```

#### Add at start

Adds an item to the start of the list.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114);

amauiLinkedList.addAtStart(1114);

amauiLinkedList.array;

// [1114, 114]
```

#### Add at end

Alias for add, as they both add the value to the last item in the linked list.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114);

amauiLinkedList.addAtEnd(1114);

amauiLinkedList.array;

// [114, 1114]
```

#### Add after

Adds a value after an AmauiNode on the provided index.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(14).add(114);

amauiLinkedList.addAfter(1114, 0);

amauiLinkedList.array;

//  [14, 1114, 114]
```

#### Add before

Adds a value before an AmauiNode on the provided index.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(14).add(114);

amauiLinkedList.addBefore(1114, 1);

amauiLinkedList.array;

//  [14, 1114, 114]
```

#### Update

Updates an item based on its value, with a new provided value.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114).add(1114);

amauiLinkedList.array;

// [114, 1114]

amauiLinkedList.update(114, 1114);

amauiLinkedList.array;

// [1114, 1114]
```

#### Update at index

Updates an item based on its index, with a new provided value.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114).add(1114);

amauiLinkedList.array;

// [114, 1114]

amauiLinkedList.updateAtIndex(1114, 0);

amauiLinkedList.array;

// [1114, 1114]
```

#### Remove

Removes the first item it finds whose value equals the provided value.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114).add(1114);

amauiLinkedList.remove(1114);

amauiLinkedList.array;

// [114]
```

#### Remove first

Removes the first item in the linked list.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114).add(1114);

amauiLinkedList.removeFirst();

amauiLinkedList.array;

// [1114]
```

#### Remove last

Removes the last item in the linked list.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114).add(1114);

amauiLinkedList.removeLast();

amauiLinkedList.array;

// [114]
```

#### Remove at index

Removes the item at specified index in the linked list.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114).add(1114);

amauiLinkedList.removeAtIndex(1);

amauiLinkedList.array;

// [114]
```

#### Find

Finds an AmauiNode at a provided index.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114).add(1114);

amauiLinkedList.find(1).value;

// 1114
```

#### Find value

Finds the first AmauiNode whose value equals the provided value.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114).add(1114);

amauiLinkedList.findValue(114).value;

// 114
```

#### Search

Alias for the `findValue` method.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114).add(1114);

amauiLinkedList.search(114).value;

// 114
```

#### Index of

Returns the index of the first AmauiNode whose value equals the provided value.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114).add(1114);

amauiLinkedList.indexOf(1114);

// 1
```

#### Includes

True if linked list includes at least one AmauiNode whose value equals the provided value.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114).add(1114);

amauiLinkedList.includes(1114);

// true
```

#### array

Returns array of values as a representation of the linked list.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(14).add(114).add(1114);

amauiLinkedList.array;

// [14, 114, 1114]
```

#### map

Makes an array using `array` method and calls map method on it, with a provided method as the first argument.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(14).add(114).add(1114);

amauiLinkedList.map(item => item + 3);

// [17, 117, 1117]
```

#### forEach

Makes an array using `array` method and calls forEach method on it, with a provided method as the first argument.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(14).add(114).add(1114);

amauiLinkedList.forEach(item => console.log(item));

// 14
// 114
// 1114
```

#### clear

Resets the entire linked list into its initial empty value.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(14).add(114).add(1114);

amauiLinkedList.clear();

amauiLinkedList.array;

// []
```

### Properties

#### length

Number of items in the linked list.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114);

amauiLinkedList.length;

// 1
```

#### empty

True if there are no items in the linked list.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.empty;

// true
```

#### first

First item in the linked list.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114).add(1114);

amauiLinkedList.first.value;

// 114
```

#### last

Last item in the linked list.

```ts
const amauiLinkedList = new AmauiLinkedList();

amauiLinkedList.add(114).add(1114);

amauiLinkedList.last.value;

// 1114
```

### AmauiNode

#### Value

Any value.

#### Next

AmauiNode.

#### Previous

AmauiNode.

## API

#### IAmauiLinkedListNode

```ts
interface IAmauiLinkedListNode {
    value: any;
    previous?: IAmauiLinkedListNode;
    next?: IAmauiLinkedListNode;
}
```

#### AmauiNode

```ts
class AmauiNode {
    value: any;
    next?: IAmauiLinkedListNode;
    previous?: IAmauiLinkedListNode;
    constructor(value: any, next?: IAmauiLinkedListNode, previous?: IAmauiLinkedListNode);
}
```

#### AmauiLinkedList

```ts
default class AmauiLinkedList {
    main?: IAmauiLinkedListNode;
    length: number;
    constructor(main?: IAmauiLinkedListNode);
    get empty(): boolean;
    get first(): IAmauiLinkedListNode;
    get last(): IAmauiLinkedListNode;
    get array(): Array<any>;
    map(method: TMethod): Array<any>;
    forEach(method: TMethod): void;
    add(value: any): AmauiLinkedList;
    addAtStart(value: any): AmauiLinkedList;
    addAtEnd: (value: any) => AmauiLinkedList;
    addAfter(value: any, index: number): AmauiLinkedList;
    addBefore(value: any, index: number): AmauiLinkedList;
    update(previousValue: any, value: any): AmauiLinkedList;
    updateAtIndex(value: any, index: number): AmauiLinkedList;
    remove(value: any): AmauiLinkedList;
    removeFirst(): AmauiLinkedList;
    removeLast(): AmauiLinkedList;
    removeAtIndex(value: number): AmauiLinkedList;
    find(value: number): AmauiNode;
    findValue(value: any): AmauiNode;
    search: (value: any) => AmauiNode;
    indexOf(value: any): number;
    includes(value: any): boolean;
    clear(): AmauiLinkedList;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Linked list: Start",
      "to": "/dev/linked list/start"
    },
    "next": {
      "label": "Linked list: Start",
      "to": "/dev/linked list/start"
    }
  }
}~
