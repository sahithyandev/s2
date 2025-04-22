---
title: Continuous Probability Distribution
sidebar:
  order: 7
slug: >-
  methods-of-mathematics/probability-and-statistics/continuous-probablity-distribution
prev: true
next: true
---

## Mean

The integral is taken over the entire domain of the random variable

```math
E(X) = \mu = \int_{-\infty}^{\infty} x \cdot f(x) \, dx
```

Here $f(x)$ is the probability density function. $ $

## Variance

```math
\text{Var}(X) = \sigma^2 = \int_{-\infty}^{\infty} (x - \mu)^2 \cdot f(x) \, dx
```

An equivalent computational formula is:

```math
\text{Var}(X) = \int_{-\infty}^{\infty} x^2 \cdot f(x) \, dx - \mu^2
```

## Example

Consider a continuous random variable X that follows a uniform distribution over the interval [0, 4], with probability density function:

```math
f(x) = \begin{cases}
0.25 & \text{for } 0 \leq x \leq 4 \\
0 & \text{otherwise}
\end{cases}
```

The mean would be: $E(X) = \int_{0}^{4} x \cdot \frac{1}{4} \, dx = \frac{1}{4} \cdot \frac{x^2}{2} \bigg|_{0}^{4} = \frac{1}{4} \cdot \frac{16}{2} = 2$. $ $

The variance would be: $\text{Var}(X) = \int_{0}^{4} (x-2)^2 \cdot \frac{1}{4} \, dx = \frac{1}{4} \cdot \frac{16}{12} = \frac{4}{3} \approx 1.33$. $ $
