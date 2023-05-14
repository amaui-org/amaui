

## API

#### TVariant

```ts
type TVariant = 'log' | 'debug' | 'info' | 'warn' | 'error' | 'important';
```

#### variantNames

```ts
const variantNames: Array<TVariant>;
```

#### IAmauiLogVariantColor

```ts
interface IAmauiLogVariantColor {
    browser: string;
    server: string;
}
```

#### IAmauiLogVariantPre

```ts
interface IAmauiLogVariantPre {
    subscription: AmauiSubscription;
}
```

#### IAmauiLogVariantPost

```ts
interface IAmauiLogVariantPost {
    subscription: AmauiSubscription;
}
```

#### IAmauiLogVariant

```ts
interface IAmauiLogVariant {
    name: 'log' | TVariant;
    prefix?: any;
    sufix?: any;
    color?: IAmauiLogVariantColor;
    pre?: IAmauiLogVariantPre;
    post?: IAmauiLogVariantPost;
}
```

#### IAmauiLogVariants

```ts
type IAmauiLogVariants = {
    [p in TVariant]?: IAmauiLogVariant;
};
```

#### IAmauiLogOptionsLogPadding

```ts
interface IAmauiLogOptionsLogPadding {
    top?: boolean;
    bottom?: boolean;
}
```

#### IAmauiLogOptionsLog

```ts
interface IAmauiLogOptionsLog {
    archive?: boolean;
    enabled?: boolean;
    native?: boolean;
    variants?: Array<TVariant>;
    padding?: IAmauiLogOptionsLogPadding;
}
```

#### IAmauiLogOptionsArguments

```ts
interface IAmauiLogOptionsArguments {
    pre?: any[];
    post?: any[];
}
```

#### IAmauiLogOptionsDate

```ts
interface IAmauiLogOptionsDate {
    add?: boolean;
    method?: TMethod;
}
```

#### IAmauiLogOptionsStringify

```ts
interface IAmauiLogOptionsStringify {
    method?: TMethod;
}
```

#### IAmauiLogOptions

```ts
interface IAmauiLogOptions {
    log?: IAmauiLogOptionsLog;
    arguments?: IAmauiLogOptionsArguments;
    variants?: IAmauiLogVariants;
    date?: IAmauiLogOptionsDate;
    stringify?: IAmauiLogOptionsStringify;
}
```

#### ILog

```ts
interface ILog {
    method?: TMethod;
    arguments?: string[];
    logged: boolean;
}
```

#### IAmauiLog

```ts
interface IAmauiLog {
    variants: IAmauiLogVariants;
    options: IAmauiLogOptions;
    [property: string]: any;
}
```

#### AmauiLog

```ts
class AmauiLog implements IAmauiLog {
    options: IAmauiLogOptions;
    variants: IAmauiLogVariants;
    archive: any[];
    static options: IAmauiLogOptions;
    static variants: IAmauiLogVariants;
    static archive: any[];
    static archiveClear(): void;
    static get amauilog(): AmauiLog;
    static log(variant_?: TVariant, ...args: any[]): ILog;
    static debug(...args: any[]): ILog;
    static info(...args: any[]): ILog;
    static warn(...args: any[]): ILog;
    static error(...args: any[]): ILog;
    static important(...args: any[]): ILog;
    static color(value: any, color?: string, options?: IAmauiLogVariantColor): Array<string>;
    static get variantNames(): Array<TVariant>;
    static get variantsDefault(): Array<IAmauiLogVariant>;
    constructor(options?: IAmauiLogOptions);
    log(variant_?: TVariant, ...args: any[]): ILog;
    debug(...args: any[]): undefined | ILog;
    info(...args: any[]): undefined | ILog;
    warn(...args: any[]): undefined | ILog;
    error(...args: any[]): undefined | ILog;
    important(...args: any[]): undefined | ILog;
    archiveClear(): void;
    static reset(): void;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Log: Start",
      "to": "/dev/log/start"
    },
    "next": {
      "label": "LZ77: Start",
      "to": "/dev/lz77/start"
    }
  }
}~
