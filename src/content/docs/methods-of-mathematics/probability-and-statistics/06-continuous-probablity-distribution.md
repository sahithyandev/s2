---
title: Continuous Probability Distribution
sidebar:
  order: 6
slug: >-
  methods-of-mathematics/probability-and-statistics/continuous-probablity-distribution
prev: true
next: true
---

## Probability Density Function

Denoted by $f$. Used for continuous random variables. Doesn't give the probability at an exact point (which is always 0 for continuous variables). Instead, gives the relative likelihood of the random variable taking on a value in a small interval around a point. $ $

The probability of an event is the integral of the PDF over the region corresponding to the event:

```math
P(a \leq X \leq b) = \int_{a}^{b} f(x) dx
```

Probability of all the values combined, is 1:

```math
\int_{-\infty}^{\infty} f(x)\; \text{d}x = 1
```

:::note
**If** $X$ follows a standard normal distribution, **then** its PDF is: $ $

```math
f(x) = \frac{1}{\sqrt{2\pi}}\exp\bigg(-\frac{x^2}{2}\bigg)
```

:::

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

## Covariance

```math
\text{Cov}(X,Y) = E(XY) - E(X)E(Y)
```

## Cumulative Distribution Function

```math
F(x) = \int_{-\infty}^{x} f(t) dt
```

## Example

Consider a continuous random variable $X$ that follows a uniform distribution over the interval [0, 4], with probability density function: $ $

```math
f(x) = \begin{cases}
0.25 & \text{for } 0 \leq x \leq 4 \\
0 & \text{otherwise}
\end{cases}
```

The mean would be: $E(X) = \int_{0}^{4} x \cdot \frac{1}{4} \, dx = \frac{1}{4} \cdot \frac{x^2}{2} \bigg|_{0}^{4} = \frac{1}{4} \cdot \frac{16}{2} = 2$. $ $

The variance would be: $\text{Var}(X) = \int_{0}^{4} (x-2)^2 \cdot \frac{1}{4} \, dx = \frac{1}{4} \cdot \frac{16}{12} = \frac{4}{3} \approx 1.33$. $ $
