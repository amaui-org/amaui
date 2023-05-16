
# copy

Used to make a deep copy of any value of reference type, object, array, etc.

Second argument values is used as a WeakMap internally to keep track of already copied, to prevent circular value copy. \
If circular value occurs the second time, undefined is returned for it.

```ts
const value = { a: 14, ad: { a: 114 } };

const valueCopied = copy(value);

valueCopied;

// { a: 14, ad: { a: 114 } }
```

## API

#### copy

```ts
const copy: (value: any, values_?: WeakSet<any>) => any;
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: combinationWithRepetition",
      "to": "/dev/utils/use/combinationWithRepetition"
    },
    "next": {
      "label": "Utils: copyToClipboard",
      "to": "/dev/utils/use/copyToClipboard"
    }
  }
}~
