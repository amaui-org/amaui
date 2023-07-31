
# AmauiRequest

### Options

All of the options for request, response.

You can override each of these options per request.

#### request

##### withCredentials

If true, it will include `csrf` property, value to the headers.

##### headers

Default headers for all the requests.

##### zip

###### amaui

If to use `@amaui/zip` library to zip request data.

- zip: If to zip.
- unzip: If to unzip.
- only_positive: If only to zip positive compression results.

##### csrf

###### cookie

CSRF cookie property name.

###### headers

Property name for the CSRF for adding it to headers.

##### agents

###### http

Custom HTTP agent for the back end.

###### https

Custom HTTPS agent for the back end.

##### timeout

Request timeout value, default `0`.

#### response

##### pure

If you want a pure response, instead of the packaged object with meta information.

##### resolveOnError

If request should resolve on error response, instead of rejecting.

##### type

What response type do you want.

Browser `'arraybuffer' | 'blob' | 'document' | 'json' | 'text'`, and for node additionally `'buffer'`.

##### parse

###### json

If to parse the JSON responses.

### defaults

You can add overrides for the `AmauiRequest` per method in that instance, for all the same properties as above.

Methods `request`, `get`, `post`, `put`, `patch`, `delete`, `head`, `options`.

```ts
AmauiRequest.defaults.get.request = { ... };
AmauiRequest.defaults.get.response = { ... };
```

### Order of priority for options

From top to bottom, highest to lowest priority for overriding options values.
- Request options
- `AmauiRequest` instance options.
- `AmauiRequest` defaults method options.

### cancel

Returns an instance of `@amaui/subscription` with a cancel method, which you can pass into a method as options, and on invoking it, it will cancel that request instance.

```ts
const subscriptionCancel = AmauiRequest.cancel;

const amauiRequest = new AmauiRequest();

amauiRequest.get('url', { cancel: subscriptionCancel });

subscriptionCancel.cancel();

// Request is aborted, returns an error
```

### interceptors

Interceptors are very usefull if you want to ie. add an authentication token to every request your `AmauiRequest` instance will make, but on the fly, without presetting it in the options, since the token might change after initial creation of `AmauiRequest` instance.

#### request

#### pre

Emits the request options value that you can update as a reference value type, before the request is sent.

```ts
const amauiRequest = new AmauiRequest();

amauiRequest.interceptors.request.pre.subscribe(value => {
  // Adds an Authorization token to every request on the fly
  value.request.headers['Authorization'] = `Bearer ...`;
});
```

#### post

Emits the request response value that you can update as a reference value type, after the request receives a response, before returning it from the method.

```ts
const amauiRequest = new AmauiRequest();

amauiRequest.interceptors.request.post.subscribe(value => {
  ...
});
```

#### response

##### success

It will emit a response value for every request's success response.

##### error

It will emit a response value for every request's error response.

##### fail

It will emit a response value for every request's fail response.

### interceptors static

Same as interceptors on `AmauiRequest` instance, only they emit values for all `AmauiRequest` instances.

```ts
AmauiRequest.interceptors.request.pre.subscribe(value => {
  // Adds an Authorization token to every request on the fly
  value.request.headers['Authorization'] = `Bearer ...`;
});
```

### amauiRequest

Returns an `AmauiRequest` instance with default options.

```ts
AmauiRequest.amauiRequest;

// AmauiRequest { }
```

### reset

Resets the static defaults to their default options.

```ts
AmauiRequest.reset();
```

### AmauiRequestResponse

Model in which all responses will be in for all the methods.

```ts
AmauiRequestResponse {
  // Response value
  response;
  // Status code
  status;
  // Response headers
  headers;
  // Request instance
  request;
  // Request options
  options;
}
```

### Methods

Methods for making the requests.

#### request

Request method for making any HTTP method request in the same method.

Methods `'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PATCH'`.

```ts
const amauiRequest = new AmauiRequest();

await amauiRequest.request({
  method: 'POST',
  url: ...,
  body: ...
});
```

#### get

Request method for making GET HTTP method request.

```ts
const amauiRequest = new AmauiRequest();

await amauiRequest.get(url);
```

#### post

Request method for making GET HTTP method request.

Body can be `Blob | BufferSource | FormData | URLSearchParams | Record<any, any> | string | any`;

```ts
const amauiRequest = new AmauiRequest();

await amauiRequest.post(url, body);
```

#### put

Request method for making PUT HTTP method request.

Body can be `Blob | BufferSource | FormData | URLSearchParams | Record<any, any> | string | any`;

```ts
const amauiRequest = new AmauiRequest();

await amauiRequest.put(url, body);
```

