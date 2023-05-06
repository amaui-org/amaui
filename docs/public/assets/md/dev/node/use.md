

### API

#### AmauiNode

```ts
class AmauiNode {
    static get file(): {
        add: (name: string, data: any) => Promise<boolean | Error>;
        update: (name: string, data: any) => Promise<boolean | Error>;
        get(path: string, native?: boolean): Promise<Buffer | string | Error>;
        remove(path: string): Promise<boolean | Error>;
    };
```

