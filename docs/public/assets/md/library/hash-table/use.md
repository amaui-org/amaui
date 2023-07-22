
# AmauiHashTable

Each hash represents a table of items, where each item is key, value pair.

When you add items with a key, value, key is hashed, and that key, value item gets added to that hash's array (table).

From there you can query based on a key, that key's hash's table for the item with the same key, to retrive its value.

### Options

#### limit

Limit for the number of entries in the hash table.

### Methods

#### set

Sets the value for a key.

```ts
const amauiHashTable = new AmauiHashTable();

amauiHashTable.set('a', 1114);
```

#### get

Gets the value for a key.

```ts
const amauiHashTable = new AmauiHashTable();

amauiHashTable.set('a', 1114);

amauiHashTable.get('a');

// 1114
```

#### remove

Removes the key, value for a key.

```ts
const amauiHashTable = new AmauiHashTable();

amauiHashTable.set('a', 1114);

amauiHashTable.get('a');

// 1114

amauiHashTable.remove('a');

amauiHashTable.get('a');

// undefined
```

#### clear

Resets the entire amaui hash table to its initial empty value.

```ts
const amauiHashTable = new AmauiHashTable();

amauiHashTable.set('a', 1114);

amauiHashTable.get('a');

// 1114

amauiHashTable.clear();

amauiHashTable.get('a');

amauiHashTable.length;

// undefined
// 0
```

### Other

#### hash

You can override, and make your own hash method.

The default hash method summarizes each character in the property string, where it replaces it with its UTF-16 character code in the number format.

```ts
const amauiHashTable = new AmauiHashTable();

amauiHashTable.set('a', 114).set('a1', 1114);

// indexes with values
[...Object.keys(amauiHashTable.value)];

// ['19', '97']
```

#### length

Length is the number of items in the amaui hash table.

```ts
 const amauiHashTable = new AmauiHashTable();

amauiHashTable.set('a1', 14).set('a14', 1114).set('a114', 1114);

amauiHashTable.length;

// 3
```

## API

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
      "label": "Hash table: Start",
      "to": "/dev/hash-table/start"
    },
    "next": {
      "label": "Heap: Start",
      "to": "/dev/heap/start"
    }
  }
}~
