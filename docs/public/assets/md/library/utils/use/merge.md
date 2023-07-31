
# merge

Merges 2 objects together, only adding to the first object what it doesn't have already from the second object.

It updates the first object in memory, and returns the same object.

```ts
const value = { a: 1114 };
const value1 = { a1: { a: 114 } };

const merged = merge(value, value1);

merged;
merged === value;

// { a: 1114, a1: { a: 114 } };
// true
```

### Options

#### copy

If true makes a copy of the value of the second object's property, when adding it to the first object's property as a value.

#### merge

##### array

If true, allows merging of array values as well.

## API

#### IOptions

```ts
interface IOptions {
    // default: false
    copy?: boolean;
    merge?: {
        // default: false
        array?: boolean;
    };
}
```

#### merge

```ts
// defaults
// options: interface IOptions
const merge: <T extends unknown>(target: T, source: any, options_?: IOptions) => T;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: matchRoute",
      "to": "/library/utils/use/matchRoute"
    },
    "next": {
      "label": "Utils: models",
      "to": "/library/utils/use/models"
    }
  }
}~
