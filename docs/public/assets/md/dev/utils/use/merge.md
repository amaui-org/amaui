

## API

#### IOptions

```ts
interface IOptions {
    copy?: boolean;
    merge?: {
        array?: boolean;
    };
}
```

#### merge

```ts
const merge: <T extends unknown>(target: T, source: any, options_?: IOptions) => T;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: matchRoute",
      "to": "/dev/utils/use/matchRoute"
    },
    "next": {
      "label": "Utils: models",
      "to": "/dev/utils/use/models"
    }
  }
}~