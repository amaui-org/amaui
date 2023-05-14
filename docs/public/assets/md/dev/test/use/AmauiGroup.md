

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
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Test: Start",
      "to": "/dev/test/start"
    },
    "next": {
      "label": "Test: AmauiMiddleware",
      "to": "/dev/test/use/AmauiMiddleware"
    }
  }
}~
