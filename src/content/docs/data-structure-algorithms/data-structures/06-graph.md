---
title: Graph
sidebar:
  order: 6
slug: data-structure-algorithms/data-structures/graph
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

## Terminology

### Adjacency

Two nodes are adjacent **iff** they are connected by an edge.

### Degree

The number of edges connected to a vertex. In case of directed graphs, in-degree
and out-degree are defined.

### Path

A sequence of vertices where each adjacent pair is connected by an edge.

### Cycle

A path that starts and ends at the same vertex without repeating any edges or
vertices.

## Types

### Undirected graph

Edges have no direction. The edges are not ordered.

### Directed graph

Edges have a direction. The edges are ordered pairs of nodes.

### Unweighted Graph

All edges have no weights associated with them.

### Weighted Graph

All edges have weights associated with them.

## Applications

- Social Networks: Representing relationships between people.
- Routing Algorithms: Finding the shortest path in networks.
- Web Crawling: Representing links between web pages.
- Dependency Resolution: Managing dependencies in systems like package managers.
