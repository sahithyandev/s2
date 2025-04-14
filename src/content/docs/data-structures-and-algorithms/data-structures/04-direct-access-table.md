---
title: Direct Access Table
sidebar:
  order: 4
slug: data-structures-and-algorithms/data-structures/direct-access-table
prev: true
next: true
---

A data structure where items are stored in an array and can be accessed directly
using their indices. This allows for $O(1)$ time complexity when accessing
elements, which is extremely fast. $ $

The key feature of a DAT is that the index used to access an item is derived
from some property of the data itself. For example, if storing information about
students by their ID numbers, the ID number could be used as the index into the
table.

DATs are useful when:

- You need very fast lookups
- You have unique keys that can be mapped to array indices
- Memory space is not a major constraint
- The key range is reasonable compared to amount of data

Limitations of DATs:

- Can be wasteful of memory if key range is large but sparse
- Keys must be able to be mapped to valid array indices
- Not suitable for dynamic resizing
- Does not maintain any ordering of elements

Common use cases include:

- Symbol tables in compilers
- Character encoding tables
- Small lookup dictionaries
- Cache implementations
