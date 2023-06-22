
# Response

A class in which you can package your entire request's JSON response value.

### Properties

#### response

Any value.

#### meta

`ResponseMeta` instance.

#### pagination

`ResponsePagination` instance.

### Methods

You can use these static methods to create a new `Response` instance, in various use cases.

#### allowed

Static allowed property defining allowed keys that can be sent in a response. \
Used in `fromObject`, `fromCreated` methods.

```ts
// fromObject
Response.allowed.object = ['_id', 'data', 'meta', 'api_meta'];

// fromCreated
Response.allowed.created = ['_id', 'api_meta'];
```

#### fromObject

Use this method if you wanna return a single result in a response.

You can customize which keys are sent in a response using `Response.allowed.object`.

```ts
Response.fromObject({ _id, data, meta });

// {
//   response: {
//     _id,
//     data,
//     meta
//   },
//   meta: {
//     status: 200
//   }
// }
```

#### fromAdded

Use this method if you wanna return a single result in a response, after adding an object.

You can customize which keys are sent in a response using `Response.allowed.added`.

```ts
Response.fromAdded({ _id, data, meta });

// {
//   response: {
//     _id,
//     data,
//     meta
//   },
//   meta: {
//     status: 201
//   }
// }
```

#### fromUpdated

Use this method if you wanna return a single result in a response, after updating an object.

You can customize which keys are sent in a response using `Response.allowed.updated`.

```ts
Response.fromUpdated({ _id, data, meta });

// {
//   response: {
//     _id,
//     data,
//     meta
//   },
//   meta: {
//     status: 200
//   }
// }
```

#### fromRemoved

Use this method if you wanna return a single result in a response, after removing an object.

You can customize which keys are sent in a response using `Response.allowed.removed`.

```ts
Response.fromRemoved({ _id, data, meta });

// {
//   response: {
//     _id,
//     data,
//     meta
//   },
//   meta: {
//     status: 200
//   }
// }
```

#### fromQuery

Use this method for packaging a response from `@amaui/mongo`'s query methods ie. `find`, `searchMany`.

```ts
const todos = await todoCollection.searchMany(...);

Response.fromQuery(todos);

// {
//   response: [
//     ...
//   ],
//   pagination: {
//     next,
//     previous,
//     sort,
//     size,
//     skip,
//     limit
//   },
//   meta: {
//     status: 200
//   }
// }
```

#### fromAny

Use this method to return a simple response, without much checks.

```ts
Response.fromAny({ _id, meta });

// {
//   response: {
//     _id,
//     meta
//   },
//   meta: {
//     status: 200
//   }
// }
```

#### fromExpress

Use this method to return a raw JSON response using express.

```ts
Response.fromExpress(res, { _id, meta });

// Sends a request's response to the user
```

## API

#### IResponse

```ts
interface IResponse {
    meta: IResponseMeta;
    pagination: IResponsePagination;
    response: any;
}
```

#### Response

```ts
class Response extends Base {
    response: any;
    meta: ResponseMeta;
    pagination?: ResponsePagination;
    static allowed: {
        object: any[];
        created: any[];
    };
    constructor(response: any, meta: ResponseMeta, pagination?: ResponsePagination);
    static fromObject(value: TObject, original?: boolean, meta_?: ResponseMeta, options?: {
        onlyKeys: boolean;
    }): Response;
    static fromCreated(value: TObject, meta_?: ResponseMeta, options?: {
        onlyKeys: boolean;
    }): Response;
    static fromQuery(value: MongoResponse, meta_?: ResponseMeta): Response;
    static fromAny(value: any, meta_?: ResponseMeta): Response;
    static fromExpress(res: express.Response, data?: {}, status?: number): express.Response<any, Record<string, any>>;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Models: ResponsePagination",
      "to": "/dev/models/use/ResponsePagination"
    },
    "next": {
      "label": "Models: validateMongoQuery",
      "to": "/dev/models/use/validateMongoQuery"
    }
  }
}~
