---
title: Approximations
sidebar:
  order: 7
slug: methods-of-mathematics/probability/approximations
prev: true
next: true
---

### Continuity Correction

The below corrections are used to adjust for the difference between discrete and continuous distributions.

| When         | Use       |
| ------------ | --------- |
| $ X > x $    | $x + 0.5$ |
| $ X \leq x $ | $x + 0.5$ |
| $ X < x $    | $x - 0.5$ |
| $ X \geq x $ | $x - 0.5$ |


## Bin(n,p) to Poisson(p)

If $n$ is large and $p$ is small, then finding a defective item in the sample is called a rare event. In practice $n>50$ and $np<5$ means the event is considered rare. In above case, the Poisson distribution gives a very close approximation to the binomial distribution.

Generally the approximation between Poisson and Binomial distribution is _good_ when $p< 0.1$ and $np < 5$.

```math
\text{Bin}(n,p) \approx \text{Poisson}(np)
```

## Normal approximation for Bin(n,p)

When $n$ is large and $np > 5$:

```math
\text{Bin}(n,p)
\approx
\text{N}(np, np(1-p))
```

## Normal approximatiox for Poisson(p)

When $p > 10$: $ $

```math
\text{Poisson}(p)
\approx
\text{N}(p, p)
```
