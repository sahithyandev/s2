---
title: Distributions
sidebar:
  order: 5
slug: methods-of-mathematics/probability-and-statistics/distributions
prev: true
next: true
---

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
