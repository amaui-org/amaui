
### Add

```sh
yarn add @amaui/date
```

### Use

```ts
import { AmauiDate, format } from '@amaui/date';

// Make a new AmauiDate instance
// with an optional initial value
const amauiDate = new AmauiDate('2014-04-14T14:04:14.147');

// Value
amauiDate.value;

// a Date instance, Mon Apr 14 2014 14:04:14 GMT+0200 (Central European Summer Time)

// Format
// with various ways to add regular text and variables
format(amauiDate, "MM-DD-YYYY '🙂' HH:mm:ss.SSS");

// '04-14-2014 🙂 14:04:14.147'
```

### Dev

Install

```sh
yarn
```

Test

```sh
yarn test
```

### Prod

Build

```sh
yarn build
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Cookie: Start",
      "to": "/dev/cookie/start"
    },
    "next": {
      "label": "Date: add",
      "to": "/dev/date/use/add"
    }
  }
}~
