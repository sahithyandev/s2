---
title: Depth First Search
sidebar:
  order: 5
slug: data-structures-and-algorithms/algorithms/depth-first-search
prev: true
next: true
---


An algorithm for traversing or searching tree or graph data structures. It starts at the root node and explores as far as possible along each branch before backtracking. Usually stack is used to keep track of the discovered nodes.

## In [Trees](/data-structures-and-algorithms/data-structures/tree)

There are 3 types of DFS.
- Pre-order traversal
- In-order traversal
- Post-order traversal

Space complexity is $O(h)$ where $h$ is the height of the tree.

## In [Graphs](/data-structures-and-algorithms/data-structures/graph)

Uses a stack to track the path.

```cpp
#include <iostream>
#include <vector>
using namespace std;

void dfs(int node, vector<bool>& visited, const vector<vector<int>>& graph) {
    vector<int> stack;
    stack.push_back(node);

    while (!stack.empty()) {
        int current = stack.back();
        stack.pop_back();

        if (!visited[current]) {
            visited[current] = true;
            cout << current << " ";

            for (auto it = graph[current].rbegin(); it != graph[current].rend(); ++it) {
                if (!visited[*it]) {
                    stack.push_back(*it);
                }
            }
        }
    }
}


int main() {
    vector<vector<int>> graph = {
        {1, 2},    // Node 0
        {0, 3, 4}, // Node 1
        {0, 4},    // Node 2
        {1},       // Node 3
        {1, 2}     // Node 4
    };
    vector<bool> visited(graph.size(), false);

    cout << "DFS Traversal: ";
    dfs(0, visited, graph);
    return 0;
}
```

### Tree edge

Edges that belong to the Depth First Search tree. Represent the discovery of a new vertex during the traversal.

### Forward edge

Edges that connect a vertex to one of its descendants in the Depth First Search tree but are not tree edges.

### Back edge

Edges that point back to an ancestor in the Depth First Search tree. These edges indicate the presence of a cycle in a graph.

### Cross edge

Edges that connect two vertices, neither of which is an ancestor of the other in the Depth First Search tree.
