---
title: Graph
sidebar:
  order: 6
slug: data-structures-and-algorithms/data-structures/graph
prev: true
next: true
---

A data structure that consists of a set of nodes and a set of edges that connect
pairs of nodes. Can be used to represent various real-world structures such as
social networks, transportation networks, and web page links. Used in many
different domains to model complex relationships and solve various computational
problems.

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

A vertex $U$ is reachable from vertex $V$ if there exists a path from $U$ to
$V$.

### Cycle

A path that starts and ends at the same vertex without repeating any edges or
vertices.

### Complete

A graph is complete **iff** every pair of distinct vertices is connected by a
unique edge.

### Strongly connected

A directed graph is strongly connected **if** there is a path from every vertex
to every other vertex. In this case, $ E \ge V - 1$.

### Subgraph

A subset of the vertices and edges of a graph.

### Dense Graph

A graph is dense **iff** the number of edges is close to the maximum possible
number of edges.

### Sparse Graph

A graph is sparse **iff** the number of edges is close to the minimum possible
number of edges.

## Storing Graphs

### Adjacency Matrix

A 2-dimensional array where the rows and columns represent the vertices of the
graph. The value at each cell indicates whether there is an edge between the
corresponding vertices.

- Space complexity: $O(V^2)$
- Time complexity:
  - To list all elements: $O(V)$
  - To check if an edge is present: $O(1)$

### Adjacency List

A collection of linked lists or arrays where each element represents a vertex
and contains a list of its adjacent vertices.

- Space complexity (to store): $O(V+E)$
- Time complexity:
  - To list all elements: $O(V)$
  - To check if an edge is present: $O(V)$

## Types

### Undirected graph

Edges have no direction. The edges are not ordered.

### Directed graph

Edges have a direction. The edges are ordered pairs of nodes.

### Unweighted Graph

All edges have no weights associated with them.

### Weighted Graph

All edges have weights associated with them.

## Traversal

### Breadth-first search (BFS)

The algorithm:

1. Select a node to start traversal.
2. Push the node to a queue.
3. Pop node from queue. Mark it visited. Process the node.
4. Push all unvisited adjacent nodes to the queue.
5. Repeat steps 3-4 until queue is empty.

Properties:

- Space complexity: $O(w)$ where w is the width of the tree.
- More memory needed, due to storing nodes at current level.
- Finds the shortest path between nodes when edges are unweighted.
- Good for searching nearby nodes and level-wise traversal.

### Depth-first search (DFS)

The algorithm:

1. Select a node to start traversal.
2. Push the node to a stack.
3. Pop node from stack. Mark it visited. Process the node.
4. Push all unvisited adjacent nodes to the stack.
5. Repeat steps 3-4 until stack is empty.

Properties:

- Space complexity: $O(h)$ where h is height of the tree.
- Less memory than BFS since only nodes on the current path are stored.
- Might not find the shortest path between nodes.
- Good for checking connectivity and finding cycles.

## Applications

- Social Networks: Representing relationships between people.
- Routing Algorithms: Finding the shortest path in networks.
- Web Crawling: Representing links between web pages.
- Dependency Resolution: Managing dependencies in systems like package managers.
