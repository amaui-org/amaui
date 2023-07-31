
# AmauiHeap

### Options

#### variant

`min` or `max` heap, default is `min`.

### Methods

#### Variant min

Min heap.

```ts
const amauiHeap = new AmauiHeap('min').make([4, 1, 7, 3, 5, 4, 7]);

amauiHeap.array;

// [1, 3, 4, 4, 5, 7, 7]
```

#### Variant max

Max heap.

```ts
const amauiHeap = new AmauiHeap('max').make([4, 1, 7, 3, 5, 4, 7]);

amauiHeap.array;

// [7, 5, 7, 3, 1, 4, 4]
```

#### array

Returns an array representation of the heap.

```ts
const amauiHeap = new AmauiHeap().make([4, 1, 7, 3, 5, 4, 7]);

amauiHeap.array;

// [1, 3, 4, 4, 5, 7, 7]
```

#### first

Returns priority value in the heap, first value (root node).

```ts
const amauiHeap = new AmauiHeap().make([4, 1, 7, 3, 5, 4, 7]);

amauiHeap.first.value;

// 1
```

#### leafs

Returns all the leafs.

Leafs are nodes with no children.

```ts
const amauiHeap = new AmauiHeap().make([4, 1, 7, 3, 5, 4, 7]);

amauiHeap.leafs.map(item => item.value);

// [4, 5, 7, 7]
```

#### remove

Removes the priority (first) value, and remakes the entire heap tree, and puts new priority value as a root node.

```ts
const amauiHeap = AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]);

amauiHeap.array;

// [1, 3, 4, 4, 5, 7, 7]

amauiHeap.remove.value;

amauiHeap.array;

// 1
// [3, 4, 4, 7, 5, 7]
```

#### add

Adds a new value (node) to the heap graph, and it remakes the entire heap starting from root to properly add the new value.

```ts
const amauiHeap = AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]);

amauiHeap.array;

// [1, 3, 4, 4, 5, 7, 7]

amauiHeap.add(4);

amauiHeap.array;

// [1, 3, 4, 4, 5, 7, 7, 4]
```

#### make

Makes a heap graph, from array of values.

```ts
const amauiHeap = new AmauiHeap().make([4, 1, 7, 3, 5, 4, 7]);

amauiHeap.array;

// [1, 3, 4, 4, 5, 7, 7]
```

#### forEach

It loops through the entire heap array of values, and for each node returns all the mentioned properties in the `type TMethodForEach`.

```ts
const amauiHeap = AmauiHeap.make([4, 1, 7, 3, 5, 4, 7]);

amauiHeap.forEach((value, index, parent, left, right, isPriority, isLeaf, isLeft, isRight) => { });
```

### Util methods

#### min

Min heap.

```ts
const amauiHeap = AmauiHeap.min.make([4, 1, 7, 3, 5, 4, 7]);

amauiHeap.array;

// [1, 3, 4, 4, 5, 7, 7]
```

#### max

Max heap.

```ts
const amauiHeap = AmauiHeap.max.make([4, 1, 7, 3, 5, 4, 7]);

amauiHeap.array;

// [7, 5, 7, 3, 1, 4, 4]
```

#### make

##### min

Min heap.

```ts
const amauiHeap = AmauiHeap.make([4, 1, 7, 3, 5, 4, 7], 'min');

amauiHeap.array;

// [1, 3, 4, 4, 5, 7, 7]
```

##### max

Max heap.

```ts
const amauiHeap = AmauiHeap.make([4, 1, 7, 3, 5, 4, 7], 'max');

amauiHeap.array;

// [7, 5, 7, 3, 1, 4, 4]
```

#### left

Returns the index for a left child of a provided index of a node.

```ts
AmauiHeap.left(1);

// 3
```

#### right

Returns the index for a right child of a provided index of a node.

```ts
AmauiHeap.right(1);

// 4
```

#### parent

Returns the index for a parent node of a provided index of a node.

```ts
AmauiHeap.parent(4);

// 1
```

#### isPriority

Returns true if index is a priority node index.

```ts
AmauiHeap.isPriority(0);

// true
```

#### isLeft

Returns true if index is a left node index.

```ts
AmauiHeap.isLeft(1);

// true
```

#### isRight

Returns true if index is a right node index.

```ts
AmauiHeap.isRight(4);

// true
```

#### isLeaf

Returns true if index is a leaf node index.

```ts
AmauiHeap.isLeaf(4, [1, 2, 3, 4, 5]);

// true
```

### AmauiNode

#### value

Value of the node.

## API

#### IAmauiNode

```ts
interface IAmauiNode {
    value?: any;
    [p: string]: any;
}
```

#### AmauiNode

```ts
class AmauiNode implements IAmauiNode {
    value?: any;
    [p: string]: any;
    constructor(value?: any);
}
```

#### TVariant

```ts
type TVariant = 'min' | 'max';
```

#### TMethodForEach

```ts
type TMethodForEach = (value: AmauiNode, index: number, parent: AmauiNode, left: AmauiNode, right: AmauiNode, isPriority: boolean, isLeaf: boolean, isLeft: boolean, isRight: boolean) => any;
```

#### AmauiHeap

```ts
class AmauiHeap {
    variant: TVariant;
    values: Array<AmauiNode>;
    static get min(): AmauiHeap;
    static get max(): AmauiHeap;
    static make(value: any[], variant?: TVariant): AmauiHeap;
    static left(index: number): number;
    static right(index: number): number;
    static parent(index: number): number;
    static isPriority(index: number): boolean;
    static isLeft(index: number): boolean;
    static isRight(index: number): boolean;
    static isLeaf(index: number, values: Array<any>): boolean;
    constructor(variant?: TVariant);
    get array(): any[];
    get first(): AmauiNode;
    get leafs(): Array<AmauiNode>;
    get remove(): AmauiNode;
    add(value: AmauiNode | any): AmauiHeap;
    swap(index: number, index1: number): AmauiHeap;
    make(value: Array<any>): AmauiHeap;
    forEach(method: TMethodForEach): void;
    heapifyUp(index_?: number): void;
    heapifyDown(index_?: number): void;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Heap: Start",
      "to": "/library/heap/start"
    },
    "next": {
      "label": "Huffman code: Start",
      "to": "/library/huffman-code/start"
    }
  }
}~
