
# AmauiLog

### Options

#### log

##### enabled

If log is enabled, if false, even when calling the log methods it won't log to the console, default true.

##### archive

If all logs should be saved for history purpose in the `archive` array property of the AmauiLog instance.

##### native

If true native console methods will be used, ie. `console.info`, otherwise regular `console.log`, default true.

##### variants

Which logs should be used, using this you can only allow ie. debug logs to write to console, and not other types of logs, or just choose exactly which ones you want, default `['log', 'debug', 'info', 'warn', 'error', 'important']`.

##### padding

###### top

Top padding when writing to the console.

###### bottom

Bottom padding when writing to the console.

#### arguments

##### pre

Array of arguments in the console that will be automatically inserted before the user provided arguments, for every log method.

##### post

Array of arguments in the console that will be automatically inserted after the user provided arguments, for every log method.

#### variants

Options for each log method.

##### name

Name for this log method writen to the console, ie. `name`.

##### prefix

Prefix for the name writen to the console, ie. `(name`.

##### sufix

Sufix for the name writen to the console, ie. `name)`.

##### color

Color the name will be writen with, differs in browser & server.

###### browser

ie. `#1fc926`.

###### server

ie. 32

##### pre

Usefull if you want to subscribe a method to be called before this type of log method is called.

- subscription

##### post

Usefull if you want to subscribe a method to be called after this type of log method is called.

- subscription

#### date

##### add

If you want the date to be added for each log line, default true.

##### method

Date format method, that should return now time as a formated string, default `@amaui/date`'s `format` method.

#### stringify

##### method

Method used to stringify arguments that aren't strings when adding them to the console, default `@amaui/utils`'s `stringify` method.

### Methods

#### log

General log method, where first argument is type of log method to use, rest of the arguments are used for the console log.

```ts
const amauiLog = new AmauiLog();

amauiLog.log('info', 'Collection: A', 'Response: 40ms');

// in the console writen:

  // 04-04-2014 04:04:14.141 (info):

  // Collection: A
  // Response: 40ms

```

#### debug

```ts
const amauiLog = new AmauiLog();

amauiLog.debug('Collection: A', 'Response: 40ms');

// in the console writen:

  // 04-04-2014 04:04:14.141 (debug):

  // Collection: A
  // Response: 40ms

```

#### info

```ts
const amauiLog = new AmauiLog();

amauiLog.info('Collection: A', 'Response: 40ms');

// in the console writen:

  // 04-04-2014 04:04:14.141 (info):

  // Collection: A
  // Response: 40ms

```

#### warn

```ts
const amauiLog = new AmauiLog();

amauiLog.warn('Collection: A', 'Response: 40ms');

// in the console writen:

  // 04-04-2014 04:04:14.141 (warn):

  // Collection: A
  // Response: 40ms

```

#### error

```ts
const amauiLog = new AmauiLog();

amauiLog.error('Collection: A', 'Response: 40ms');

// in the console writen:

  // 04-04-2014 04:04:14.141 (error):

  // Collection: A
  // Response: 40ms

```

#### important

```ts
const amauiLog = new AmauiLog();

amauiLog.important('Collection: A', 'Response: 40ms');

// in the console writen:

  // 04-04-2014 04:04:14.141 (important):

  // Collection: A
  // Response: 40ms

```

#### archiveClear

Clears the archive, makes it its initial empty value.

```ts
const amauiLog = new AmauiLog({ log: { archive: true }});

amauiLog.info('Collection: A', 'Response: 40ms');

// in the console writen:

  // 04-04-2014 04:04:14.141 (info):

  // Collection: A
  // Response: 40ms

amauiLog.archive.length;

// 1

amauiLog.archiveClear();

amauiLog.archive

// []
```

### Util methods

#### Global options

If you have multiple instances of `AmauiLog` in your app, and you want to globally disable them all, and not each of them individually, you can just set `AmauiLog.options.log.enabled = false` and it will in one place disable all of them from logging to the console.

All of the global options are the same as instance options, just as static properties.

```ts
AmauiLog.options;
AmauiLog.variants;
AmauiLog.archive;
AmauiLog.variantNames;
AmauiLog.variantsDefault;
```

#### amauilog

Returns `AmauiLog` instance with default options.

```ts
AmauiLog.amauilog;

// AmauiLog { }
```

#### Static log methods

Do the same as the instance log methods only by creating `AmauiLog` instance with default options.

##### log

```ts
AmauiLog.log('info', 'a');
```

##### debug

```ts
AmauiLog.debug('a');
```

##### info

```ts
AmauiLog.info('a');
```

##### warn

```ts
AmauiLog.warn('a');
```

##### error

```ts
AmauiLog.error('a');
```

##### important

```ts
AmauiLog.important('a');
```

#### color

Returns a value in the template string appropriated for the browser, or server while adding a color to it.

Default values:
- blue
- green
- orange
- red
- magenta
- default (green)

```ts
AmauiLog.color('a', 'orange');

// in the browser:
// '%ca', 'color: #a9b030'

// in the server:
// '\x1b33ma\x1b[0m'
```

#### archiveClear

Static archiveClear method, for clearing static `archive` array of log values.

```ts
AmauiLog.archiveClear();

AmauiLog.archive;

// []
```

#### reset

Static reset method, readds all the default static variants options, and updates static options to the default options.

```ts
AmauiLog.reset();
```

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
      "to": "/library/log/start"
    },
    "next": {
      "label": "LZ77: Start",
      "to": "/library/lz77/start"
    }
  }
}~
