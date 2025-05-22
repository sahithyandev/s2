---
title: Approximations
sidebar:
  order: 7
slug: methods-of-mathematics/probability-and-statistics/approximations
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

## Normal approximation for Bin(n,p)

When $n$ is large and $np > 5$:

```math
X \sim \text{Bin}(n,p)
\approx
X \sim N(np, np(1-p))
```

## Normal approximatiox for Poissox(p)

When $p > 10$: $ $

```math
X \sim \text{Poisson}(p)
\approx
X \sim N(p, p)
```
