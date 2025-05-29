---
title: Double Integrals
sidebar:
  order: 17
slug: methods-of-mathematics/multivariable-calculus/double-integrals
prev: true
next: false
---

Suppose $f$ is defined on $R = [a,b] \times [c,d]$.

The double integral of $f$ over $R$ is defined as:

```math
\iint_R f(x,y) = \lim_{m,n \to \infty} \sum_{i=1}^m \sum_{j=1}^n f(x_{ij}^{*},y_{ij}^*) \Delta x \Delta y
```

if the limit exists.

## Properties

```math
\iint_D (f + g)\,\text{d}A =
\iint_D f\,\text{d}A +
\iint_D g\,\text{d}A
```

```math
\iint_D cf\,\text{d}A =
c\left(\iint_D f\,\text{d}A\right)
```

If $f \ge g$ on all points of $D$:
```math
\iint_D f\,\text{d}A \ge
\iint_D g\,\text{d}A
```

If $D$ is the union of non-overlapping regions $D_1$ and $D_2$:
```math
\iint_D f\,\text{d}A =
\iint_{D_1} f\,\text{d}A +
\iint_{D_2} f\,\text{d}A
```

## Fubini's Theorem

**If** $f$ is continuous on $R = [a,b] \times [c,d]$, then:

```math
\iint_R f(x,y)\,\text{d}A =
\int_a^b \int_c^d f(x,y)\;\text{d}y\,\text{d}x =
\int_c^d \int_a^b f(x,y)\;\text{d}x\,\text{d}y
```

More generally, this is true if we assume that f is bounded on R, f is discontinuous only on a finite number of
smooth curves, and the iterated integrals exist.

:::note[Separable function]

**If** $f$ can be factored as $g(x)h(y)$ **then**:

```math
\iint_R f(x,y)\,\text{d}A =\int_a^b g(x)\,\text{d}x \int_c^d h(y)\,\text{d}y
```

:::

## Non-recatangular regions

$f$ is continuous and $D$ lies between two continuous functions of $x$.

Suppose $D = [a,b] \times [g_1(x), g_2(x)]$. $ $

```math
\iint_D f(x,y)\,\text{d}A =\int_a^b \int_{g_1(x)}^{g_2(x)} f(x,y)\;\text{d}y\,\text{d}x
```

Similarily it can be extended when two continuous functions of $y$ are given. $ $
