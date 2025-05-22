---
title: Searching
sidebar:
  order: 4
slug: data-structures-and-algorithms/algorithms/searching
prev: true
next: true
---

Used to retrieve information stored within some data structure. Below is an explanation of common searching algorithms along with their time and space complexities.

## Common searching algorithms

### Linear Search

The simplest searching algorithm. It checks each element of the list sequentially until the desired element is found or the list ends.

### Binary Search

An efficient algorithm for finding an item from a sorted list of items. Works by repeatedly dividing the search interval in half.

### Depth-First Search (DFS)

An algorithm for traversing or searching tree or graph data structures. It starts at the root node and explores as far as possible along each branch before backtracking.

For [trees](/data-structures-and-algorithms/data-structures/tree): pre-order traversal yields DFS. Space complexity is $O(h)$ where $h$ is the height of the tree.

For [graphs](/data-structures-and-algorithms/data-structures/graph):

1. Select a node to start traversal.
2. Push the node to a stack.
3. Pop node from stack. Mark it visited. Process the node.
4. Push all unvisited adjacent nodes to the stack.
5. Repeat steps 3-4 until stack is empty.

### Breadth-First Search (BFS)

Another algorithm for traversing or searching tree or graph data structures. It starts at the root node and explores all neighbors at the present depth before moving on to nodes at the next depth level.

For [trees](/data-structures-and-algorithms/data-structures/tree):   
A queue is used. Starting from the root node, the algorithm processes each node level by level. It enqueues the root, then repeatedly dequeues a node, processes it, and enqueues its children. This continues until the queue is empty, ensuring all nodes are visited in breadth-first order.

For [graphs](/data-structures-and-algorithms/data-structures/graph):
1. Select a node to start traversal.
2. Push the node to a queue.
3. Pop node from queue. Mark it visited. Process the node.
4. Push all unvisited adjacent nodes to the queue.
5. Repeat steps 3-4 until queue is empty.

## Comparison

| Algorithm                  | Best Time  | Worst Time  | Average Time | Memory |
| -------------------------- | ---------- | ----------- | ------------ | ------ |
| Linear Search              | $O(1)$     | $O(n)$      | $O(n)$       | $O(1)$ |
| Binary Search              | $O(1)$     | $O(\log n)$ | $O(\log n)$  | $O(1)$ |
| Depth-First Search (DFS)   | $O(V + E)$ | $O(V + E)$  | $O(V + E)$   | $O(V)$ |
| Breadth-First Search (BFS) | $O(V + E)$ | $O(V + E)$  | $O(V + E)$   | $O(V)$ |
