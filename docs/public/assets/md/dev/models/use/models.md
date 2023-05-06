

### API

#### IClass

```ts
interface IClass {
    new (...args: any[]): any;
    [p: string]: any;
}
```

#### TMethod

```ts
type TMethod = (...args: any[]) => any;
```

#### TObject

```ts
type TObject = Record<string, any>;
```

#### IQueryKeys

```ts
interface IQueryKeys {
    allowed: any[];
}
```

