---
title: Probability Functions
sidebar:
  order: 4
slug: methods-of-mathematics/probability-and-statistics/probability-functions
prev: true
next: true
---

## Probability Mass Function

Used for discrete random variables. Gives the probability that a discrete random variable $X$ is exactly equal to some value $x$.

Properties of a PMF:
- $\forall x\;P(x) \geq 0$
- $\sum_{x} P(x) = 1$

For example, if $X$ represents the outcome of a fair die roll, then: $ $

```math
P(X = 1) = P(X = 2) = ... = P(X = 6) = \frac{1}{6}
```

## Probability Density Function

Used for continuous random variables. Doesn't give the probability at an exact point (which is always 0 for continuous variables). Instead, gives the relative likelihood of the random variable taking on a value in a small interval around a point.

Properties of a PDF:
- $\forall x\; f(x) \geq 0$
- $\int_{-\infty}^{\infty} f(x)\; \text{d}x = 1$
- The probability of an event is the integral of the PDF over the region corresponding to the event: $P(a \leq X \leq b) = \int_{a}^{b} f(x) dx$

For example, if $X$ follows a standard normal distribution, its PDF is $f(x) = \frac{1}{\sqrt{2\pi}}e^{-\frac{x^2}{2}}$

## Cumulative Distribution Function

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
