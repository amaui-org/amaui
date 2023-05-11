

### API

#### IPagination

```ts
interface IPagination extends ILine {
    tonal?: TTonal;
    color?: TColor;
    version?: TVersion;
    elevation?: boolean;
    size?: TSize;
    value?: number;
    valueDefault?: number;
    onChange?: (value: number) => any;
    total?: number;
    boundary?: number;
    middle?: number;
    first?: boolean;
    before?: boolean;
    next?: boolean;
    last?: boolean;
    renderItem?: (value: number, item: string | number, index: number) => TElement;
    IconFirst?: TElementReference;
    IconBefore?: TElementReference;
    IconNext?: TElementReference;
    IconLast?: TElementReference;
}
```

#### Pagination

```ts
const Pagination: React.ForwardRefExoticComponent<Omit<IPagination, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "AMQP: Start",
      "to": "/dev/amqp/start"
    },
    "next": {
      "label": "API: Use",
      "to": "/dev/api/use"
    }
  }
}
