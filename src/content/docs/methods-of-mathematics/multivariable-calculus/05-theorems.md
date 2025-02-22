---
title: Theorems
sidebar:
  order: 5
slug: methods-of-mathematics/multivariable-calculus/theorems
prev: true
next: false
---

## Mean Value Theorem

Let $(a,b) \in \mathbb{R}^2, \delta > 0, D = \set{(x,y) \in \mathbb{R}^2 : (x-a)^2 + (y-b)^2 \lt \delta} \text{ and } f : D \rightarrow \mathbb{R}$. Suppose $f_x$ and $f_y$ exists.

**If** $P \in D$ **then** $\exists \theta, \alpha \in (0,1)$ such that:

```math
f(P_x, P_y) - f(a,b) = \Delta{x} f_x (a+\theta \Delta{x}, b)
+
 \Delta{y} f_y (a+\theta \Delta{x}, b+\alpha \Delta{y})
```

## Clairaut

Let $D \subset \mathbb{R}^2$ be open. Let $f: D \rightarrow \mathbb{R}$. **If** $f_{xy}$ and $f_{yx}$ are continous on $D$ **then** $f_{xy}=f_{yx}$.
