

### API

#### IAmauiTo

```ts
interface IAmauiTo {
    name: string;
    method: TMethod;
    parent: AmauiGroup;
    level: number;
    file?: string;
    index: number;
    mainIndex: number;
    response?: IAmauiResponse;
}
```

#### AmauiTo

```ts
class AmauiTo implements IAmauiTo {
    name: string;
    method: TMethod;
    parent: AmauiGroup;
    index: number;
    mainIndex: number;
    level: number;
    file?: string;
    response: IAmauiResponse;
    constructor(name: string, method: TMethod);
}
```