#### patch

Request method for making PATCH HTTP method request.

Body can be `Blob | BufferSource | FormData | URLSearchParams | Record<any, any> | string | any`;

```ts
const amauiRequest = new AmauiRequest();

await amauiRequest.patch(url, body);
```

#### head

Request method for making HEAD HTTP method request.

```ts
const amauiRequest = new AmauiRequest();

await amauiRequest.head(url);
```

#### options

Request method for making OPTIONS HTTP method request.

```ts
const amauiRequest = new AmauiRequest();

await amauiRequest.options(url);
```

#### delete

Request method for making DELETE HTTP method request.

```ts
const amauiRequest = new AmauiRequest();

await amauiRequest.delete(url);
```

### Methods static

They all do the same as the `AmauiRequest` instance methods, only they create an `AmauiRequest` instance with default options per each method call.

#### request

```ts
await AmauiRequest.request(...);
```

#### get

```ts
await AmauiRequest.get(...);
```

#### post

```ts
await AmauiRequest.post(...);
```

#### put

```ts
await AmauiRequest.put(...);
```

#### delete

```ts
await AmauiRequest.delete(...);
```

#### head

```ts
await AmauiRequest.head(...);
```

#### options

```ts
await AmauiRequest.options(...);
```

#### patch

```ts
await AmauiRequest.patch(...);
```

### Examples

#### json

```ts
const amauiRequest = new AmauiRequest();

await amauiRequest.post('url', { a: 114 });
```

#### application/x-www-form-urlencoded

```ts
const amauiRequest = new AmauiRequest();

const form = new URLSearchParams();

form.append('a', 4);
form.append('ad', 'a4');

await amauiRequest.post('url', form.toString(), {
  request: {
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
});
```

#### multipart/form-data

```ts
const amauiRequest = new AmauiRequest();

const file = await AmauiNode.file.get(filePath, false);

const form = new FormData();

form.append('a', 4);
form.append('ad', 'a4');
form.append('file', file);

await amauiRequest.post('api', form.getBuffer(), {
  request: {
    headers: {
      ...form.getHeaders()
    }
  }
});
```

#### binary

##### blob

```ts
const amauiRequest = new AmauiRequest();

const input = window.document.getElementById('a') as HTMLInputElement;
const file = input.files[0];

await amauiRequest.post('url', file, {
  request: {
    headers: {
      'content-type': 'application/octet-stream'
    }
  }
});
```

##### uint8array

```ts
const amauiRequest = new AmauiRequest();

await amauiRequest.post('url', new Uint8Array([97]), {
  request: {
    headers: {
      'content-type': 'text/plain'
    }
  }
});
```

##### buffer

```ts
const amauiRequest = new AmauiRequest();

const file = await AmauiNode.file.get(filePath, false);

await amauiRequest.post('url', file, {
  request: {
    headers: {
      'content-type': 'application/octet-stream'
    }
  }
});
```

#### raw

In browser use `new TextEncoder().encode('')` to get the `Uint8Array` bytes value.

In nodejs use `Buffer.from('')` to get the bytes value.

##### text/plain

```ts
const amauiRequest = new AmauiRequest();

await amauiRequest.post('url', Buffer.from('a'), {
  request: {
    headers: {
      'content-type': 'text/plain'
    }
  }
});
```

##### text/html

```ts
const amauiRequest = new AmauiRequest();

await amauiRequest.post('url', Buffer.from('<a>a</a>'), {
  request: {
    headers: {
      'content-type': 'text/html'
    }
  }
});
```

##### application/javascript

```ts
const amauiRequest = new AmauiRequest();

await amauiRequest.post('url', Buffer.from('const a = 4;'), {
  request: {
    headers: {
      'content-type': 'application/javascript'
    }
  }
});
```

##### application/json

```ts
const amauiRequest = new AmauiRequest();

await amauiRequest.post('url', {
  a: 4,
  ad: 'a4'
});
```

##### application/xml

```ts
const amauiRequest = new AmauiRequest();

await amauiRequest.post('url', Buffer.from('<a>a</a>'), {
  request: {
    headers: {
      'content-type': 'application/xml'
    }
  }
});
```

### Other

#### content-type

Default `'content-type'` headers for `post`, `put` & `patch` methods options is `application/json`.

#### browser

In the browser `XMLHttpRequest` is used to make the requests.

#### nodejs

In nodejs `https` or `http` module is used to make the requests.

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
      "to": "/library/request/start"
    },
    "next": {
      "label": "Stack: Start",
      "to": "/library/stack/start"
    }
  }
}~
