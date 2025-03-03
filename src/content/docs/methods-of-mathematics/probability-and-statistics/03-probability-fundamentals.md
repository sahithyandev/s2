---
title: Probability Fundamentals
sidebar:
  order: 3
slug: methods-of-mathematics/probability-and-statistics/probability-fundamentals
prev: true
next: false
---

## Probability of an event

Suppose $A$ is an event of the sample space $S$.

```math
P(A) = \frac{n(A)}{n(S)}

```

Can be in the range $[0,1]$. $ $

If $A$ and $B$ are mutually exclusive events, then $P(A \cap B) = 0$.

## Addition Law

Suppose $A$ and $B$ are two events.

```math
P(A \cup B) = P(A) + P(B) - P(A \cap B)
```

## Bayes' Theorem

Suppose $A$ and $B$ are two events.

```math
P(B/A) = \frac{P(A \cap B)}{P(A)}
```

Can only be applied when:

- The sample space is partitioned into a set of mutually exclusive events:
  $\set{A_1,A_2,\dots,A_n}$.
- $\exists B \subset S \text{ s.t. } P(B) \gt 0$
- $P(A_k|B)$ is to be calculated
- At least one of the two sets of possibilities should be given:
  - $\forall A_k\;\;P(A_k \cap B)$ is given
  - $\forall A_k\;\;P(A_k) \land P(B|A_k)$ are given

## Multiplication theorem

```math
P(A \cap B)=P(A) \times P(B|A)
```

```math
P(A \cap B \cap C)=P(C\; | \;(A \cap B))\times P(A\cap B)
```

## Law of total probability

Relates marginal probabilities to conditiional probabilities.

Suppose the sample space is partitioned into a countably infinite set of
mutually exclusive events: $\set{A_1,A_2,\dots}$. Then, for an event $B$:

```math
P(B) = \sum_{i=1} {P(B\;|\;A_i)\;|\;P(A_i)}
```
