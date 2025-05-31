---
title: Breadth First Search
sidebar:
  order: 6
slug: data-structures-and-algorithms/algorithms/breadth-first-search
prev: true
next: true
---

Aka. level order searching. Another algorithm for traversing or searching tree or graph data structures. It starts at the root node and explores all neighbors at the present depth before moving on to nodes at the next depth level. Queue is usually used to store the discovered nodes.

## In [Trees](/data-structures-and-algorithms/data-structures/tree)

A queue is used. Starting from the root node, the algorithm processes each node level by level. It enqueues the root, then repeatedly dequeues a node, processes it, and enqueues its children. Repeat until the queue is empty.

## In [Graphs](/data-structures-and-algorithms/data-structures/graph)

1. Select a node to start traversal.
2. Use a queue to store the _discovered_ nodes.
2. Push the node to the queue.
3. Dequeue from queue. Mark it visited.
4. Push all unvisited adjacent nodes to the queue.
5. Repeat steps 3-4 until queue is empty.
