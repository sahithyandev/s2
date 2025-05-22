---
title: Recursion
sidebar:
  order: 5
slug: data-structures-and-algorithms/algorithms/recursion
prev: true
next: true
---

### Recursive

A recursive algorithm or function is the one that calls itself to solve a smaller version of its task. Terminating or base conditions are required.

### Divide & Conquer

- Divide: Split a problem into smaller sub-problems
- Conquer: Solve a subset of smaller sub-problems recursively
- Combine: Combine the solutions to solve the initial problem

Examples:

- [Binary search](/data-structures-and-algorithms/algorithms/searching/#binary-search)
- [Merge sort](/data-structures-and-algorithms/algorithms/sorting/#merge-sort)
- [Quick sort](/data-structures-and-algorithms/algorithms/sorting/#quicksort)
- [Depth-first traversals](/data-structures-and-algorithms/algorithms/searching/#depth-first-search)

## Analysis

### Recurrence relation

A mathematical expression that describes overall cost of the problem in terms of
the cost of solving smaller sub problems.

### Substitution method

The form of the solution is guessed and then verified by induction. Then the
constants are solved for.

### Iteration method

Aka. recursion-tree method. Good for generating guesses for substituion method
but can be unreliable.

### Master theorem

Applies to recurrences of the below form:

```math
T(n) = a\,T\Bigg(\bigg\lceil \frac{n}{b} \bigg\rceil \Bigg) + O(n^d)
```

Where $a \ge 1$, $b \gt 1$ and $d \ge 0$.

#### Case 1

**If** $d > \log_b{a}$ **then** $T(n) = O(n^d)$.

#### Case 2

**If** $d = \log_b{a}$ **then** $T(n) = O(n^d \log n)$.

#### Case 3

**If** $d < \log_b{a}$ **then** $T(n) = O(n^{\log_b a})$.
