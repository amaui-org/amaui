

### API

#### IBase

```ts
interface IBase {
    clean?(): void;
    [p: string]: any;
}
```

#### Base

```ts
class Base implements IBase {
    [p: string]: any;
    clean?(): void;
}
```

