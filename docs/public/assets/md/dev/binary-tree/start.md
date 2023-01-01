
### Add

```bash
// yarn
yarn add @amaui/binary-tree

// npm
npm install @amaui/binary-tree
```

### Use cases
- Min/max heaps
- Huffman coding, data compression
- Machine learning, making decisions
- etc.

### Use

```javascript
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
      "label": "Algorithms: Start",
      "to": "/dev/algorithms/start"
    },
    "next": {
      "label": "Binary Tree: Use",
      "to": "/dev/binary-tree/use"
    }
  }
}~
