
# format

Formats an AmauiDate based on a format string.

You can find format options in formats documentation page.

```ts
const amauiDate = new AmauiDate('2014-04-14T14:04:14.147');

format(amauiDate, 'MM-DD-YYYY HH:mm:ss.SSS');

// '04-14-2014 14:04:14.147'
```

### Constants

You can add any constant, word, character, etc. within the format string, that won't be affected during formatting.

You can do it by wrapping it in one of the following, `''`, `""`, `{}` or `[]`;

```ts
const amauiDate = new AmauiDate('2014-04-14T14:04:14.147');

format(amauiDate, "MM-DD-YYYY '🙂' HH:mm:ss.SSS");

// '04-14-2014 🙂 14:04:14.147'
```

## API

#### format

```ts
default function format(amauiDate?: AmauiDate, value_?: string): string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Date: endOf",
      "to": "/dev/date/use/endOf"
    },
    "next": {
      "label": "Date: formats",
      "to": "/dev/date/use/formats"
    }
  }
}~
