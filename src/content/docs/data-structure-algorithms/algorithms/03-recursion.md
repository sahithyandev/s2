---
title: Recursion
sidebar:
  order: 3
slug: data-structure-algorithms/algorithms/recursion
prev: true
next: false
---

### Recursive

A recursive algorithm or function is a algorithm or function that calls itself directly or indirectly to solve a smaller version of its task. Recursion requires terminating or base conditions.

### Divide & Conquer

- Divide: Split a problem into smaller sub-problems
- Conquer: Solve a subset of smaller sub-problems recursively
- Combine: Combine the solutions to solve the initial problem

Examples:

- Binary search
- Merge sort
- Quick sort
- Depth-first tree traversals

## Analysis

### Recurrence relation

A mathematical expression that describes overall cost of the problem in terms of the cost of solving smaller sub problems.

### Substitution method

The form of the solution is guessed and then verified by induction. Then the constants are solved for.

### Iteration method

Aka. recursion-tree method. Good for generating guesses for substituion method but can be unreliable.

### Master theorem

Applies to recurrences of the form: $T(n) = a T(\frac{n}{b}) + f(n)$ whern $a \ge 1 \land b \gt 1$ and $f$ is asymptotically positive.

#### Case 1

**If** $f(n) = O(n^{log_b{a} - \epsilon})$ for some $\epsilon > 0$ **then** $T(n) \in \Theta(n^{\log_b{a}})$

#### Case 2

**If** $f(n) = \Theta(n^{log_b{a}})$ **then** $T(n) \in \Theta(n^{\log_b{a}} \lg n)$

#### Case 3

**If** $f(n) = \Omega(n^{log_b{a} + \epsilon})$ for some $\epsilon > 0$ and $\forall n, a f(n) \le c f(n)$ where $c\lt 1$ **then** $T(n) \in \Theta(n^{\log_b{a}} \lg n)$
