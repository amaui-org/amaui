
# classNames

Util method to make a className from multiple values, value expressions.

### Use

```ts
classNames(['a', { a1: true, a2: { a4: true, a3: false } }, true && 'a5', false && 'a6', 'a7']);

// 'a a1 a4 a5 a7'
```

## API

#### classNames

```ts
function classNames(value?: any, prefix?: string, array?: boolean): string;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Style: AmauiTheme",
      "to": "/library/style/use/AmauiTheme"
    },
    "next": {
      "label": "Style: cli",
      "to": "/library/style/use/cli"
    }
  }
}~
