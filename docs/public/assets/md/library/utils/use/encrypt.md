
# encrypt

Using `crypto-js`'s `AES` algorithm, as an external dependency, synchronously encrypts any value with a private value provided.

If value is not a string, it will be serialized prior to encryption.

```ts
encrypt({ a: 1114 }, 'a');

// U2FsdGVkX19hGE5NkbhIULmrxE2nbFGShY8jeCQslYU=
```

## API

#### encrypt

```ts
const encrypt: (value_: any, privateValue: string) => string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: encode",
      "to": "/library/utils/use/encode"
    },
    "next": {
      "label": "Utils: equalDeep",
      "to": "/library/utils/use/equalDeep"
    }
  }
}~
