---
title: Priority Queue
sidebar:
  order: 9
slug: program-construction/priority-queue
prev: true
next: true
---

A special type of queue where elements are processed based on their priority
rather than their insertion order. Implements a priority heap data structure
where elements are ordered according to their natural ordering or a custom
comparator.

Key characteristics of PriorityQueue in Java:

- Elements are stored in a priority heap - a complete binary tree
- The head (first element) is always the smallest element based on natural
  ordering
- When elements are removed, the next smallest element becomes the head
- Elements must be comparable (implement Comparable) or use a Comparator
- Does not allow null elements
- Not thread-safe (use PriorityBlockingQueue for concurrent access)

Basic Example:

```java
PriorityQueue<Integer> pQueue = new PriorityQueue<>();

// Adding elements
pQueue.add(10);
pQueue.add(5);
pQueue.add(15);

// Will print in order: 5, 10, 15
while(!pQueue.isEmpty()) {
    System.out.println(pQueue.poll());
}
```

Common Methods:

- add(E element) - Inserts element
- offer(E element) - Adds element (preferred method)
- peek() - Returns but does not remove head element
- poll() - Returns and removes head element
- remove(Object obj) - Removes specific element
- clear() - Removes all elements
- size() - Returns number of elements

Example with Custom Comparator:

```java
// Custom comparator for reverse order
PriorityQueue<Integer> pQueue = new PriorityQueue<>((a, b) -> b - a);

pQueue.offer(10);
pQueue.offer(5);
pQueue.offer(15);

// Will print in order: 15, 10, 5
while(!pQueue.isEmpty()) {
    System.out.println(pQueue.poll());
}
```

Time Complexity:

- Insertion (offer/add): O(log n)
- Removal (poll): O(log n)
- Peek: O(1)
- Contains: O(n)
- Size: O(1)

Common Use Cases:

- Task scheduling by priority
- Event handling systems
- Dijkstra's shortest path algorithm
- Huffman coding compression
- Network traffic prioritization
