
# AmauiGraph

### Options

#### adjacency

Initial value of the graph.

#### direction

- `directed` when adding a connection only `from -> to` connection is added.
- `undirected` when adding a connection both `from -> to` & `to -> from` connections are added.

Default is `undirected`.

#### weighted

Connections can have a weight, default false;

### Methods

#### Add node

Adds a node.

```ts
const amauiGraph = new AmauiGraph();

amauiGraph.addNode('a').addNode('b').addNode('c').addNode('d').addNode('e').addNode('f').addNode('g');

amauiGraph.array;

// [
//    a  b  c  d  e  f  g
// a [0, 0, 0, 0, 0, 0, 0]
// b [0, 0, 0, 0, 0, 0, 0]
// c [0, 0, 0, 0, 0, 0, 0]
// d [0, 0, 0, 0, 0, 0, 0]
// e [0, 0, 0, 0, 0, 0, 0]
// f [0, 0, 0, 0, 0, 0, 0]
// g [0, 0, 0, 0, 0, 0, 0]
// ]
```

#### Add connection

Adds a connection betweek nodes, optionally a weighted one.

```ts
const amauiGraph = new AmauiGraph();

amauiGraph.addNode('a').addNode('b').addNode('c').addNode('d').addNode('e').addNode('f').addNode('g');

amauiGraph.addConnection('a', 'b').addConnection('a', 'c').addConnection('b', 'd').addConnection('c', 'd').addConnection('d', 'e').addConnection('d', 'f').addConnection('e', 'f').addConnection('f', 'g').addConnection('e', 'g');

amauiGraph.array;

// [
//    a  b  c  d  e  f  g
// a [0, 1, 1, 0, 0, 0, 0]
// b [1, 0, 0, 1, 0, 0, 0]
// c [1, 0, 0, 1, 0, 0, 0]
// d [0, 1, 1, 0, 1, 1, 0]
// e [0, 0, 0, 1, 0, 1, 1]
// f [0, 0, 0, 1, 1, 0, 1]
// g [0, 0, 0, 0, 1, 1, 0]
// ]
```

##### Connections weighted

```ts
const amauiGraph = new AmauiGraph({ weighted: true });

amauiGraph.addNode('a').addNode('b').addNode('c').addNode('d').addNode('e').addNode('f').addNode('g');

amauiGraph.addConnection('a', 'b', 2).addConnection('a', 'c', 7).addConnection('b', 'd', 5).addConnection('c', 'd', 7).addConnection('d', 'e', 14).addConnection('d', 'f', 11).addConnection('e', 'f', 4).addConnection('f', 'g', 2).addConnection('e', 'g', 4);

amauiGraph.array;

// [
//    a  b  c  d  e  f  g
// a [0, 2, 7, 0, 0, 0, 0]
// b [2, 0, 0, 5, 0, 0, 0]
// c [7, 0, 0, 7, 0, 0, 0]
// d [0, 5, 7, 0, 14, 11, 0]
// e [0, 0, 0, 14, 0, 4, 4]
// f [0, 0, 0, 11, 4, 0, 2]
// g [0, 0, 0, 0, 4, 2, 0]
// ]
```

#### Update connection

Updates an existing connection.

```ts
const amauiGraph = new AmauiGraph({ weighted: true });

amauiGraph.addNode('a').addNode('b').addNode('c').addNode('d').addNode('e').addNode('f').addNode('g');

amauiGraph.addConnection('a', 'b', 2).addConnection('a', 'c', 7).addConnection('b', 'd', 5).addConnection('c', 'd', 7).addConnection('d', 'e', 14).addConnection('d', 'f', 11).addConnection('e', 'f', 4).addConnection('f', 'g', 2).addConnection('e', 'g', 4);

amauiGraph.updateConnection('a', 'b', 4);

amauiGraph.array;

// [
//    a  b  c  d  e  f  g
// a [0, 4, 7, 0, 0, 0, 0]
// b [2, 0, 0, 5, 0, 0, 0]
// c [7, 0, 0, 7, 0, 0, 0]
// d [0, 5, 7, 0, 14, 11, 0]
// e [0, 0, 0, 14, 0, 4, 4]
// f [0, 0, 0, 11, 4, 0, 2]
// g [0, 0, 0, 0, 4, 2, 0]
// ]
```

#### Remove node

Removes a node, and all its connections, if it's undirectional, in all those nodes removes the connection to removed node as well.

