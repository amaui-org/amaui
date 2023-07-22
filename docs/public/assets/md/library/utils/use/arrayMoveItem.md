
# arrayMoveItem

Moves array item from previous index position in that array, to the new position.

If new index is larger than the size of the array, values in between the last item in the array, and moved item, will be made into undefined values.

```ts
arrayMoveItem([1, 2, 3, 4], 1, 2);
arrayMoveItem([1, 2, 3, 4], 1, 7);

// [1, 3, 2, 4]
// [1, 3, 4, undefined, undefined, undefined, undefined, 2]
```

## API

#### arrayMoveItem

```ts
const arrayMoveItem: (value: any[], previousIndex: number, newIndex: number) => any[];
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Utils: alpha",
      "to": "/dev/utils/use/alpha"
    },
    "next": {
      "label": "Utils: arrayToParts",
      "to": "/dev/utils/use/arrayToParts"
    }
  }
}~
