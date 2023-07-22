
# download

Downloads a file with provided name, and data that can be uri encoded, or it's already a based64 value, and MIME type.

```ts
const data = ' ... base64 value ... ';

download('Some data', data);

// Download Some data.json started
```

## API

#### download

```ts
// defaults
// type: application/json
const download: (name: string, data: any, type?: string) => void;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: deserialize",
      "to": "/dev/utils/use/deserialize"
    },
    "next": {
      "label": "Utils: element",
      "to": "/dev/utils/use/element"
    }
  }
}~
