

### API

#### TAmauiQueueValue

```ts
type TAmauiQueueValue = Array<any>;
```

#### AmauiQueue

```ts
default class AmauiQueue {
    value: TAmauiQueueValue;
    limit: number;
    constructor(value: TAmauiQueueValue, limit: number);
    get length(): number;
    get first(): any;
    get peak(): any;
    get empty(): boolean;
    get full(): boolean;
    push(...values: TAmauiQueueValue): boolean;
    pop(): any;
    clear(): AmauiQueue;
}
```

