---
title: Collision Handling
sidebar:
  order: 9
slug: data-structures-and-algorithms/algorithms/collision-handling
prev: true
next: true
---

When a collision occurs in a [hash table](/data-structures-and-algorithms/data-structures/hash-table), it must be handled using one of the available methods.


## Chaining

Each bucket contains a linked list of entries that hash to the same index.
Insertion involves appending to the list, and search involves traversing the
list.

## Open Addressing

When a collision occurs, the algorithm searches for the next available slot in
the array using a probing sequence. Common probing methods include linear
probing, quadratic probing, and double hashing.

### Linear Probing

The algorithm searches for the next available slot in the array by checking the
subsequent slots one by one until an empty slot is found.

### Quadratic Probing

The algorithm searches for the next available slot in the array by checking
slots at intervals that increase quadratically (e.g., 1, 4, 9, 16, ...).

## Double Hashing

The algorithm uses a second hash function to calculate the interval between
probes, reducing the likelihood of clustering and improving performance.
