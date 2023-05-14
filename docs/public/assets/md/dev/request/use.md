

## API

#### TMethodType

```ts
type TMethodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PATCH';
```

#### TResponseType

```ts
type TResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text';
```

#### TResponseTypeNode

```ts
type TResponseTypeNode = 'buffer' | 'json' | 'text';
```

#### TBody

```ts
type TBody = Blob | BufferSource | FormData | URLSearchParams | Record<any, any> | string | any;
```

#### TXhrEvent

```ts
type TXhrEvent = ProgressEvent<EventTarget>;
```

#### IInterceptorsSetRequest

```ts
interface IInterceptorsSetRequest {
    pre: AmauiSubscription;
    post: AmauiSubscription;
}
```

#### IInterceptorsSetResponse

```ts
interface IInterceptorsSetResponse {
    success: AmauiSubscription;
    error: AmauiSubscription;
    fail: AmauiSubscription;
}
```

#### IInterceptorsSet

```ts
interface IInterceptorsSet {
    request: IInterceptorsSetRequest;
    response: IInterceptorsSetResponse;
}
```

#### IOptionsRequest

```ts
interface IOptionsRequest extends IOptions {
    url?: string;
    method?: TMethodType;
    body?: TBody;
    cancel?: AmauiSubscription;
}
```

#### IAmauiRequestResponse

```ts
interface IAmauiRequestResponse {
    response: any;
    status: number;
    headers: object;
    request: XMLHttpRequest | http.ClientRequest;
    options: IOptionsRequest;
}
```

#### AmauiRequestResponse

```ts
class AmauiRequestResponse implements IAmauiRequestResponse {
    response: any;
    status: number;
    headers: object;
    request: XMLHttpRequest | http.ClientRequest;
    options: IOptionsRequest;
    constructor(response: any, status: number, headers: object, request: XMLHttpRequest | http.ClientRequest, options: IOptionsRequest);
}
```

#### IOptionsZipAmaui

```ts
interface IOptionsZipAmaui {
    zip?: boolean;
    unzip?: boolean;
    only_positive?: boolean;
}
```

#### IOptionsZip

```ts
interface IOptionsZip {
    amaui?: IOptionsZipAmaui;
}
```

#### IOptionsCsrf

```ts
interface IOptionsCsrf {
    cookie?: string;
    headers?: string;
}
```

#### IOptionsAgents

```ts
interface IOptionsAgents {
    http?: http.Agent;
    https?: https.Agent;
}
```

#### IOptionsRequest

```ts
interface IOptionsRequest {
    url?: string;
    withCredentials?: boolean;
    headers?: Record<string, string | number>;
    zip?: IOptionsZip;
    csrf?: IOptionsCsrf;
    agents?: IOptionsAgents;
    timeout?: number;
}
```

#### IOptionsResponseParse

```ts
interface IOptionsResponseParse {
    json?: boolean;
}
```

#### IOptionsResponse

```ts
interface IOptionsResponse {
    pure?: boolean;
    resolveOnError?: boolean;
    type?: TResponseType | TResponseTypeNode;
    parse?: IOptionsResponseParse;
}
```

#### IOptions

```ts
interface IOptions {
    request?: IOptionsRequest;
    response?: IOptionsResponse;
}
```

#### TAmauiRequestDefaults

```ts
type TAmauiRequestDefaults = Record<string, IOptions>;
```

#### AmauiRequestDefaults

```ts
const AmauiRequestDefaults: TAmauiRequestDefaults;
```

#### IAmauiRequestAmauiSub

```ts
interface IAmauiRequestAmauiSub extends AmauiSubscription {
    cancel?(): void;
}
```

#### AmauiRequest

```ts
class AmauiRequest {
    private options_;
    interceptors: IInterceptorsSet;
    static interceptors: IInterceptorsSet;
    static defaults: TAmauiRequestDefaults;
    static get cancel(): IAmauiRequestAmauiSub;
    static get amauirequest(): AmauiRequest;
    static request(...args: [IOptionsRequest]): Promise<IAmauiRequestResponse>;
    static get(...args: [string, IOptionsRequest?]): Promise<IAmauiRequestResponse>;
    static post(...args: [string, TBody, IOptionsRequest?]): Promise<IAmauiRequestResponse>;
    static put(...args: [string, TBody, IOptionsRequest?]): Promise<IAmauiRequestResponse>;
    static delete(...args: [string, IOptionsRequest?]): Promise<IAmauiRequestResponse>;
    static head(...args: [string, IOptionsRequest?]): Promise<IAmauiRequestResponse>;
    static options(...args: [string, IOptionsRequest?]): Promise<IAmauiRequestResponse>;
    static patch(...args: [string, TBody, IOptionsRequest?]): Promise<IAmauiRequestResponse>;
    static reset(): void;
    constructor(options?: IOptions);
    request(options: IOptionsRequest): Promise<IAmauiRequestResponse>;
    get(url: string, options?: IOptionsRequest): Promise<IAmauiRequestResponse>;
    post(url: string, body: TBody, options?: IOptionsRequest): Promise<IAmauiRequestResponse>;
    put(url: string, body: TBody, options?: IOptionsRequest): Promise<IAmauiRequestResponse>;
    patch(url: string, body: TBody, options?: IOptionsRequest): Promise<IAmauiRequestResponse>;
    head(url: string, options?: IOptionsRequest): Promise<IAmauiRequestResponse>;
    options(url: string, options?: IOptionsRequest): Promise<IAmauiRequestResponse>;
    delete(url: string, options?: IOptionsRequest): Promise<IAmauiRequestResponse>;
    private onPre;
    private onPost;
    private onSuccess;
    private onError;
    private onFail;
    private parseHeaders;
    private xhr;
    private https;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Request: Start",
      "to": "/dev/request/start"
    },
    "next": {
      "label": "Stack: Start",
      "to": "/dev/stack/start"
    }
  }
}~
