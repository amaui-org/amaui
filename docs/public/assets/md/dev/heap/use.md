

### API

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
      "to": "/dev/heap/start"
    },
    "next": {
      "label": "Huffman Code: Start",
      "to": "/dev/huffman-code/start"
    }
  }
}~
