---
title: Dijkstras Algorithm
sidebar:
  order: 8
slug: data-structures-and-algorithms/algorithms/dijkstras-algorithm
prev: true
next: true
---

A greedy algorithm used to find the shortest paths from a single source vertex to another vertices in a graph with non-negative edge weights. Widely used in network routing and other optimization problems.

The algorithm works as follows:
1. Initialize the distance to the source vertex as 0 and all other vertices as infinity.
2. Create a priority queue (min-heap) to store vertices based on their current shortest distance.
3. While the priority queue is not empty:
   - Extract the vertex with the smallest distance.
   - For each adjacent vertex, calculate the distance through the current vertex. If this distance is smaller than the previously known distance, update it and push the vertex into the priority queue.

## Implementation

Below is an implementation of Dijkstra's algorithm in C++:

```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <climits>

using namespace std;

// Function to print the distances from the source vertex
void printDistances(vector<int>& dist) {
    cout << "Vertex\tDistance from Source\n";
    for (int i = 0; i < dist.size(); i++) {
        cout << i << "\t" << (dist[i] == INT_MAX ? "INF" : to_string(dist[i])) << "\n";
    }
}

// Dijkstra's algorithm function
void dijkstra(int V, vector<vector<pair<int, int>>>& adj, int src) {
    vector<int> dist(V, INT_MAX); // Distance array
    dist[src] = 0;

    // Min-heap priority queue to store (distance, vertex)
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, src});

    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();

        // Traverse all adjacent vertices of u
        for (auto& edge : adj[u]) {
            int v = edge.first;
            int weight = edge.second;

            // Relaxation step
            if (dist[u] != INT_MAX && dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }

    // Print the distances
    printDistances(dist);
}

int main() {
    int V = 5; // Number of vertices

    // Graph represented as an adjacency list
    // Each pair is (vertex, weight)
    vector<vector<pair<int, int>>> adj(V);
    adj[0].push_back({1, 2});
    adj[0].push_back({4, 1});
    adj[1].push_back({2, 3});
    adj[4].push_back({2, 2});
    adj[4].push_back({3, 4});
    adj[2].push_back({3, 1});

    int src = 0; // Source vertex
    dijkstra(V, adj, src);

    return 0;
}
```

## Example

Consider the following graph:

```txt
    (0)
   / | \
  2  |  1
 /   |   \
(1)  |    (4)
  \  |   / |
   3 |  2  |
    (2)--1--(3)
```

1. Initialize distances: `dist[0] = 0`, all others = `INF`.
2. Process vertices in order of their current shortest distance:
   - Start with vertex 0: Update distances to 1 (`2`) and 4 (`1`).
   - Process vertex 4: Update distance to 2 (`3`) and 3 (`5`).
   - Process vertex 1: No updates needed.
   - Process vertex 2: Update distance to 3 (`4`).
   - Process vertex 3: No updates needed.

Output:
```txt
Vertex  Distance from Source
0       0
1       2
2       3
3       4
4       1
```
