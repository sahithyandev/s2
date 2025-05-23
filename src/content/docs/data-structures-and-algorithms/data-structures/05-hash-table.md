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

### Advantages

- Fast Lookups: Average-case time complexity for lookups, insertions, and
  deletions is $O(1)$.
- Efficient: Can handle large amounts of data efficiently.

### Disadvantages

- Collisions: Can degrade performance if not handled properly.
- Memory Usage: May require more memory compared to other data structures.

## Hash function

A function that maps a given key into an index in the array. The efficiency
of a hash table depends on the quality of the hash function and the method used
to handle collisions.

## Designing hash functions

A good hash function distributes keys uniformly across the array, minimizing collisions. And it should be one-to-one.

### Division Method

The hashed value is the remainder of the key divided by the size of the array.

### Multiplication Method

The hashed value is the fractional part of the product of the key and a constant.

### Folding Method

The hashed value is the sum of the digits of the key.

### Universal Hashing

A method that uses a family of hash functions to reduce the likelihood of
collisions.

## Buckets

Array slots where the values are stored.

### Load Factor

The ratio of the number of elements in the hash table to the number of buckets.

```math
\text{Load Factor} = \frac{\text{Number of Elements}}{\text{Number of Buckets}}
```

## Collisions

Situations where two keys hash to the same index. These are typically handled
using techniques like chaining or open addressing. [Collision handling](/data-structures-and-algorithms/algorithms/collision-handling/) is  explained separately.

## Operations

Before any operation, the hash function is applied to the key to find the index. The implementation details of the operations would depend on the chosen collision handling technique.

- Insertion
- Deletion
- Search
