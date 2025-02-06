---
title: Introduction to Algorithms
sidebar:
  label: Introduction
  order: 1
slug: data-structure-algorithms/algorithms/introduction
prev: false
next: true
---

Revise [S1](https://s1.sahithyan.dev) for [algorithms](https://s1.sahithyan.dev/programming-fundamentals/b-book/algorithms/).

Defines how input is mapped to output, where input and output are both representation of data. Has a well-defined procedure. A step-by-step method of solving a computational task. Algorithms are studied to easily understand and solve problems in the best way.

### Computational task

A group of tasks with varying inputs.

## Algorithm specification

Algorithms are explained in either:

- Flowcharts  
  A diagram that shows a flow of control.
  - Terminals - rounded rectangles, represents start or end of the algorithm
  - Input/Output - parallelogram
  - Process/Stored data - rectangles
  - Decision - diamond
- Pseudocode
- Program listing

## Sorting

### Properties of sorting

- Comparison / Non Comparison - In non-comparison based sorting, elements of array are not compared with each other to find the sorted array.
- In-place/Outplace technique – A sorting technique is inplace if it does not use any extra memory to sort the array.
- Online/Offline technique – A sorting technique is considered Online if it can accept new data while the procedure is ongoing i.e. complete data is not required to start the sorting operation.
- Stable/Unstable technique – A sorting technique is stable if it does not change the order of elements with the same value.

### Bubble sort

- Offline
- Stable
- No extra memory needed
- Time complexity - $O(n^2)$

### Insertion sort

- Online
- Stable
- No extra memory needed
- Time complexity
  - Average: $O(n^2)$

### Merge sort

- Online
- Stable
- $O(n)$ additional memory needed
- Time complexity - $O(n\,log n)$

### Quicksort

Faster than merge sort.

- Online
- Usually not stable. Stability depends on the partitioning strategy
- $O(log n)$ additional memory needed
- Avg. time complexity - $O(n\,log n)$

Worst case ($O(n^2)$) occurs when the partition scheme is bad and the list is almost sorted.

### Heap sort

Slower than quick sort.

- Not stable
- No additional space required
- Avg. time complexity - $O(n\,log n)$

### Tim sort

Created by Tim Peters. A highly optimized version of merge sort.

- Online
- Stable
- $O(n)$ additional memory needed
- Time complexity - $O(n\,log n)$

### Introsort

Begins with quick sort. In large lists, switches to heap sort. The switch happens when the recursion depth of quick sort exceeds a level proportional to the log of the input size. Switches to insertion sort, once the partition size is small enough.

- Not stable
- $O(log n)$ extra memory
- Time complexity
  - Worst: $O(n\,log n)$
  - Average: $O(n\,log n)$
