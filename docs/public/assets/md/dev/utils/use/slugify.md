
# slugify

Slugifies the string value, to use as a valid url value.

```ts
slugify('a 4 , ; a -- a   a');

// a-4-a-a-a
```

### Options

#### lowercase

If true, the entire value will be made into a lowercase value.

## API

#### IOptions

```ts
interface IOptions {
    // default: true
    lowercase?: boolean;
}
```

#### slugify

```ts
// defaults
// options: interface IOptions
const slugify: (value_: string, options_?: IOptions) => any;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: simpleNormalize",
      "to": "/dev/utils/use/simpleNormalize"
    },
    "next": {
      "label": "Utils: stringify",
      "to": "/dev/utils/use/stringify"
    }
  }
}~
