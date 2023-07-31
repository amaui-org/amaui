
# fibonacci

Fibonacci method.

### Options

#### cache

Whether to cache results or not, if yes, returning responses for already calculated value will be instant, default true.

### Example

```ts
fibonacci(14);

// 377
```

## API

#### IFibonacciOptions

```ts
interface IFibonacciOptions {
    cache?: boolean;
}
```

#### fibonacci

```ts
default function fibonacci(value: number, options?: IFibonacciOptions): number;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Algorithms: factorialRecursive",
      "to": "/library/algorithms/use/factorialRecursive"
    },
    "next": {
      "label": "Algorithms: fibonacciRecursive",
      "to": "/library/algorithms/use/fibonacciRecursive"
    }
  }
}~
