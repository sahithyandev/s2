---
title: Minimum Spanning Tree
sidebar:
  order: 7
slug: data-structures-and-algorithms/data-structures/minimum-spanning-tree
prev: true
next: false
---

A subset of the edges of a connected, undirected graph that connects all the
vertices together, without any cycles, and with the minimum possible total edge
weight.

Used in network design, clustering, and image segmentation.

### Spanning tree

A subgraph that includes all the vertices of the original graph and is a single
connected tree.

Out of all these spanning trees, MST is the one with the smallest total edge
weight.

### Steiner spanning tree

A tree that connects a subset of vertices while potentially adding additional vertices (called Steiner points or Steiner vertices) to minimize the total edge weight.

### Minimum Steiner tree

A Steiner spanning tree that has the minimum weight. Finding a minimum Steiner tree is NP-hard, making it computationally more difficult than finding a minimum spanning tree. Useful in network design problems where new junction points can be added to reduce the overall cost of connecting required locations.

:::note[Cayley's formula]

The number of distinct spanning trees in a complete graph with $n$ vertices is $n^{n-2}$.

:::

## Definitions

### Cut
A partition of the vertices of a graph into 2 disjoint subsets.

### Crossing Cut
An edge that has one endpoint in each subset of a cut is said to cross the cut. 

### Respecting Cut
Given a subset $A$ of edges, a cut respects $A$ **iff** no edge in $A$ crosses the cut.

### Light Edge
For a given cut, the edge with the minimum weight among all edges crossing the cut. Prime candidates in MST algorithms.

### MST property

For any cut in a graph, the light edge crossing the cut is always part of a minimum spanning tree.

Used in [Kruskal's algorithm](/data-structures-and-algorithms/algorithms/kruskals-algorithm/) and [Prim's algorithm](/data-structures-and-algorithms/algorithms/prims-algorithm/).

### Safe Edge
An edge that can be safely included in the growing MST subset without violating the MST property.

#### Finding a Safe Edge

- Choose a cut that respects the current set of edges A
- Select the light edge crossing this cut
- This light edge is guaranteed to be safe for inclusion in the MST

## Algorithms to Find MST

The general idea is to:

- Start with a subset of edges $A$
- Add 1 safe edge to $A$ at each iteration
- Keep adding until an MST is found

Commonly used algorithms to find MST are:
- [Kruskal's algorithm](/data-structures-and-algorithms/algorithms/kruskals-algorithm)
- [Prim's algorithm](/data-structures-and-algorithms/algorithms/prims-algorithm)
