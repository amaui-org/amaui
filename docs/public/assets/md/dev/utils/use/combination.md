

## API

#### TCombination

```ts
type TCombination = Array<any> | (() => IterableIterator<any>);
```

#### ICombinationOptions

```ts
interface ICombinationOptions {
    items?: number;
    response?: 'array' | 'yield';
}
```

#### combination

```ts
default function combination(value_: any[], items_?: number, options_?: ICombinationOptions): TCombination;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: colorToRgb",
      "to": "/dev/utils/use/colorToRgb"
    },
    "next": {
      "label": "Utils: combinationWithRepetition",
      "to": "/dev/utils/use/combinationWithRepetition"
    }
  }
}~