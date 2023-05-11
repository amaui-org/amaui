

### API

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

#### combinationWithRepetition

```ts
default function combinationWithRepetition(value_: any[], items_?: number, options_?: ICombinationOptions): TCombination;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: combination",
      "to": "/dev/utils/use/combination"
    },
    "next": {
      "label": "Utils: copy",
      "to": "/dev/utils/use/copy"
    }
  }
}~