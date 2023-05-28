
# amaui graph

Graph value type & its methods.

### Use cases
- Social media network
- Maps, roads connections, GPS
- Search result relevancy algorithm
- etc.

### Add

```sh
yarn add @amaui/graph
```

### Use

```ts
import AmauiGraph from '@amaui/graph';

// Make a new graph instance
const amauiGraph = new AmauiGraph({ weighted: true });

// Add nodes
amauiGraph
  .addNode('a')
  .addNode('b')
  .addNode('c')
  .addNode('d')
  .addNode('e')
  .addNode('f')
  .addNode('g');

// Add connections
amauiGraph
  .addConnection('a', 'b', 2)
  .addConnection('a', 'c', 7)
  .addConnection('b', 'd', 5)
  .addConnection('c', 'd', 7)
  .addConnection('d', 'e', 14)
  .addConnection('d', 'f', 11)
  .addConnection('e', 'f', 4)
  .addConnection('f', 'g', 2)
  .addConnection('e', 'g', 4);

// matrix
amauiGraph.array;

// [
//      a  b  c  d  e  f  g
//   a [0, 2, 7, 0, 0, 0, 0],
//   b [2, 0, 0, 5, 0, 0, 0],
//   c [7, 0, 0, 7, 0, 0, 0],
//   d [0, 5, 7, 0, 14, 11, 0],
//   e [0, 0, 0, 14, 0, 4, 4],
//   f [0, 0, 0, 11, 4, 0, 2],
//   g [0, 0, 0, 0, 4, 2, 0]
// ]

// Shortest path
amauiGraph.shortestPath('a', 'g');

// {
//   distance: 20,
//   path: 'a-b-d-f-g'
// }
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
      "label": "Errors: Start",
      "to": "/dev/errors/start"
    },
    "next": {
      "label": "Graph: Use",
      "to": "/dev/graph/use"
    }
  }
}~
