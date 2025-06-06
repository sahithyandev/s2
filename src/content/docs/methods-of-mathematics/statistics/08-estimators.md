---
title: Estimators
sidebar:
  order: 8
slug: methods-of-mathematics/statistics/estimators
prev: true
next: false
---

An estimator is a guess of a population parameter based on a sample data.

### Process of Estimation

Estimating a population parameter from a sample data.

### Unbiasedness

If a statistic $e$ is used as an estimator for population parameter $\theta$ and $E(e) = θ$, then it is said to be an unbiased estimator of $\theta$.


## Types
### Point estimator

A statistics which can be used to get a single number as the result. The estimated value can be considered as the most plausible value of a parameter.

### Interval estimator

A statistics which can give an upper limit and a lower limit calculation based on the point estimator. A pair of values calculated as the upper and the lower limits for a population parameter.

## Accuracy

Mean, variance, standard deviation can be estimated with a sample.

Sample mean is an unbiased estimator for a continuous random variable. Aka. best linear unbiased estimator (BLUE).

Sample variance is an unbiased estimator.

:::note

Sample variance can be estimated using:

```math
s^2 = \frac{1}{n - 1}\sum_{i=1}^{n} (x_i - \bar{x})^2 = \frac{1}{n-1}\bigg[ \sum_{i=1}^{n} x_i^2 - n\bar{x}^2 \bigg]
```

:::
