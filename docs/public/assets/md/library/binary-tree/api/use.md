

## API

#### IResponseOptions

```ts
interface IResponseOptions {
    method: 'json' | 'send';
    type: 'application/json';
}
```

#### IRouteClassInstance

```ts
interface IRouteClassInstance {
    response: (req: express.Request, response: express.Response, options: IResponseOptions) => any;
    error: (req: express.Request, error: Error) => any;
    [p: string]: any;
}
```

#### IRouteClass

```ts
interface IRouteClass {
    new (...args: any[]): IRouteClassInstance;
}
```

#### IRoute

```ts
interface IRoute {
    method: 'string';
    route: 'string';
    middlewares: Array<express.RequestHandler>;
    property: 'string';
}
```

#### TRouteArgs

```ts
type TRouteArgs = Array<string | TMethod>;
```

#### Routes

```ts
function Routes(value: IRouteClass[], app: express.Application): void;
```

#### Route

```ts
function Route(...args: TRouteArgs): ClassDecorator;
```

#### Method

```ts
function Method(...args: TRouteArgs): MethodDecorator;
```

#### Get

```ts
function Get(...args: TRouteArgs): MethodDecorator;
```

#### Post

```ts
function Post(...args: TRouteArgs): MethodDecorator;
```

#### Put

```ts
function Put(...args: TRouteArgs): MethodDecorator;
```

#### Patch

```ts
function Patch(...args: TRouteArgs): MethodDecorator;
```

#### Head

```ts
function Head(...args: TRouteArgs): MethodDecorator;
```

#### Options

```ts
function Options(...args: TRouteArgs): MethodDecorator;
```

#### Delete

```ts
function Delete(...args: TRouteArgs): MethodDecorator;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "API: Start",
      "to": "/dev/api/start"
    },
    "next": {
      "label": "AWS: Start",
      "to": "/dev/aws/start"
    }
  }
}~