```ts
const amauiGraph = new AmauiGraph({ weighted: true });

amauiGraph.addNode('a').addNode('b').addNode('c').addNode('d').addNode('e').addNode('f').addNode('g');

amauiGraph.addConnection('a', 'b', 2).addConnection('a', 'c', 7).addConnection('b', 'd', 5).addConnection('c', 'd', 7).addConnection('d', 'e', 14).addConnection('d', 'f', 11).addConnection('e', 'f', 4).addConnection('f', 'g', 2).addConnection('e', 'g', 4);

amauiGraph.removeNode('a');

amauiGraph.array;

// [
//    b  c  d  e  f  g
// b [0, 0, 5, 0, 0, 0]
// c [0, 0, 7, 0, 0, 0]
// d [5, 7, 0, 14, 11, 0]
// e [0, 0, 14, 0, 4, 4]
// f [0, 0, 11, 4, 0, 2]
// g [0, 0, 0, 4, 2, 0]
// ]
```

#### Remove connection

Removes a connection, if it's undirectional, removes the connection in both nodes.

```ts
const amauiGraph = new AmauiGraph({ weighted: true });

amauiGraph.addNode('a').addNode('b').addNode('c').addNode('d').addNode('e').addNode('f').addNode('g');

amauiGraph.addConnection('a', 'b', 2).addConnection('a', 'c', 7).addConnection('b', 'd', 5).addConnection('c', 'd', 7).addConnection('d', 'e', 14).addConnection('d', 'f', 11).addConnection('e', 'f', 4).addConnection('f', 'g', 2).addConnection('e', 'g', 4);

amauiGraph.removeConnection('a', 'b');

amauiGraph.array;

// [
//    a  b  c  d  e  f  g
// a [0, 0, 7, 0, 0, 0, 0]
// b [0, 0, 0, 5, 0, 0, 0]
// c [7, 0, 0, 7, 0, 0, 0]
// d [0, 5, 7, 0, 14, 11, 0]
// e [0, 0, 0, 14, 0, 4, 4]
// f [0, 0, 0, 11, 4, 0, 2]
// g [0, 0, 0, 0, 4, 2, 0]
// ]
```

#### Array

Returns array representation of the graph.

```ts
const amauiGraph = new AmauiGraph({ weighted: true });

amauiGraph.addNode('a').addNode('b').addNode('c').addNode('d').addNode('e').addNode('f').addNode('g');

amauiGraph.addConnection('a', 'b', 2).addConnection('a', 'c', 7).addConnection('b', 'd', 5).addConnection('c', 'd', 7).addConnection('d', 'e', 14).addConnection('d', 'f', 11).addConnection('e', 'f', 4).addConnection('f', 'g', 2).addConnection('e', 'g', 4);

amauiGraph.array;

// [
//    a  b  c  d  e  f  g
// a [0, 2, 7, 0, 0, 0, 0]
// b [2, 0, 0, 5, 0, 0, 0]
// c [7, 0, 0, 7, 0, 0, 0]
// d [0, 5, 7, 0, 14, 11, 0]
// e [0, 0, 0, 14, 0, 4, 4]
// f [0, 0, 0, 11, 4, 0, 2]
// g [0, 0, 0, 0, 4, 2, 0]
// ]
```

#### shortestPath

Now this is the coolest part, algorithm that easily gives us the shortest path, and it's summarized weight (distance) for that path, between two nodes.

```ts
const amauiGraph = new AmauiGraph({ weighted: true });

amauiGraph.addNode('a').addNode('b').addNode('c').addNode('d').addNode('e').addNode('f').addNode('g');

amauiGraph.addConnection('a', 'b', 2).addConnection('a', 'c', 7).addConnection('b', 'd', 5).addConnection('c', 'd', 7).addConnection('d', 'e', 14).addConnection('d', 'f', 11).addConnection('e', 'f', 4).addConnection('f', 'g', 2).addConnection('e', 'g', 4);

amauiGraph.shortestPath('a', 'g');

// {
//   distance: 20,
//   path: 'a-b-d-f-g'
// }
```

#### Breadth first search

Breadth first search. \
Vists first its nearest nodes, and then for those nodes their nearest nodes, etc.

```ts
const amauiGraph = new AmauiGraph({ weighted: true });

amauiGraph.addNode('a').addNode('b').addNode('c').addNode('d').addNode('e').addNode('f').addNode('g');

amauiGraph.addConnection('a', 'b', 2).addConnection('a', 'c', 7).addConnection('b', 'd', 5).addConnection('c', 'd', 7).addConnection('d', 'e', 14).addConnection('d', 'f', 11).addConnection('e', 'f', 4).addConnection('f', 'g', 2).addConnection('e', 'g', 4);

const response = [];

amauiGraph.bfs('a', item => response.push(item));

// [
//   'a',
//   ['b', 2],
//   ['c', 7],
//   ['d', 5],
//   ['e', 14],
//   ['f', 11],
//   ['g', 4]
// ]
```

#### Depth first search

Depth first search. \
Vists first all nodes in connection with one of its nearest nodes in depth, then the same for the next nearest node, etc.

