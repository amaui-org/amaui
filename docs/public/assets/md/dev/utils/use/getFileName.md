
# getFileName

Returns name of the file, with some additional options for name parsing.

```ts
getFileName(file);

// Main image
```

### Options

Explained with comments in the API below.

## API

#### IOptions

```ts
interface IOptions {
    // Adds a prefix to the name
    prefix?: string;
    // Adds a sufix to the name
    sufix?: string;
    // Cleans the string using cleanValue util method
    // default: true
    clean?: boolean;
    // Capitalizes the string using capitalize util method
    // default: true
    capitalize?: boolean;
    // returns name with the extension
    withExt?: boolean;
}
```

#### getFileName

```ts
// defaults
// options: interface IOptions
const getFileName: (file: File, options_?: IOptions) => string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: getEnvironment",
      "to": "/dev/utils/use/getEnvironment"
    },
    "next": {
      "label": "Utils: getGoogleFontsURL",
      "to": "/dev/utils/use/getGoogleFontsURL"
    }
  }
}~
