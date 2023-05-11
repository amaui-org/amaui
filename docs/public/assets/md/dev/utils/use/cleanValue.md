

### API

#### IOptions

```ts
interface IOptions {
    filters?: string[];
    className?: boolean;
    cammelCaseTransform?: boolean;
    url?: boolean;
    replaceWith?: string;
    trim?: boolean;
    capitalize?: boolean;
    lowercase?: boolean;
}
```

#### optionsDefault

```ts
const optionsDefault: IOptions;
```

#### cleanValue

```ts
const cleanValue: (value_: string, options_?: IOptions) => string | any;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: clamp",
      "to": "/dev/utils/use/clamp"
    },
    "next": {
      "label": "Utils: colorToRgb",
      "to": "/dev/utils/use/colorToRgb"
    }
  }
}~