

### API

#### IOptions

```ts
interface IOptions {
    namespace?: string;
    namespace_separator?: string;
}
```

#### AmauiCookie

```ts
class AmauiCookie {
    options: IOptions;
    removeNotAllowed: string[];
    constructor(options?: IOptions);
    get namespace(): string;
    static get cookie(): string;
    static get clear(): void;
    get properties(): Array<string>;
    get values(): Array<any>;
    get items(): Record<string, any>;
    get clear(): void;
    get(name: string): any;
    has(name: string): any;
    add(name_: string, value_: any, days?: number, path?: string): void;
    update(...args: [string, any, number, string]): void;
    remove(name: string, path?: string): void;
    private property;
    private propertyOriginal;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Cookie: Start",
      "to": "/dev/cookie/start"
    },
    "next": {
      "label": "Date: Start",
      "to": "/dev/date/start"
    }
  }
}~
