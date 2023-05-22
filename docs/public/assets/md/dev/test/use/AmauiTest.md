
# AmauiTest

Main class that organizes all the test, their middlewares, and after running all their responses, and prints the results in the console, and/or browser HTML.

You can pass options to AmauiTest, but more on how to do that, explained in the cli page.

## API

#### IAmauiResponse

```ts
interface IAmauiResponse {
    for?: AmauiTo | AmauiGroup | AmauiMiddleware;
    start?: number;
    end?: number;
    duration?: number;
    measurement?: {
        slow?: boolean;
        very_slow?: boolean;
    };
    response?: any | Error;
    type?: 'success' | 'error';
    index?: number;
}
```

#### IAmauiTestStatus

```ts
type IAmauiTestStatus = 'IDLE' | 'RUNNING' | 'COMPLETED' | 'CLEAR';
```

#### IOptionsResponse

```ts
interface IOptionsResponse {
    timeout?: {
        to?: number;
        middleware?: number;
    };
    measurement?: {
        slow?: number;
        very_slow?: number;
    };
    on_fail?: {
        exit?: boolean;
        error?: boolean;
    };
}
```

#### TOptionsResultsTo

```ts
type TOptionsResultsTo = 'log' | 'html';
```

#### TResultsHtml

```ts
type TResultsHtml = {
    id?: string;
};
```

#### IOptionsResults

```ts
interface IOptionsResults {
    print?: boolean;
    to?: Array<TOptionsResultsTo>;
    at?: 'auto' | 'end';
    errors_minify?: boolean;
    html?: TResultsHtml;
}
```

#### TOptionsOrder

```ts
type TOptionsOrder = 'original' | 'to-group' | 'group-to';
```

#### IOptions

```ts
interface IOptions {
    imports?: string | Array<string>;
    order?: TOptionsOrder;
    results?: IOptionsResults;
    response?: IOptionsResponse;
    files?: string | Array<string>;
    package?: string;
}
```

#### optionsDefault

```ts
const optionsDefault: IOptions;
```

#### AmauiTest

```ts
class AmauiTest {
    options_: IOptions;
    private amauilog;
    status: IAmauiTestStatus;
    private fileSource;
    private cleared;
    subscription: AmauiSubscription;
    previousLog: any;
    archive: {
        logs: any[];
    };
    static orderTos(group: AmauiGroup, order_: TOptionsOrder): Array<AmauiTo | AmauiGroup>;
    static order(group: AmauiGroup, order_: TOptionsOrder): Array<AmauiTo | AmauiGroup>;
    get mainGroup(): AmauiGroup;
    get options(): IOptions;
    set options(options: IOptions);
    constructor(options?: IOptions);
    init(): Promise<void>;
    run(): Promise<boolean>;
    runGroup(group: AmauiGroup): Promise<void>;
    runMethod(method: TMethod, type?: string): Promise<unknown>;
    runMiddlewares(middlewares: Array<AmauiMiddleware>, for_: AmauiGroup | AmauiTo): Promise<void>;
    runMiddleware(middleware: AmauiMiddleware, for_: AmauiGroup | AmauiTo): Promise<void>;
    runTo(to: AmauiTo): Promise<void>;
    imports(): Promise<void>;
    import(files: string[]): Promise<void>;
    private importFile;
    initNode(): Promise<void>;
    prepareEnvironment(file?: string): void;
    printTestsHeader(): void;
    printTo(value: IAmauiResponse): void;
    printManual(): void;
    printGroup(group: AmauiGroup): void;
    printAuto(value: IAmauiResponse | AmauiGroup): void;
    printAutoSummary(): void;
    printErrors(): void;
    printGroupErrors(group?: AmauiGroup): void;
    printError(to: AmauiTo): void;
    private printErrorStackCleanUp;
    private printDiff;
    printSummary(): void;
    private log;
    clear(method?: TMethod): Promise<void>;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Test: AmauiMiddleware",
      "to": "/dev/test/use/AmauiMiddleware"
    },
    "next": {
      "label": "Test: AmauiTo",
      "to": "/dev/test/use/AmauiTo"
    }
  }
}~
