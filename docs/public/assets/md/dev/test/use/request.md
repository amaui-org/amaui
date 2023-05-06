

### API

#### IOptions

```ts
interface IOptions {
    keepOpen?: boolean;
}
```

#### IAmauiTestRequestStatusOperator

```ts
type IAmauiTestRequestStatusOperator = 'eq' | 'equal' | 'lt' | 'less-than' | 'lte' | 'less-than-equal' | 'gt' | 'greater-than' | 'gte' | 'greater-than-equal';
```

#### IAmauiTestRequestResponse

```ts
interface IAmauiTestRequestResponse {
    value?: IAmauiRequestResponse;
    response?: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    meta?: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    pagination?: (value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    property?: (property: string, value: Array<any> | any, options?: IAssertOptions) => IAssertObject;
    options?: (value: string, value1: any, options?: IAssertOptions) => IAssertObject;
    request?: (value: string, value1: any, options?: IAssertOptions) => IAssertObject;
    headers?: (value: string, value1: any, options?: IAssertOptions) => IAssertObject;
    status?: (value: Array<number> | number, operator?: IAmauiTestRequestStatusOperator, options?: IAssertOptions) => IAssertObject;
}
```

#### IAmauiTestRequest

```ts
interface IAmauiTestRequest {
    request: (url: string, options?: IOptionsRequest) => Promise<IAmauiTestRequestResponse>;
    get: (url: string, options?: IOptionsRequest) => Promise<IAmauiTestRequestResponse>;
    post: (url: string, options?: IOptionsRequest) => Promise<IAmauiTestRequestResponse>;
    put: (url: string, options?: IOptionsRequest) => Promise<IAmauiTestRequestResponse>;
    delete: (url: string, options?: IOptionsRequest) => Promise<IAmauiTestRequestResponse>;
    head: (url: string, options?: IOptionsRequest) => Promise<IAmauiTestRequestResponse>;
    options: (url: string, options?: IOptionsRequest) => Promise<IAmauiTestRequestResponse>;
    patch: (url: string, options?: IOptionsRequest) => Promise<IAmauiTestRequestResponse>;
}
```

#### request

```ts
function request(app?: express.Application | http.Server | https.Server | string, options_?: IOptions): Promise<IAmauiTestRequest>;
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
