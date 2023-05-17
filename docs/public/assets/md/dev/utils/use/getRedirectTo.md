
# getRedirectTo

Returns window path + search part, encoded.

```ts
getRedirectTo();

// %2Fdev%2Fui-react%2Fstart
```

### Why?

Use case when someone lands on an app url, but isn't signed in, so we save this redirect url, and add it to the sign in url \ ie. `https://amaui.me/signin?redirect_to=%2Fdev%2Fui-react%2Fstart`, and once user signs in, we can redirect him back to the initial url he landed on.

## API

#### getRedirectTo

```ts
// defaults
// value: window.location.pathname + window.location.search
const getRedirectTo: (value?: string) => string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: getQueryParams",
      "to": "/dev/utils/use/getQueryParams"
    },
    "next": {
      "label": "Utils: getStringVariables",
      "to": "/dev/utils/use/getStringVariables"
    }
  }
}~
