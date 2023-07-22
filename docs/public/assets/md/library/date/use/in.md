
# In

Returns how long until date is from now, in a nicely formated string (optional, default true).

You can provide both to, and from date.

```ts
const amauiDate = new AmauiDate(new Date().getTime() + (44 * 1000));

In(amauiDate);

// 44 seconds
```

### withPrefix

```ts
const amauiDate = new AmauiDate(new Date().getTime() + (44 * 1000));

In(amauiDate);

// in 44 seconds
```

## API

#### In

```ts
default function In(to?: AmauiDate, withPrefix?: boolean, from?: AmauiDate): string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: getTimezoneOffset",
      "to": "/dev/date/use/getTimezoneOffset"
    },
    "next": {
      "label": "Date: is",
      "to": "/dev/date/use/is"
    }
  }
}~
