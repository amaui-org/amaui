
# ago

Returns how long ago date was from now, in a nicely formated string (optional, default true).

```ts
const amauiDate = new AmauiDate(new Date().getTime() - (44 * 1000));

ago(amauiDate);

// 44 seconds ago
```

## API

#### ago

```ts
default function ago(amauiDate?: AmauiDate, withSufix?: boolean): string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: add",
      "to": "/library/date/use/add"
    },
    "next": {
      "label": "Date: AmauiDate",
      "to": "/library/date/use/AmauiDate"
    }
  }
}~
