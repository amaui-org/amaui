# AmauiGroup

- Makes a grouping of tests nested within it. \
- In the console when tests run, they look nicely nested within that group for better readability of responses.
- Have nested middleware methods specific to this group.

Every group saves summary of responses within it for its own top level tos, as well as the amount of top level tos and groups it has.

Very important, group method (the second argument) has to be synchronous, it's only purpose is to setup all the nested tests within it, in terms of what methods to run, prior to running all the tests.

For any database connection awaiting, etc. use the middleware methods described below, as within them, when tests start running, then those middlewares will be awaited, prior to running potentially async test methods.

### Middlewares

#### preAll

Runs before the entire test. \
Useful to start the database connections, etc.

#### postAll

Runs after the entire test. \
Useful to clean up, close the database connections, etc.

#### preEveryGroup

Runs before any group top level, or nested in the test.

#### postEveryGroup

Runs after any group top level, or nested in the test.

#### preEveryTo

Runs before any to top level, or nested in the test.

#### postEveryTo

Runs after any to top level, or nested in the test.

#### pre

Runs before all group tests.

#### post

Runs after all group tests.

#### preEveryGroupGroup

Runs before every group top level, or nested within a group.

#### postEveryGroupGroup

Runs after every group top level, or nested within a group.

#### preEveryGroupTo

Runs before every to top level, or nested within a group.

#### postEveryGroupTo

Runs after every to top level, or nested within a group.

#### preTo

Runs before every to top level only within a group.

#### postTo

Runs after every to top level only within a group.

### Middleware order

```ts
// preAll

// runMainGroup (tests)

    // preEveryGroup

    // preEveryGroupGroup (for all the parents)

    // pre

    // runGroup

        // Run tos and/or groups in order defined in the options
        // ie. for to

        // runTo

            // preEveryTo

            // preEveryGroupTo (for all the parents)

            // preTo

                // runTo method

            // postEveryTo

            // postEveryGroupTo (for all the parents)

            // postTo

    // postEveryGroup

    // postEveryGroupGroup (for all the parents)

    // post

// postAll
```

### Example

```ts
group('Todos query', () => {

  to('Have a 200 response from the server', async () => {
    const response = await apiQueryMethod();

    assert(response?.status).eq(200);
  });

});
```

## API

#### IAmauiGroup

```ts
interface IAmauiGroup {
    name: string;
    method?: TMethod;
    parent: AmauiGroup;
    file?: string;
    level: number;
    levels: number;
    index: number;
    mainIndex: number;
    latestIndex: number;
    groups: Array<AmauiGroup>;
    tos: Array<AmauiTo>;
    preAll: Array<AmauiMiddleware>;
    preEveryGroup: Array<AmauiMiddleware>;
    preEveryTo: Array<AmauiMiddleware>;
    pre: Array<AmauiMiddleware>;
    preEveryGroupGroup: Array<AmauiMiddleware>;
    preTo: Array<AmauiMiddleware>;
    preEveryGroupTo: Array<AmauiMiddleware>;
    postAll: Array<AmauiMiddleware>;
    postEveryGroup: Array<AmauiMiddleware>;
    postEveryTo: Array<AmauiMiddleware>;
    post: Array<AmauiMiddleware>;
    postEveryGroupGroup: Array<AmauiMiddleware>;
    postTo: Array<AmauiMiddleware>;
    postEveryGroupTo: Array<AmauiMiddleware>;
    summary: {
        amount: {
            tos: number;
            groups: number;
        };
        tos: {
            success: number;
            fail: number;
        };
    };
    response?: IAmauiResponse;
}
```

#### AmauiGroup

```ts
class AmauiGroup implements IAmauiGroup {
    name: string;
    method?: TMethod;
    parent: AmauiGroup;
    file?: string;
    level: number;
    levels: number;
    index: number;
    mainIndex: number;
    latestIndex: number;
    summary: {
        amount: {
            tos: number;
            groups: number;
        };
        tos: {
            success: number;
            fail: number;
        };
    };
    response: IAmauiResponse;
    groups: Array<AmauiGroup>;
    tos: Array<AmauiTo>;
    preAll: Array<AmauiMiddleware>;
    preEveryGroup: Array<AmauiMiddleware>;
    preEveryTo: Array<AmauiMiddleware>;
    pre: Array<AmauiMiddleware>;
    preEveryGroupGroup: Array<AmauiMiddleware>;
    preTo: Array<AmauiMiddleware>;
    preEveryGroupTo: Array<AmauiMiddleware>;
    postAll: Array<AmauiMiddleware>;
    postEveryGroup: Array<AmauiMiddleware>;
    postEveryTo: Array<AmauiMiddleware>;
    post: Array<AmauiMiddleware>;
    postEveryGroupGroup: Array<AmauiMiddleware>;
    postTo: Array<AmauiMiddleware>;
    postEveryGroupTo: Array<AmauiMiddleware>;
    constructor(name: string, method?: TMethod);
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Test: Start",
      "to": "/library/test/start"
    },
    "next": {
      "label": "Test: AmauiMiddleware",
      "to": "/library/test/use/AmauiMiddleware"
    }
  }
}~
