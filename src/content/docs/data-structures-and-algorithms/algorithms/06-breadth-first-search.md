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

```cpp
#include "iostream"
#include <queue>

using namespace std;

struct Node {
    int value;
    Node* left;
    Node* right;
};

void bfsInTree(Node* root) {
    queue<Node*> q;
    q.push(root);
    while (!q.empty()) {
        Node* top = q.front();
        q.pop();

        if (top->left != NULL) {
            q.push(top->left);
        }
        if (top->right != NULL) {
            q.push(top->right);
        }
        cout << top->value << " ";
    }
}
```

## In [Graphs](/data-structures-and-algorithms/data-structures/graph)

1. Select a node to start traversal.
2. Use a queue to store the _discovered_ nodes.
3. Push the node to the queue.
4. Dequeue from queue. Mark it visited.
5. Push all unvisited adjacent nodes to the queue.
6. Repeat steps 3-4 until queue is empty.
