
# try

Method as one liner for try/catch block.

```ts
Try(() => 1114);

// 1114
```

### Options

#### log

If true, it will log the catch error, by default it's false.

## API

#### IOptions

```ts
interface IOptions {
    log?: boolean;
}
```

#### Try

```ts
const Try: (value: () => any, options_?: IOptions) => any;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: to",
      "to": "/dev/utils/use/to"
    },
    "next": {
      "label": "Utils: unflattenObject",
      "to": "/dev/utils/use/unflattenObject"
    }
  }
}~
