
# decrypt

Using `crypto-js`'s `AES` algorithm, as an external dependency, synchronously decrypts any value with a private value provided.

Value will be deserialized into its value type.

```ts
decrypt('U2FsdGVkX19hGE5NkbhIULmrxE2nbFGShY8jeCQslYU=', 'a');

// { a: 1114 }
```

### Options

#### exception

If true, throws an exception if the private value is incorrect, and decryption fails.

If false, returns undefined, which is the default value.

## API

#### IOptions

```ts
interface IOptions {
    // default: false
    exception?: boolean;
}
```

#### decrypt

```ts
// defaults
// options: interface IOptions
const decrypt: (value_: string, privateValue: string, options_?: IOptions) => any | undefined | Error;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: decode",
      "to": "/dev/utils/use/decode"
    },
    "next": {
      "label": "Utils: deserialize",
      "to": "/dev/utils/use/deserialize"
    }
  }
}~
