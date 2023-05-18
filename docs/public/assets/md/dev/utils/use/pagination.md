
# pagination

Returns array of values that represent pagination, with various options.

```ts
pagination(14, 140, 4, 1);

// [1, 2, 3, 4, '...', 13, 14, 15, '...', 137, 138, 139, 140]
```

## API

#### pagination

```ts
const pagination: (value?: number, total?: number, boundary?: number, middle?: number) => any[];
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: order",
      "to": "/dev/utils/use/order"
    },
    "next": {
      "label": "Utils: parse",
      "to": "/dev/utils/use/parse"
    }
  }
}~
