---
title: Fixed Point Method
sidebar:
  order: 3
slug: methods-of-mathematics/numerical-methods/fixed-point-method
prev: true
next: false
---

The number $p$ is a fixed point of the function $f$ if $f(p) = p$.

## Existence and uniqueness of a fixed point

**If** $g \in C[a,b]$ and $g(x) \in [a,b] \forall x \in [a,b]$, **then** $g$ has
at least one fixed point in $[a,b]$

**If** in addition, $g'(x)$ exists on $(a,b)$ and
$\exists k \text{s.t.} 0\lt k \lt 1$ and:

```math
|g'(x)| \leq k, \forall x \in (a,b)
```

**then** $g$ has a unique fixed point in $(a,b)$.

:::note

Root finding ($f(p) = 0$) and fixed point problems ($f(x) = x - g(x)$) are
equivalent classes if both functions have a linear relationship.

:::

## Iteration algorithm

Start with $p_0$. Iterate using $p_{n+1} = g(p_n)$ until convergence.

### Implementation

```py
def fixed_point(g, p0, tolerance=1e-6, max_iteration_count=100):
    p = p0
    for _ in range(max_iteration_count):
        p_new = g(p)
        if abs(p_new - p) < tolerance:
            return p_new
        p = p_new
    raise ValueError("Fixed point not found")
```

## Fixed point theorem

Suppose:

- $g \in C[a,b]$ and $g(x) \in [a,b] \forall x \in [a,b]$
- $g'$ exists on $(a,b)$ and
- $\exists k \text{s.t.} 0 \lt k \lt 1$ and
  $\lvert g'(x) \rvert \le k \forall x \in (a,b)$

Then

```math
\lvert p_n - p \rvert \le k^n \max\{p_0 - a, b - p_0\}
```

and

```math
\lvert p_n - p \rvert \le \frac{k^n}{1-k} \lvert p_1 - p_0 \rvert
```
