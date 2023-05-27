
# factorialRecursive

Factorial recurrsive method.

### Options

#### cache

Whether to cache results or not, if yes, returning responses for already calculated value will be instant, default true.

### Example

```ts
factorialRecursive(4);

// 24
```

## API

#### IFactorialRecursiveOptions

```ts
interface IFactorialRecursiveOptions {
    cache?: boolean;
}
```

#### factorialRecursive

```ts
default function factorialRecursive(value: number, options?: IFactorialRecursiveOptions): number;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Algorithms: factorial",
      "to": "/dev/algorithms/use/factorial"
    },
    "next": {
      "label": "Algorithms: fibonacci",
      "to": "/dev/algorithms/use/fibonacci"
    }
  }
}~
