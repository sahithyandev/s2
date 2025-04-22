---
title: Discrete Probability Distribution
sidebar:
  order: 5
slug: >-
  methods-of-mathematics/probability-and-statistics/discrete-probablity-distribution
prev: true
next: true
---

## Mean

```math
E(X) = \mu = \sum_{i} x_i \cdot P(X = x_i)
```

Here:
- $x_i$ represents each possible value of $X$
- $P(X = x_i)$ is the probability of observing that value

## Variance

```math
\text{Var}(X) = \sigma^2 = \sum_{i} (x_i - \mu)^2 \cdot P(X = x_i)
```

An equivalent computational formula is:

```math
\text{Var}(X) = \sum_{i} x_i^2 \cdot P(X = x_i) - \mu^2
```

## Example

Consider a discrete random variable $X$ with the following probability distribution: $ $

| X | P(X) |
|---|------|
| 1 | 0.2  |
| 2 | 0.3  |
| 3 | 0.4  |
| 4 | 0.1  |

The mean would be: $E(X) = 1 \cdot 0.2 + 2 \cdot 0.3 + 3 \cdot 0.4 + 4 \cdot 0.1 = 2.4$. $ $

The variance would be: $\text{Var}(X) = (1-2.4)^2 \cdot 0.2 + (2-2.4)^2 \cdot 0.3 + (3-2.4)^2 \cdot 0.4 + (4-2.4)^2 \cdot 0.1 = 0.84$. $ $
