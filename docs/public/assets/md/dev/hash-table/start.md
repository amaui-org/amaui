
# amaui hash table

Hash table data type & its methods.

### Use cases
- Indexing data
- Caching
- Storage for data, for efficient quering
- Storing relationships between data
- etc.

### Add

```sh
yarn add @amaui/hash-table
```

### Use

```ts
import AmauiHashTable from '@amaui/hash-table';

// Make a new hash table instance
const amauiHashTable = new AmauiHashTable();

// Add values
amauiHashTable.set('a', 14).set('a1', 114);

amauiHashTable.get('a');
// 14

amauiHashTable.get('a14');
// undefined

// Remove
amauiHashTable.remove('a');
// true

amauiHashTable.get('a');
// undefined
```

### Dev

Install

```sh
yarn
```

Test

```sh
yarn test
```

### Prod

Build

```sh
yarn build
```

~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Graph: Start",
      "to": "/dev/graph/start"
    },
    "next": {
      "label": "Hash Table: Use",
      "to": "/dev/hash-table/use"
    }
  }
}~
