

### API

#### IAmauiMiddleware

```ts
interface IAmauiMiddleware {
    name: string;
    method: TMethod;
    parent: AmauiGroup;
    file?: string;
    responses?: Array<IAmauiResponse>;
}
```

#### AmauiMiddleware

```ts
class AmauiMiddleware implements IAmauiMiddleware {
    name: string;
    method: TMethod;
    parent: AmauiGroup;
    file?: string;
    responses: Array<IAmauiResponse>;
    constructor(name: string, method: TMethod);
}
```

