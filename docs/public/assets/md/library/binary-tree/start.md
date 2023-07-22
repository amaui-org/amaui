
# amaui binary tree

Binary tree data type & its methods.

### Use cases
- Min/max heaps
- Huffman coding, data compression
- Machine learning, making decisions
- etc.

### Add

```bash
yarn add @amaui/binary-tree
```

### Use

```ts
import { AmauiBinaryTree } from '@amaui/binary-tree';

// Make a new binary tree instance
const amauiBinaryTree = new AmauiBinaryTree();

// Add a amaui node / value
[4, 2, 7, 14, 1, 3, 5].map(value => amauiBinaryTree.add(value));

// or use a make method or a static method
amauiBinaryTree.make([4, 2, 7, 14, 1, 3, 5]);

// Binary tree
      4
     /  \
    /    \
   2      7
  / \    / \
 1   3  5   14

// Remove any value
amauiBinaryTree.remove(2);

// Binary tree
      4
     /  \
    /    \
   3      7
  /      / \
 1      5   14
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
      "label": "AWS: Start",
      "to": "/dev/aws/start"
    },
    "next": {
      "label": "Binary Tree: Use",
      "to": "/dev/binary-tree/use"
    }
  }
}~
