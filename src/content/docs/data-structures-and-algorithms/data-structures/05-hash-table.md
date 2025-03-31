---
title: Hash Table
sidebar:
  order: 5
slug: data-structures-and-algorithms/data-structures/hash-table
prev: true
next: true
---

A data structure that implements an associative array, a structure that can map
keys to values. It uses a hash function to compute an index into an array of
buckets or slots, from which the desired value can be found.

Widely used in various applications such as databases, caches, and sets due to
their efficiency in handling large datasets.

Very good performance. Average-case time complexity for insertion, deletion, and
search operations being $O(1)$. However, in the worst case, such as when many
collisions occur, the time complexity can degrade to $O(n)$.

## Hash function

A function that converst a given key into an index in the array. The efficiency
of a hash table depends on the quality of the hash function and the method used
to handle collisions.

A good hash function distributes keys uniformly across the array, minimizing
collisions. And it should be one-to-one.

## Methods for designing hash functions

### Division Method

One of the simplest methods, where the hash value is the remainder of the key
divided by the size of the array.

### Multiplication Method

Another simple method, where the hash value is the fractional part of the
product of the key and a constant.

### Folding Method

Another simple method, where the hash value is the sum of the digits of the key.

### Universal Hashing

A method that uses a family of hash functions to reduce the likelihood of
collisions.

## Buckets

Array slots where the values are stored.

### Load Factor

The ratio of the number of elements in the hash table to the number of buckets.

## Collisions

Situations where two keys hash to the same index. These are typically handled
using techniques like chaining or open addressing.

## Collision handling

### Chaining

Each bucket contains a linked list of entries that hash to the same index.
Insertion involves appending to the list, and search involves traversing the
list.

### Open Addressing

When a collision occurs, the algorithm searches for the next available slot in
the array using a probing sequence. Common probing methods include linear
probing, quadratic probing, and double hashing.

### Linear Probing

The algorithm searches for the next available slot in the array by checking the
subsequent slots one by one until an empty slot is found.

### Quadratic Probing

The algorithm searches for the next available slot in the array by checking
slots at intervals that increase quadratically (e.g., 1, 4, 9, 16, ...).

### Double Hashing

The algorithm uses a second hash function to calculate the interval between
probes, reducing the likelihood of clustering and improving performance.

## Operations

Before any operation, the hash function is applied to the key to find the index.

### Insertion

The value is stored in the corresponding bucket using the index. When a
collision occurs, it is resolved using the chosen collision handling technique.

### Deletion

The value is removed from the corresponding bucket using the index. If the
bucket contains multiple items due to collisions, the specific item is
identified and removed.

### Search

The value is retrieved from the corresponding bucket using the index. If
collisions are present, the bucket is searched to find the correct value.

## Advantages

- Fast Lookups: Average-case time complexity for lookups, insertions, and
  deletions is O(1).
- Efficient: Can handle large amounts of data efficiently.

## Disadvantages

- Collisions: Can degrade performance if not handled properly.
- Memory Usage: May require more memory compared to other data structures.
