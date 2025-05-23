---
title: Graph
sidebar:
  order: 6
slug: data-structures-and-algorithms/data-structures/graph
prev: true
next: true
---

Consists of a set of nodes and a set of edges that connect
pairs of nodes.

Used in many different domains to model complex relationships and solve various computational problems. Such as social networks, transportation networks, and web page links.

### Node

A fundamental point or unit. Aka. vertex. Holds a value.

### Edge

Connects a pair of nodes. Aka. link. Optionally has an associated _weight_. Can
either be directed (one-way) or undirected (two-way).

### Adjacency

Two nodes are adjacent **iff** they are connected by an edge.

### Degree

Number of edges connected to a vertex. In case of directed graphs, in-degree and
out-degree are defined.

#### In-degree

Number of edges that point towards a vertex.

#### Out-degree

Number of edges that point away from a vertex.

### Path

A sequence of vertices where each adjacent pair is connected by an edge.

#### Simple path

A path that does not visit any vertex more than once.

#### Path cost

The sum of the weights of the edges in a path.

### Reachability

A vertex $U$ is reachable from vertex $V$ **iff** there exists a path from $U$ to
$V$.

### Cycle

A path that starts and ends at the same vertex without repeating any edges or
vertices.

### Complete

A graph is complete **iff** every pair of distinct vertices is connected by a
unique edge.

```math
E = \binom{V}{2} = \frac{V(V-1)}{2}
```

### Strongly connected

A directed graph is strongly connected **iff** there is a directed path from every vertex
to every other vertex.

```math
E \ge V - 1
```

### Subgraph

A subset of the vertices and edges of a graph.

### Dense Graph

A graph is dense **iff** the number of edges is close to the maximum possible
number of edges.

### Sparse Graph

A graph is sparse **iff** the number of edges is close to the minimum possible
number of edges.

## Implementation

### Adjacency Matrix

A 2-dimensional array of size $V \times V$. The rows and columns represent the vertices of the
graph. The value at each cell indicates whether there is an edge between the
corresponding vertices. Better for dense graph. $ $

### Adjacency List

A collection of linked lists or arrays where each element represents a vertex
and contains a list of its adjacent vertices. Better for sparse graph.

### Incidence Matrix

A 2-dimensional array of size $V \times E$. The rows represent the vertices and the columns represent the edges.
The value at each cell indicates whether the corresponding vertex is incident to the corresponding edge. $ $

## Operations

- Searching
  - [Depth First Search](/data-structures-and-algorithms/algorithms/searching/#depth-first-search-dfs)
  - [Breadth First Search](/data-structures-and-algorithms/algorithms/searching/#breadth-first-search-bfs)
- Shortest Path between 2 vertices
  - [Dijkstra's Algorithm](/data-structures-and-algorithms/algorithms/dijkstras-algorithm/)
  - [Bellman-Ford Algorithm](/data-structures-and-algorithms/algorithms/bellman-ford-algorithm)

## Types

### Undirected graph

Edges have no direction. The edges are not ordered.

### Directed graph

Edges have a direction. The edges are ordered pairs of nodes.

### Unweighted Graph

All edges have no weights associated with them.

### Weighted Graph

All edges have weights associated with them.

## Comparison

|                 | Adjacency list                                                                    | Adjacency matrix                                                      | Incidence matrix                                                                |
| --------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Store graph     | $O(V+E)$                                                                          | $O(V^2)$                                                              | $O(V \cdot E)$                                                                  |
| Add vertex      | $O(1)$                                                                            | $O(V^2)$                                                              | $O(V \cdot E)$                                                                  |
| Add edge        | $O(1)$                                                                            | $O(1)$                                                                | $O(V \cdot E)$                                                                  |
| Remove vertex   | $O(E)$                                                                            | $O(V^2)$                                                              | $O(V \cdot E)$                                                                  |
| Remove edge     | $O(V)$                                                                            | $O(1)$                                                                | $O(V \cdot E)$                                                                  |
| Check adjacency | $O(V)$                                                                            | $O(1)$                                                                | $O(E)$                                                                          |
| Remarks         | Slow to remove vertices and edges, because it needs to find all vertices or edges | Slow to add or remove vertices, because matrix must be resized/copied | Slow to add or remove vertices and edges, because matrix must be resized/copied |
