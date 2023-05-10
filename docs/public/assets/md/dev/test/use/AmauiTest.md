

### API

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
