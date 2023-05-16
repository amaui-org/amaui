
# copyToClipboard

Uses new clipboard API to copy any value, with a fallback method to the clipboard.

If value is not a string, it's stringified into a string value.

It might need browser permission from the user to access clipboard methods if new clipboard API is used.

```ts
const value = { a: 14, ad: { a: 114 } };

await copyToClipboard(value);

// { a: 14, ad: { a: 114 } }
```

## API

#### copyToClipboard

```ts
const copyToClipboard: (value_: any) => Promise<void>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: copy",
      "to": "/dev/utils/use/copy"
    },
    "next": {
      "label": "Utils: countries",
      "to": "/dev/utils/use/countries"
    }
  }
}~
