
# asyncMethodRetry

Invokes the async method, and retries if it fails, with provided number of retries, and provided timeout time in milliseconds.

If it resolves, it resolves the value that the method returns, and if it fails, it returns the error that got caught.

```ts
const method = async () => { };

try {
  const response = await asyncMethodRetry(method, 4, 140);

  response;

  // ...
}
catch (error) {
  console.log(error);
}
```

## API

#### asyncMethodRetry

```ts
// defaults
// retries: 4
// timeout: 40
const asyncMethodRetry: (method: () => Promise<any>, retries?: number, timeout?: number) => Promise<any>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: arrayToParts",
      "to": "/dev/utils/use/arrayToParts"
    },
    "next": {
      "label": "Utils: binaryStringToHexadecimal",
      "to": "/dev/utils/use/binaryStringToHexadecimal"
    }
  }
}~
