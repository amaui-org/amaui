
# clamp

If the value is less than minimum provided, minimum value is returned, if value is larger than maximum provided, maximum value is returned, else value is returned.

```ts
clamp(1, -14, 14);
clamp(1, 4, 14);
clamp(140, 1, 14);

// 1
// 4
// 14
```

## API

#### clamp

```ts
// defaults
// min: Number.MIN_SAFE_INTEGER
// max: Number.MAX_SAFE_INTEGER
const clamp: (value: number, min?: number, max?: number) => number;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: checkObjectFilters",
      "to": "/dev/utils/use/checkObjectFilters"
    },
    "next": {
      "label": "Utils: cleanValue",
      "to": "/dev/utils/use/cleanValue"
    }
  }
}~
