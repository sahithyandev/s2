---
title: Distributions
sidebar:
  order: 2
slug: methods-of-mathematics/statistics/distributions
prev: true
next: true
---

A distribution describes how the values of a random variable are spread out. It provides a mathematical function that gives the probability of a random variable taking on each possible value.

## Properties

### Mean

Denoted by $E(X)$ or $\mu$. Represents the "average" (or expected) value.

Properties:
- If $c$ is constant, $E(c) = c$
- $E(X+c) = E(X) + c$
- $E(cX) = cE(X)$
- $E(g(x)) = g(E(x))$, where $g$ is a linear function

### Variance

Denoted by $\text{Var}(X)$ or $\sigma^2$. Measures the spread or dispersion of the distribution around the mean.

Properties:
- $\text{Var}(c) = 0$
- $\text{Var}(X+k) = \text{Var}(X)$
- $\text{Var}(aX) = a^2\text{Var}(X)$
- $\text{Var}(X+Y) = \text{Var}(X) + \text{Var}(Y) + 2\text{Cov}(X,Y)$
- If $X$ and $Y$ are independent, $\text{Cov}(X,Y) = 0$

Covariance will be defined later in [joint distributions](../joint-distributions).

### Cumulative Distribution Function

Denoted by $F$. Gives the probability that the random variable $X$ is less than or equal to $x$. Always non-decreasing and has a range of $[0,1]$.
