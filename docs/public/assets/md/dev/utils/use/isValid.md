
# isValid

Used to validate various use case values.

```ts
isValid('uuid');

// true
```

### Options

Options are explained with types below, where they are used.

### Type

- date
- uuid
- binary-string
- hexadecimal-string
- url
- url-path
- compare (options: valueA, valueB, operator)
- semver
- semver-compare (options: valueA, valueB, operator)
- timestamp
- mobile
- email
- hash
- color-rgb
- color-hex
- color-hsl
- json
- min (options: min)
- max (options: max)
- min-max (options: min, max)
- same-origin
- js-chunk
- http-method
- base64
- datauri


## API

#### IOptions

```ts
interface IOptions {
    variant?: string;
    min?: number;
    max?: number;
    valueA?: any;
    valueB?: any;
    operator?: 'less-than' | 'less-than-equal' | 'equal' | 'not-equal' | 'array-all' | 'array-some' | 'starts-with' | 'contains' | 'greater-than-equal' | 'greater-than';
}
```

#### isValid

```ts
default function isValid(type: string, value?: any, options_?: IOptions): any;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: isState",
      "to": "/dev/utils/use/isState"
    },
    "next": {
      "label": "Utils: lighten",
      "to": "/dev/utils/use/lighten"
    }
  }
}~
