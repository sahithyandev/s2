---
title: Kruskal's Algorithm
sidebar:
  order: 5
slug: data-structures-and-algorithms/algorithms/kruskals-algorithm
prev: true
next: true
---

A [greedy algorithm](/data-structures-and-algorithms/algorithms/introduction#greedy-algorithm) to find MST of a graph. Sorts all the edges of the graph by their weights and adds them one by one to
the MST, ensuring that no cycles are formed.

## Implementation

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Edge {
    int src, dest, weight;
};

bool compareEdges(const Edge &a, const Edge &b) {
    return a.weight < b.weight;
}

int find(vector<int> &parent, int i) {
    if (parent[i] != i) {
        parent[i] = find(parent, parent[i]);
    }
    return parent[i];
}

void unionSets(vector<int> &parent, vector<int> &rank, int x, int y) {
    int xroot = find(parent, x);
    int yroot = find(parent, y);

    if (rank[xroot] < rank[yroot]) {
        parent[xroot] = yroot;
    } else if (rank[xroot] > rank[yroot]) {
        parent[yroot] = xroot;
    } else {
        parent[yroot] = xroot;
        rank[xroot]++;
    }
}

void kruskalMST(int V, vector<Edge> &edges) {
    sort(edges.begin(), edges.end(), compareEdges);

    vector<int> parent(V);
    vector<int> rank(V, 0);
    for (int i = 0; i < V; ++i) {
        parent[i] = i;
    }

    vector<Edge> result;
    for (const auto &edge : edges) {
        int x = find(parent, edge.src);
        int y = find(parent, edge.dest);

        if (x != y) {
            result.push_back(edge);
            unionSets(parent, rank, x, y);
        }

        if (result.size() == V - 1) {
            break;
        }
    }

    cout << "Following are the edges in the constructed MST\n";
    for (const auto &edge : result) {
        cout << edge.src << " -- " << edge.dest << " == " << edge.weight << "\n";
    }
}

int main() {
    int V = 6;
    vector<Edge> edges = {
        {0, 1, 1}, {1, 2, 2}, {0, 4, 3}, {0, 3, 4},
        {1, 4, 5}, {2, 5, 6}, {3, 4, 7}, {4, 5, 8}
    };

    kruskalMST(V, edges);

    return 0;
}
```

This code demonstrates how to find the MST of a graph using Kruskal's Algorithm.
The `Edge` class represents an edge in the graph, and the `KruskalMST` class
contains the logic for finding the MST.

## Example

```txt
    1       2
A-------B-------C
| \     |      /|
|  \    |     / |
4   3   5    6  |
|    \  |  /    |
|     \ | /     |
D-------E-------F
    7       8
```

1. Sort the edges by weight:

   - (A-B, 1), (B-C, 2), (A-E, 3), (A-D, 4), (B-E, 5), (C-F, 6), (D-E, 7),
     (E-F, 8)

2. Add edges to the MST, ensuring no cycles are formed:
   - Add (A-B, 1)
   - Add (B-C, 2)
   - Add (A-E, 3)
   - Add (A-D, 4)
   - Add (C-F, 6)

The resulting MST will have the edges: (A-B, 1), (B-C, 2), (A-E, 3), (A-D, 4),
(C-F, 6).
