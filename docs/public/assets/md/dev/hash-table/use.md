

### API

#### TAmauiHashTableValue

```ts
type TAmauiHashTableValue = any;
```

#### AmauiHashTable

```ts
default class AmauiHashTable {
    value: Array<[string?, TAmauiHashTableValue?]>;
    length: number;
    limit: number;
    constructor(limit?: number);
    hash(property: string): number;
    get(property: string): TAmauiHashTableValue;
    set(property: string, value: TAmauiHashTableValue): AmauiHashTable;
    remove(property: string): boolean;
    clear(): AmauiHashTable;
}
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
}~
