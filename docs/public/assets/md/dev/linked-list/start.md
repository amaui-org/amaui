
### Add

```sh
// yarn
yarn add @amaui/linked-list

// npm
npm install @amaui/linked-list
```

### Use cases
- Implementation of stacks
- Efficient removal of elements
- Reduced memory fragmentation
- etc.

### Use

```javascript
import AmauiLinkedList from '@amaui/linked-list';

// Make a new linked list instance
const amauiLinkedList = new AmauiLinkedList();

// Add values
amauiLinkedList.add(1).add(4);

amauiStack.first;
// 1

amauiStack.last;
// 4

const value = amauiLinkedList.search(4);
// AmauiNode { value: 4, ... }

amauiLinkedList.remove(1);

amauiStack.first;
// 4

amauiStack.length;
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
      "to": "/dev/huffman-code/start"
    },
    "next": {
      "label": "Linked List: Use",
      "to": "/dev/linked-list/use"
    }
  }
}~
