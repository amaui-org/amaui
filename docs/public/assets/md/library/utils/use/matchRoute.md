
# matchRoute

Matches a url based on the template path provided using external libarary `path-to-regexp`'s `match` method.

```ts
matchRoute(['/amaui/:id'], '/amaui/14');

// true
```

## API

#### matchRoute

```ts
const matchRoute: (value: string[], path: string) => boolean;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: lighten",
      "to": "/library/utils/use/lighten"
    },
    "next": {
      "label": "Utils: merge",
      "to": "/library/utils/use/merge"
    }
  }
}~
