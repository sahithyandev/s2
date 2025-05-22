---
title: Bellman Ford Algorithm
sidebar:
  order: 9
slug: data-structures-and-algorithms/algorithms/bellman-ford-algorithm
prev: true
next: true
---

A dynamic algorithm to find the shortest paths from a single source vertex to all other vertices in a weighted graph. Can handle graphs with negative weight edges.

The algorithm works as follows:
1. Initialize the distance to the source vertex as 0 and all other vertices as infinity.
2. Relax all edges |V| - 1 times (where |V| is the number of vertices). For each edge (u, v) with weight w, if the distance to u plus w is less than the distance to v, update the distance to v.
3. Check for negative weight cycles by iterating through all edges one more time. If a shorter path is found, it indicates the presence of a negative weight cycle.

## Implementation

Below is an implementation of the Bellman-Ford algorithm in C++:

```cpp
#include <iostream>
#include <vector>
#include <tuple>
#include <climits>

using namespace std;

// Function to print the distances from the source vertex
void printDistances(vector<int>& dist) {
    cout << "Vertex\tDistance from Source\n";
    for (int i = 0; i < dist.size(); i++) {
        cout << i << "\t" << (dist[i] == INT_MAX ? "INF" : to_string(dist[i])) << "\n";
    }
}

// Bellman-Ford algorithm function
void bellmanFord(int V, int E, vector<tuple<int, int, int>>& edges, int src) {
    vector<int> dist(V, INT_MAX);
    dist[src] = 0;

    // Relax all edges |V| - 1 times
    for (int i = 0; i < V - 1; i++) {
        for (int j = 0; j < E; j++) {
            int u, v, w;
            tie(u, v, w) = edges[j];
            if (dist[u] != INT_MAX && dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
            }
        }
    }

    // Check for negative weight cycles
    for (int j = 0; j < E; j++) {
        int u, v, w;
        tie(u, v, w) = edges[j];
        if (dist[u] != INT_MAX && dist[u] + w < dist[v]) {
            cout << "Graph contains a negative weight cycle\n";
            return;
        }
    }

    // Print the distances
    printDistances(dist);
}

int main() {
    int V = 5; // Number of vertices
    int E = 8; // Number of edges

    // Graph edges represented as (u, v, w) where u -> v with weight w
    vector<tuple<int, int, int>> edges = {
        {0, 1, -1}, {0, 2, 4}, {1, 2, 3}, {1, 3, 2},
        {1, 4, 2}, {3, 2, 5}, {3, 1, 1}, {4, 3, -3}
    };

    int src = 0; // Source vertex
    bellmanFord(V, E, edges, src);

    return 0;
}
```

## Example

Consider the following graph:

```txt
    (0)
   / | \
  /  |  \
-1   4   3
 /    \    \
(1)---(2)---(3)
 | \   |     |
 2  2  5    -3
 |   \ |     |
(4)---(3)---(1)
```

1. Initialize distances: `dist[0] = 0`, all others = `INF`.
2. Relax edges |V| - 1 = 4 times:
   - After 1st iteration: `dist = [0, -1, 4, INF, INF]`
   - After 2nd iteration: `dist = [0, -1, 2, 1, 1]`
   - After 3rd iteration: `dist = [0, -1, 2, -2, 1]`
   - After 4th iteration: `dist = [0, -1, 2, -2, -1]`
3. Check for negative weight cycles: No cycles detected.

Output:
```txt
Vertex  Distance from Source
0       0
1       -1
2       2
3       -2
4       -1
```
