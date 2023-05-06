

### API

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

#### IAmauiLogVariant

```ts
interface IAmauiLogVariant {
    name: 'log' | TVariant;
    prefix?: any;
    sufix?: any;
    color?: IAmauiLogVariantColor;
    pre?: {
        subscription: AmauiSubscription;
    };
```

#### IAmauiLogVariants

```ts
type IAmauiLogVariants = {
    [p in TVariant]?: IAmauiLogVariant;
};
```

#### IAmauiLogOptions

```ts
interface IAmauiLogOptions {
    log?: {
        archive?: boolean;
        enabled?: boolean;
        native?: boolean;
        variants?: Array<TVariant>;
        padding?: {
            top?: boolean;
            bottom?: boolean;
        };
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

