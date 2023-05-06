

### API

#### TAmauiStackValue

```ts
type TAmauiStackValue = Array<any>;
```

#### AmauiStack

```ts
default class AmauiStack {
    value: TAmauiStackValue;
    limit: number;
    constructor(value: TAmauiStackValue, limit: number);
    get length(): number;
    get first(): any;
    get peak(): any;
    get empty(): boolean;
    get full(): boolean;
    push(...values: TAmauiStackValue): boolean;
    pop(): any;
    clear(): AmauiStack;
}
```

