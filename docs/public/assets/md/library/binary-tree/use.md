
# AmauiBinaryTree

### AmauiNode

#### Properties

- value `number`
- left `AmauiNode`
- right `AmauiNode`

### Methods

#### Make

Creates an AmauiBinaryTree from an array.

```ts
new AmauiBinaryTree().make([4, 1, 7, 3, 5, 4, 7]);
```

#### Array

Returns the binary tree in form of an array of values.

You can use the first argument for different order type:
- preorder (default)
- inorder
- postorder

```ts
const amauiBinaryTree = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

amauiBinaryTree.array();

// [4, 1, 3, 7, 5]
```

#### Add

Adds a node.

```ts
const amauiBinaryTree = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

amauiBinaryTree.add(4);
amauiBinaryTree.add(14);
amauiBinaryTree.add(new AmauiNode(40));

amauiBinaryTree.array();

// [4, 1, 3, 7, 5, 14, 40]
```

#### Find

Finds a node.

```ts
const amauiBinaryTree = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

amauiBinaryTree.find(4);

// {
//     value: 4,
//     left: {
//         value: 1,
//         left: undefined,
//         right: {
//             value: 3
//         }
//     },
//     right: {
//         value: 7,
//         left: {
//             value: 5
//         },
//         right: undefined
//     }
// }
```

#### Remove

Removes a node.

```ts
const amauiBinaryTree = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

amauiBinaryTree.remove(1);
amauiBinaryTree.remove(5);

amauiBinaryTree.array();

// [4, 3, 7]
```

#### Remove node

Remove a value from any node. \
Unlike remove method that removes the value it finds within the root node of the entire amaui binary tree.

```ts
const amauiBinaryTree = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

amauiBinaryTree.removeNode(amauiBinaryTree.root, 3);
amauiBinaryTree.removeNode(amauiBinaryTree.root, 7);
amauiBinaryTree.removeNode(amauiBinaryTree.root, 5);

amauiBinaryTree.array();

// [4, 1]
```

### Util methods

#### make

Makes an Amaui Binary Tree from an array of values.

```ts
const amauiBinaryTree = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);
```

#### lowestCommonAncestor

Finds a lowest common ancestor for two values, for any node.

```ts
const amauiBinaryTree = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

AmauiBinaryTree.lowestCommonAncestor(1, 7, amauiBinaryTree.root);

// {
//     value: 4,
//     left: {
//         value: 1,
//         left: undefined,
//         right: {
//             value: 3
//         }
//     },
//     right: {
//         value: 7,
//         left: {
//             value: 5
//         },
//         right: undefined
//     }
// }
```

#### maxDepth

Returns max depth for a provided node.

```ts
const amauiBinaryTree = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

AmauiBinaryTree.maxDepth(amauiBinaryTree.root);

// 3
```

#### valid

Returns true if the binary tree is valid.

```ts
const amauiBinaryTree = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

AmauiBinaryTree.valid(amauiBinaryTree);

// true
```

#### preorder

Loops through all the AmauiNode values from a provided node, in preorder.

```ts
const amauiBinaryTree = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

const values = [];

AmauiBinaryTree.preorder(amauiBinaryTree.root, item => values.push(item.value));

values;

// [4, 1, 3, 7, 5]
```

#### inorder

Loops through all the AmauiNode values from a provided node, in inorder.

```ts
const amauiBinaryTree = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

const values = [];

AmauiBinaryTree.inorder(amauiBinaryTree.root, item => values.push(item.value));

values;

// [1, 3, 4, 5, 7]
```

#### postorder

Loops through all the AmauiNode values from a provided node, in postorder.

```ts
const amauiBinaryTree = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

const values = [];

AmauiBinaryTree.postorder(amauiBinaryTree.root, item => values.push(item.value));

values;

// [3, 1, 5, 7, 4]
```

#### min

Returns min AmauiNode for a provided node.

```ts
const amauiBinaryTree = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

AmauiBinaryTree.min(amauiBinaryTree.root);

// {
//     value: 1,
//     left: undefined,
//     right: {
//         value: 3
//     }
// }
```

#### max

Returns max AmauiNode for a provided node.

```ts
const amauiBinaryTree = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

AmauiBinaryTree.max(amauiBinaryTree.root);

// {
//     value: 7,
//     left: {
//         value: 5
//     },
//     right: undefined
// }
```

## API

#### TArrayVariant

```ts
type TArrayVariant = 'inorder' | 'preorder' | 'postorder';
```

#### IAmauiNode

```ts
interface IAmauiNode {
    value: any;
    left?: AmauiNode;
    right?: AmauiNode;
    [p: string]: any;
}
```

#### AmauiNode

```ts
class AmauiNode implements IAmauiNode {
    value: any;
    left?: AmauiNode;
    right?: AmauiNode;
    [p: string]: any;
    constructor(value: any, left?: AmauiNode, right?: AmauiNode);
}
```

#### IAmauiBinaryTree

```ts
interface IAmauiBinaryTree {
    root?: AmauiNode;
}
```

#### AmauiBinaryTree

```ts
class AmauiBinaryTree implements IAmauiBinaryTree {
    root: AmauiNode;
    static make(value: any[]): AmauiBinaryTree;
    static lowestCommonAncestor(value: AmauiNode | any, value1: AmauiNode | any, root: AmauiNode): AmauiNode | undefined;
    static maxDepth(amauiNode: AmauiNode): number;
    static valid(value: AmauiBinaryTree): boolean;
    static preorder(value: AmauiNode, method: TMethod): void;
    static inorder(value: AmauiNode, method: TMethod): void;
    static postorder(value: AmauiNode, method: TMethod): void;
    static min(value: AmauiNode): AmauiNode;
    static max(value: AmauiNode): AmauiNode;
    array(variant?: TArrayVariant): Array<any>;
    make(value: any[]): AmauiBinaryTree;
    add(value: AmauiNode | any): AmauiBinaryTree;
    find(value: any): AmauiNode | undefined;
    remove(value: any): void;
    removeNode(amauiNode: AmauiNode, value: any): AmauiNode | undefined;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Binary tree: Start",
      "to": "/library/binary-tree/start"
    },
    "next": {
      "label": "Cache: Start",
      "to": "/library/cache/start"
    }
  }
}~
