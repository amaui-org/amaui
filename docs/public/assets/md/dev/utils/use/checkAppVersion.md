
# checkAppVersion

Relies on few things:

1) You having `/meta.json` resource built (while building your front end app), with its newest built version inside ie.

```json
{
  "version": "1.1.14"
}
```

2) In your front end app, also add to the window your current app version ie.

```ts
window.AMAUI = {
  app: {
    version: '1.1.14'
  }
};
```

Once you have both above working, then using this method, it will with provided amount of retries, get the `/meta.json` file, and read from it the version on the server, and from your local variable as in 2) your local version, if they don't match, based on the second provided argument if true, it will clear all local cache, and hard reload the app.

```ts
await checkAppVersion(4, true);
```

#### Why?

In browser there are many use cases, when you deploy your front end app, and after user enters the app in his browser, he won't necessarily get the newest app that you just deployed, as ie. there might be domain level cache, browser cache, etc. that will not properly always show the user the newest deployed app version.

This method makes sure user will always 100% be using the newest deployed app version.

## API

#### getMeta

```ts
const getMeta: () => Promise<any>;
```

#### refreshCacheAndReload

```ts
const refreshCacheAndReload: (reload?: boolean) => Promise<void>;
```

#### checkRoot

```ts
const checkRoot: (rootId: string, timeout?: number, reload?: boolean) => Promise<boolean>;
```

#### checkAppVersion

```ts
// defaults
// retries: 5
// reload: true
const checkAppVersion: (retries?: number, reload?: boolean) => Promise<boolean>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: castParam",
      "to": "/dev/utils/use/castParam"
    },
    "next": {
      "label": "Utils: checkObjectFilters",
      "to": "/dev/utils/use/checkObjectFilters"
    }
  }
}~
