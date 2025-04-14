---
title: Heap
sidebar:
  order: 3
slug: data-structures-and-algorithms/data-structures/heap
prev: true
next: true
---

A special type of binary tree with an additional property called _the heap
property_.

2 types:

- Max heap - root node is the largest
- Min heap - root node is the smallest

Here, max heaps are explained. The same reasoning and logic can be adapted for
min heaps.

Can be implemented using linked lists or arrays. Mostly implemented using arrays
for better performance.

### Heap property

For any given node $I$, the value of $I$ is greater than or equal to the values
of its children.

### Array implementation

In a heap implemented using 0-based arrays, the relation between the parent node
and its child node(s) is important.

```cpp
/**
 * Parent index of a child node
 * @param child_index index of the child node
 * @returns  index of the parent node
 */
int parentIndex(int child_index)
{
   return child_index >> 1; // floor division of 2
}

/**
 * Index of the left chlid for the given node
 * @param parent_index index of the node
 * @return index of the left child
 */
int leftChildIndex(int parent_index)
{
   return (parent_index << 1) + 1;
}

/**
 * Index of the right chlid for the given node
 * @param parent_index index of the node
 * @return index of the right child
 */
int rightChildIndex(int parent_index)
{
   return (parent_index + 1) << 1;
}
```

## Operations

### Insertion

To insert an element into a max heap, follow these steps:

1. Add the new element at the end of the heap.
2. Compare the added element with its parent; if the added element is greater,
   swap them.
3. Repeat step 2 until the heap property is restored or the element becomes the
   root.

Runs in $O(log n)$ time. $ $

```cpp
#include <iostream>
#include <vector>

using namespace std;

void heapifyUp(vector<int>& heap, int index) {
  if (index == 0) return; // If the element is at the root, stop

  int parentIndex = (index - 1) / 2;
  if (heap[index] > heap[parentIndex]) {
    swap(heap[index], heap[parentIndex]);
    heapifyUp(heap, parentIndex); // Recursively heapify up
  }
}

void insert(vector<int>& heap, int value) {
  heap.push_back(value); // Add the new element at the end
  heapifyUp(heap, heap.size() - 1); // Restore the heap property
}

int main() {
  vector<int> maxHeap;

  insert(maxHeap, 10);
  insert(maxHeap, 20);
  insert(maxHeap, 5);
  insert(maxHeap, 30);

  for (int i : maxHeap) {
    cout << i << " ";
  }

  return 0;
}
```

The `heapifyUp` function restores the heap property starting from a child node,
and going up. The `insert` function adds a new element to the heap.

### Deletion

To delete the root element from a max heap:

1. Replace the root element with the last element in the heap.
2. Remove the last element.
3. Compare the new root with its children; if the new root is smaller than one
   of its children, swap it with the larger child.
4. Repeat step 3 until the heap property is restored or the new root becomes a
   leaf.

Runs in $O(log n)$ time. $ $

```cpp
#include <iostream>
#include <vector>

using namespace std;

void heapify(vector<int>& heap, int index) {
  int leftChild = 2 * index + 1;
  int rightChild = 2 * index + 2;
  int largest = index;

  if (leftChild < heap.size() && heap[leftChild] > heap[largest]) {
    largest = leftChild;
  }

  if (rightChild < heap.size() && heap[rightChild] > heap[largest]) {
    largest = rightChild;
  }

  if (largest != index) {
    swap(heap[index], heap[largest]);
    heapify(heap, largest); // Recursively heapify down
  }
}

void deleteRoot(vector<int>& heap) {
  if (heap.size() == 0) return;

  heap[0] = heap.back(); // Replace root with the last element
  heap.pop_back(); // Remove the last element
  heapifyDown(heap, 0); // Restore the heap property
}

int main() {
  vector<int> maxHeap = {30, 20, 10, 5};

  deleteRoot(maxHeap);

  for (int i : maxHeap) {
    cout << i << " ";
  }

  return 0;
}
```

The `heapifyDown` function restores the heap property after deletion by going
down the tree. The `deleteRoot` function removes the root element from the heap.

### Peek

Runs in $O(1)$ if implemented using arrays. $ $

## Applications of Heaps

- **Priority Queues**: Heaps are commonly used to implement priority queues,
  where the highest (or lowest) priority element is always at the root.
- **Heap Sort**: An efficient sorting algorithm that uses the heap data
  structure to sort elements.
- **Graph Algorithms**: Used in algorithms like Dijkstra's shortest path and
  Prim's minimum spanning tree.
