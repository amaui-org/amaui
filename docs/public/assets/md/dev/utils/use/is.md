

### API

#### IOptions

```ts
interface IOptions {
    variant?: string;
    min?: number;
    max?: number;
    valueA?: any;
    valueB?: any;
    operator?: 'less-than' | 'less-than-equal' | 'equal' | 'not-equal' | 'array-all' | 'array-some' | 'starts-with' | 'contains' | 'greater-than-equal' | 'greater-than';
}
```

#### is

```ts
default function is(type: string, value?: any, options_?: IOptions): any;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: imageToPalette",
      "to": "/dev/utils/use/imageToPalette"
    },
    "next": {
      "label": "Utils: isBrowser",
      "to": "/dev/utils/use/isBrowser"
    }
  }
}~