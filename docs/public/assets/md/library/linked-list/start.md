
# amaui linked list

Linked list data type & its methods.

### Use cases
- Implementation of stacks
- Efficient removal of elements
- Reduced memory fragmentation
- etc.

### Add

```sh
yarn add @amaui/linked-list
```

### Use

```ts
import AmauiLinkedList from '@amaui/linked-list';

// Make a new linked list instance
const amauiLinkedList = new AmauiLinkedList();

// Add values
amauiLinkedList.add(1).add(4);

amauiLinkedList.first;
// 1

amauiLinkedList.last;
// 4

const value = amauiLinkedList.search(4);
// AmauiNode { value: 4, ... }

amauiLinkedList.remove(1);

amauiLinkedList.first;
// 4

amauiLinkedList.length;
// 1
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
      "label": "Huffman Code: Start",
      "to": "/library/huffman-code/start"
    },
    "next": {
      "label": "Linked List: Use",
      "to": "/library/linked-list/use"
    }
  }
}~
