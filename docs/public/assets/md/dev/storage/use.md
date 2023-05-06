

### API

#### TVariant

```ts
type TVariant = 'local' | 'session';
```

#### IOptions

```ts
interface IOptions {
    variant?: TVariant;
    storage?: Storage;
    namespace?: string;
    namespace_separator?: string;
}
```

#### AmauiStorage

```ts
class AmauiStorage {
    options: IOptions;
    storage: Storage;
    removeNotAllowed: string[];
    constructor(options?: IOptions);
    init(): void;
    static clear(variant: TVariant): void;
    get namespace(): string;
    get properties(): Array<string>;
    get values(): Array<string>;
    get items(): Record<string, any>;
    get clear(): void;
    get(name: string): any;
    has(name: string): boolean;
    add(name: string, value: any): void;
    update(...args: [string, any]): void;
    remove(name: string): void;
    private property;
    private propertyOriginal;
}
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}~
