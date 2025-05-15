---
title: Sorting
sidebar:
  order: 3
slug: data-structures-and-algorithms/algorithms/sorting
prev: true
next: true
---

### Properties of sorting

- Comparison / Non Comparison - In non-comparison based sorting, elements of
  array are not compared with each other to find the sorted array.
- In-place/Outplace technique – A sorting technique is inplace if it does not
  use any extra memory to sort the array.
- Online/Offline technique – A sorting technique is considered online if it can
  accept new data while the procedure is ongoing i.e. complete data is not
  required to start the sorting operation.
- Stable/Unstable technique – A sorting technique is stable if it does not
  change the order of elements with the same value.

## Common sorting algorithms

### Bubble sort

Biggest or smallest elements are _bubbled_ to the end or start by swapping each
consecutive pair.

### Insertion sort

Start with the second element: Assume the first element is already sorted. Take
the second element and compare it with the first element. Insert the element: If
the second element is smaller than the first, swap them. Now, the first two
elements are sorted. Move to the next element: Take the third element and
compare it with the elements before it. Insert it into the correct position
among the sorted elements.

This process is repeate for each subsequent element, inserting it into its
correct position among the already sorted elements. By the end of the process,
all elements will be sorted.

### Merge sort

The array to be sorted is sorted into two sub arrays, with the length $n/2$. The
two sub-arrays are sorted recursively and then combined. $ $

### Quicksort

Faster than merge sort.

Worst case ($O(n^2)$) occurs when the partition scheme is bad and the list is
almost sorted. $ $

### Heap sort

Slower than quick sort.

### Tim sort

Created by Tim Peters. A highly optimized version of merge sort. Used in
Python's `List.sort()` and `sorted()` and Java's `Collection.sort()`.

### Introsort

Begins with quick sort. In large lists, switches to heap sort. The switch
happens when the recursion depth of quick sort exceeds a level proportional to
the log of the input size. Switches to insertion sort, once the partition size
is small enough. Used in C++'s `std::sort()`.

### Dual-Pivot Quick sort

Two pivots are selected in each end of the array. Left pivot must be smaller
than the right pivot. The dataset is partitioned into 3 parts.

- Less than left pivot
- Greater than or equal to left pivot and less than right pivot
- Greater than right pivot

The partitions are recursively sorted. Used in Java's `Array.sort()`.

## Comparison

The table below includes information about various sorting algorithms. The table
can be scrolled horizontally.

<section class="scrollable-table">

| Property       | Online | Stable       | Best Time    | Average Time   | Worst Time     | Memory      |
| -------------- | ------ | ------------ | ------------ | -------------- | -------------- | ----------- |
| Bubble sort    | No     | Yes          | $O(n^2)$     | $O(n^2)$       | $O(n^2)$       | $O(1)$      |
| Selection sort | No     | No           | $O(n^2)$     | $O(n^2)$       | $O(n^2)$       | $O(1)$      |
| Insertion sort | Yes    | Yes          | $O(n)$       | $O(n^2)$       | $O(n^2)$       | $O(1)$      |
| Shell sort     | No     | No           | $O(n\log n)$ | $O(n\log^2 n)$ | $O(n\log^2 n)$ | $O(1)$      |
| Merge sort     | No     | Yes          | $O(n\log n)$ | $O(n\log n)$   | $O(n\log n)$   | $O(n)$      |
| Quick sort     | Yes    | No (depends) | $O(n\log n)$ | $O(n\log n)$   | $O(n^2)$       | $O(\log n)$ |
| Heap sort      | No     | No           | $O(n\log n)$ | $O(n\log n)$   | $O(n\log n)$   | $O(1)$      |
| Intro sort     | No     | No           | $O(n\log n)$ | $O(n\log n)$   | $O(n\log n)$   | $O(\log n)$ |
| Tim sort       | Yes    | Yes          | $O(n\log n)$ | $O(n\log n)$   | $O(n\log n)$   | $O(n)$      |

</section>

:::note

Theoritically, sorting cannot be faster than $O(n\log n)$. $ $

:::
