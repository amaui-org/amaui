

### API

#### ICacheItem

```ts
interface ICacheItem {
    value: any;
    added_at?: number;
    updated_at?: number;
}
```

#### IOptionsValue

```ts
interface IOptionsValue {
    copy?: boolean;
}
```

#### IOptionsAdd

```ts
interface IOptionsAdd {
    override?: boolean;
}
```

#### IOptions

```ts
interface IOptions {
    value?: IOptionsValue;
    add?: IOptionsAdd;
}
```

#### AmauiCache

```ts
class AmauiCache {
    static caches: Record<string, ICacheItem>;
    private static options_;
    static get options(): IOptions;
    static set options(value: IOptions);
    static add(value: any, ...args: any[]): void;
    static update(value: any, ...args: any[]): any | undefined;
    static get(...args: any[]): undefined | any;
    static has(...args: any[]): boolean;
    static remove(...args: any[]): void;
    static reset(): void;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Cache: Start",
      "to": "/dev/cache/start"
    },
    "next": {
      "label": "Cookie: Start",
      "to": "/dev/cookie/start"
    }
  }
}~
