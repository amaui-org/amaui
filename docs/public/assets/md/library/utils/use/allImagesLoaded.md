
# allImagesLoaded

Use this method to get a response when all images that are at that moment on the page, have either loaded, or failed loading, meaning either way completed loading.

In the server it returns false, as there is no DOM to check for images.

```ts
const response = await allImagesLoaded();

response;

// true or false
```

## API

#### allImagesLoaded

```ts
const allImagesLoaded: () => Promise<boolean | number> | boolean;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: Start",
      "to": "/dev/utils/start"
    },
    "next": {
      "label": "Utils: alpha",
      "to": "/dev/utils/use/alpha"
    }
  }
}~
