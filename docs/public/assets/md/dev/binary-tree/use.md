

### API

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
      "label": "Binary Tree: Start",
      "to": "/dev/binary-tree/start"
    },
    "next": {
      "label": "Cache: Start",
      "to": "/dev/cache/start"
    }
  }
}~
