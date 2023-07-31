
# is

Method to validate a value.

```ts
is('string', 'text');

// true
```

### Type

- string
- number
- boolean
- array
- object
- object-like (Map, null, WeakMap, Date, etc.)
- class
- function
- async
- map
- weakmap
- set
- weakset
- promise
- int8array
- uint8array
- uint8clampedarray
- int16array
- uint16array
- int32array
- uin32array
- float32array
- float64array
- bigint64array
- biguint64array
- typedarray
- dataview
- arraybuffer
- sharedarraybuffer
- symbol
- error
- date
- regexp
- arguments
- null
- undefined
- blob
- buffer
- element
- simple
- not-array-object

## API

#### IOptions

```ts
interface IOptions {
    // Used for type element
    // values: undefined, 'html', 'element', 'node', 'react'
    variant?: string;
}
```

#### is

```ts
default function is(type: string, value?: any, options_?: IOptions): any;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: imageToPalette",
      "to": "/library/utils/use/imageToPalette"
    },
    "next": {
      "label": "Utils: isBrowser",
      "to": "/library/utils/use/isBrowser"
    }
  }
}~
