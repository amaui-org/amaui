
# factorial

Factorial method.

### Options

#### cache

Whether to cache results or not, if yes, returning responses for already calculated value will be instant, default true.

### Example

```ts
factorial(4);

// 24
```

## API

#### IFactorialOptions

```ts
interface IFactorialOptions {
    cache?: boolean;
}
```

#### factorial

```ts
default function factorial(value: number, options?: IFactorialOptions): number;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Algorithms: bubbleSort",
      "to": "/library/algorithms/use/bubbleSort"
    },
    "next": {
      "label": "Algorithms: factorialRecursive",
      "to": "/library/algorithms/use/factorialRecursive"
    }
  }
}~
