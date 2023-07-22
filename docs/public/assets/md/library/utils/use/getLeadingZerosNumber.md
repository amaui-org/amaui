
# getLeadingZerosNumber

Returns a value number, as a string with leading zeros.

```ts
getLeadingZerosNumber(4);
getLeadingZerosNumber(14);

// 04
// 14
```

### Options

#### leadingZeros

Adds how many leading zeros number should have, if it's in thousands add 3, so all numbers less than 1000 will have padded 0's in front of the number.

```ts
getLeadingZerosNumber(4, { leadingZeros: 3 });
getLeadingZerosNumber(14, { leadingZeros: 3 });
getLeadingZerosNumber(114, { leadingZeros: 3 });
getLeadingZerosNumber(1114, { leadingZeros: 3 });

// 0004
// 0014
// 0114
// 1114
```

## API

#### IOptions

```ts
interface IOptions {
    // default: 1
    leadingZeros?: number;
}
```

#### getLeadingZerosNumber

```ts
// defaults
// options: interface IOptions
const getLeadingZerosNumber: (value_: number, options_?: IOptions) => string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: getID",
      "to": "/dev/utils/use/getID"
    },
    "next": {
      "label": "Utils: getLuminance",
      "to": "/dev/utils/use/getLuminance"
    }
  }
}~
