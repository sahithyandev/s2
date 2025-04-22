---
title: Distributions
sidebar:
  order: 4
slug: methods-of-mathematics/probability-and-statistics/distributions
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

### Covariance

Denoted by $\text{Cov}(X,Y)$ or $\sigma_{XY}$. Measures the linear relationship between two random variables. Not standardized.

Properties:
- $\text{Cov}(X,Y) = E\Big[\big(X-E(X)\big)\big(Y-E(Y)\big)\Big]$
- $\text{Cov}(X,X) = \text{Var}(X)$
- $\text{Cov}(aX,bY) = ab\text{Cov}(X,Y)$
- $\text{Cov}(X+Y,Z) = \text{Cov}(X,Z) + \text{Cov}(Y,Z)$

### Standard Deviation

Square root of the variance. Provides a measure of spread in the same units as the original random variable, making it often more interpretable than variance.

## Distribution functions

### Probability Mass Function

Used for discrete random variables. Gives the probability that a discrete random variable $X$ is exactly equal to some value $x$.

```math
\sum_{x} P(x) = 1
```

For example, if $X$ represents the outcome of a fair die roll, then: $ $

```math
P(X = 1) = P(X = 2) = ... = P(X = 6) = \frac{1}{6}
```

### Probability Density Function

Used for continuous random variables. Doesn't give the probability at an exact point (which is always 0 for continuous variables). Instead, gives the relative likelihood of the random variable taking on a value in a small interval around a point.

```math
\int_{-\infty}^{\infty} f(x)\; \text{d}x = 1
```

The probability of an event is the integral of the PDF over the region corresponding to the event:

```math
P(a \leq X \leq b) = \int_{a}^{b} f(x) dx
```

For example, if $X$ follows a standard normal distribution, its PDF is $f(x) = \frac{1}{\sqrt{2\pi}}e^{-\frac{x^2}{2}}$

### Cumulative Distribution Function

For both discrete and continuous random variables, the cumulative distribution function $F(x)$ gives the probability that the random variable $X$ is less than or equal to $x$. Always non-decreasing and has a range of $[0,1]$.

$F(x) = P(X \leq x)$

For discrete random variables,

```math
F(x) = \sum_{t \leq x} P(X = t)
```

For continuous random variables,

```math
F(x) = \int_{-\infty}^{x} f(t) dt
```
