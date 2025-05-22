---
title: Prim's Algorithm
sidebar:
  order: 7
slug: data-structures-and-algorithms/algorithms/prims-algorithm
prev: true
next: true
---


A [greedy algorithm](/data-structures-and-algorithms/algorithms/introduction#greedy-algorithm) to find [MST](/data-structures-and-algorithms/data-structures/minimum-spanning-tree/) of a [graph](/data-structures-and-algorithms/data-structures/graph/). Starts with a single vertex and grows the MST one edge at a time by adding the smallest edge that connects a vertex in the MST to a vertex outside the MST.

Unlike Kruskal's algorithm which sorts all edges at the beginning, Prim's algorithm maintains a priority queue (implemented here using arrays for simplicity) to always select the minimum-weight edge to add next.

The algorithm works as follows:
1. Initialize a set to keep track of vertices included in MST
2. Assign key value of 0 to the first vertex and infinity to all others
3. While MST doesn't include all vertices:
   - Pick the vertex with minimum key value not yet included in MST
   - Include this vertex in MST
   - Update key values of adjacent vertices: if the weight of edge is less than the current key value, update the key value

Prim's algorithm works particularly well for dense graphs where the number of edges is close to the maximum possible.

## Implementation

Let's look at an implementation of Prim's Algorithm in Java, which takes a different approach than Kruskal's:

```cpp
#include <iostream>
#include <vector>
#include <climits>

using namespace std;

const int V = 6; // Number of vertices

// Function to find the vertex with the minimum key value from the set of vertices not yet included in MST
int minKey(vector<int>& key, vector<bool>& mstSet) {
    int min = INT_MAX, min_index = -1;

    for (int v = 0; v < V; v++) {
        if (!mstSet[v] && key[v] < min) {
            min = key[v];
            min_index = v;
        }
    }

    return min_index;
}

// Function to print the constructed MST
void printMST(vector<int>& parent, vector<vector<int>>& graph) {
    cout << "Edge \tWeight\n";
    for (int i = 1; i < V; i++) {
        cout << parent[i] << " - " << i << "\t" << graph[i][parent[i]] << "\n";
    }
}

// Function to construct and print MST for a graph represented using adjacency matrix
void primMST(vector<vector<int>>& graph) {
    vector<int> parent(V); // Array to store constructed MST
    vector<int> key(V, INT_MAX); // Key values used to pick minimum weight edge
    vector<bool> mstSet(V, false); // To represent set of vertices included in MST

    // Always include the first vertex in MST
    key[0] = 0; // Make key 0 so that this vertex is picked as the first vertex
    parent[0] = -1; // First node is always the root of MST

    // The MST will have V vertices
    for (int count = 0; count < V - 1; count++) {
        // Pick the minimum key vertex from the set of vertices not yet included in MST
        int u = minKey(key, mstSet);

        // Add the picked vertex to the MST set
        mstSet[u] = true;

        // Update key value and parent index of the adjacent vertices of the picked vertex
        for (int v = 0; v < V; v++) {
            if (graph[u][v] != 0 && !mstSet[v] && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }
    }

    // Print the constructed MST
    printMST(parent, graph);
}

int main() {
    // Example graph representation using adjacency matrix
    vector<vector<int>> graph = {
        { 0, 1, 0, 4, 3, 0 },
        { 1, 0, 2, 0, 5, 0 },
        { 0, 2, 0, 0, 0, 6 },
        { 4, 0, 0, 0, 7, 0 },
        { 3, 5, 0, 7, 0, 8 },
        { 0, 0, 6, 0, 8, 0 }
    };

    // Print the MST
    primMST(graph);

    return 0;
}
```

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

1. Start with vertex A (arbitrary starting point):
   - Include A in the MST
   - Set key value of A to 0, all others to infinity

2. Update key values of vertices adjacent to A:
   - B: key = 1
   - D: key = 4
   - E: key = 3

3. Select B (minimum key among unvisited vertices):
   - Include B in the MST
   - Edge added: (A-B, 1)
   - Update adjacent vertices' keys:
     - C: key = 2
     - E: already 3, no change

4. Select C (minimum key among unvisited vertices):
   - Include C in the MST
   - Edge added: (B-C, 2)
   - Update adjacent vertices' keys:
     - F: key = 6

5. Select E (minimum key among unvisited vertices):
   - Include E in the MST
   - Edge added: (A-E, 3)
   - Update adjacent vertices' keys:
     - D: already 4, no change
     - F: already 6, no change

6. Select D (minimum key among unvisited vertices):
   - Include D in the MST
   - Edge added: (A-D, 4)

7. Select F (minimum key among unvisited vertices):
   - Include F in the MST
   - Edge added: (C-F, 6)

The resulting MST will have the edges: (A-B, 1), (B-C, 2), (A-E, 3), (A-D, 4), (C-F, 6).
