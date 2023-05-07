

### API

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
      "label": "Linked List: Start",
      "to": "/dev/linked-list/start"
    },
    "next": {
      "label": "Log: Start",
      "to": "/dev/log/start"
    }
  }
}~
