

### API

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

