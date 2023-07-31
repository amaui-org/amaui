
# stringify

Stringifies an object, using `JSON.stringify` method.

```ts
const value = { a: 1114 };

stringify(value, 2);

// {\n    "a": 1114\n}
```

### spaces

Spaces value passed into `JSON.stringify` method.

### replacer

Replacer method value passed into `JSON.stringify` method.


## API

#### stringify

```ts
// defaults
// spaces: 2
const stringify: (value_: any, spaces?: number, replacer?: (property: string, value: any) => any) => string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: slugify",
      "to": "/library/utils/use/slugify"
    },
    "next": {
      "label": "Utils: to",
      "to": "/library/utils/use/to"
    }
  }
}~