```ts
const amauiGraph = new AmauiGraph({ weighted: true });

amauiGraph.addNode('a').addNode('b').addNode('c').addNode('d').addNode('e').addNode('f').addNode('g');

amauiGraph.addConnection('a', 'b', 2).addConnection('a', 'c', 7).addConnection('b', 'd', 5).addConnection('c', 'd', 7).addConnection('d', 'e', 14).addConnection('d', 'f', 11).addConnection('e', 'f', 4).addConnection('f', 'g', 2).addConnection('e', 'g', 4);

const response = [];

amauiGraph.dfs('a', item => response.push(item));

// [
//   'a',
//   ['c', 7],
//   ['d', 7],
//   ['f', 11],
//   ['g', 2],
//   ['e', 4],
//   ['b', 5]
// ]
```

#### clear

Resets the graph to its initial empty value.

```ts
const amauiGraph = new AmauiGraph({ weighted: true });

amauiGraph.addNode('a').addNode('b').addNode('c').addNode('d').addNode('e').addNode('f').addNode('g');

amauiGraph.addConnection('a', 'b', 2).addConnection('a', 'c', 7).addConnection('b', 'd', 5).addConnection('c', 'd', 7).addConnection('d', 'e', 14).addConnection('d', 'f', 11).addConnection('e', 'f', 4).addConnection('f', 'g', 2).addConnection('e', 'g', 4);

amauiGraph.array;

// [
//    a  b  c  d  e  f  g
// a [0, 2, 7, 0, 0, 0, 0]
// b [2, 0, 0, 5, 0, 0, 0]
// c [7, 0, 0, 7, 0, 0, 0]
// d [0, 5, 7, 0, 14, 11, 0]
// e [0, 0, 0, 14, 0, 4, 4]
// f [0, 0, 0, 11, 4, 0, 2]
// g [0, 0, 0, 0, 4, 2, 0]
// ]

amauiGraph.clear();

amauiGraph.array;

// []
```

### Properties

#### nodes

Number of nodes in the graph.

```ts
const amauiGraph = new AmauiGraph({ weighted: true });

amauiGraph.addNode('a').addNode('b').addNode('c').addNode('d').addNode('e').addNode('f').addNode('g');

amauiGraph.addConnection('a', 'b', 2).addConnection('a', 'c', 7).addConnection('b', 'd', 5).addConnection('c', 'd', 7).addConnection('d', 'e', 14).addConnection('d', 'f', 11).addConnection('e', 'f', 4).addConnection('f', 'g', 2).addConnection('e', 'g', 4);

amauiGraph.nodes;

// 7
```

#### connections

Number of connections in the graph.

```ts
const amauiGraph = new AmauiGraph({ weighted: true });

amauiGraph.addNode('a').addNode('b').addNode('c').addNode('d').addNode('e').addNode('f').addNode('g');

amauiGraph.addConnection('a', 'b', 2).addConnection('a', 'c', 7).addConnection('b', 'd', 5).addConnection('c', 'd', 7).addConnection('d', 'e', 14).addConnection('d', 'f', 11).addConnection('e', 'f', 4).addConnection('f', 'g', 2).addConnection('e', 'g', 4);

amauiGraph.connections;

// 18
```

## API

#### TAmauiGraphNode

```ts
type TAmauiGraphNode = string | [string, number];
```

#### TAmauiGraphAdjacency

```ts
type TAmauiGraphAdjacency = Record<string, Array<TAmauiGraphNode>>;
```

#### TAmauiGraphDirection

```ts
type TAmauiGraphDirection = 'directed' | 'undirected';
```

#### IAmauiGraphShortestPath

```ts
interface IAmauiGraphShortestPath {
    distance: number;
    path: string;
}
```

#### IAmauiGraphOptions

```ts
interface IAmauiGraphOptions {
    adjacency?: TAmauiGraphAdjacency;
    direction?: TAmauiGraphDirection;
    weighted?: boolean;
}
```

#### AmauiGraph

```ts
default class AmauiGraph {
    adjacency: TAmauiGraphAdjacency;
    direction: TAmauiGraphDirection;
    weighted: boolean;
    nodes: number;
    connections: number;
    constructor(options?: IAmauiGraphOptions);
    get array(): Array<Array<number>>;
    addNode(name: string): AmauiGraph;
    addConnection(from: string, to: string, value?: number): AmauiGraph;
    updateConnection(from: string, to: string, value: number): AmauiGraph;
    removeNode(name: string): AmauiGraph;
    removeConnection(from: string, to: string): AmauiGraph;
    shortestPath(from: string, to: string): IAmauiGraphShortestPath;
    bfs(from: string, method: TMethod): AmauiGraph;
    dfs(from: string, method: TMethod): AmauiGraph;
    clear(): AmauiGraph;
}
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "Graph: Start",
      "to": "/dev/graph/start"
    },
    "next": {
      "label": "Hash table: Start",
      "to": "/dev/hash-table/start"
    }
  }
}~
