---
title: Tangent Planes
sidebar:
  order: 10
slug: methods-of-mathematics/multivariable-calculus/tangent-planes
prev: true
next: true
---

Let

- $F(x,y,z)$ is a 3-variable function
- $S$ is the level surface of $F$ at $F(x,y,z)=k$
- $P = (x_0,y_0,z_0)$ be a point on $S$
- $C: \boldsymbol{r}(t) = (x(t), y(t), z(t))$ be a continuous curve on $S$, passing through $P$
- $P = \boldsymbol{r}(t_0)$

The equation of the tangent plane on $P$: $ $

```math
F_x(x_0, y_0, z_0)(x − x_0) + F_y(x_0, y_0, z_0)(y − y_0) + F_z(x_0, y_0, z_0)(z − z_0) = 0
```

:::note[Proof Hint]

- All points on $C$ satisfy the equation $F = k$
  ```math
  F\big(x(t),y(t),z(t)\big) = k
  ```
- By differentiating the above equation: $\bigtriangledown F \cdot \boldsymbol{\underline{r}'} = 0$    
  The gradient vector of $F$ is perpendicular to $\boldsymbol{\underline{r}'}$, the tangent vector of $C$
- The tangent plane of $S$ on $P can be defined as:   
  $\bigtriangledown F(x_0,y_0,z_0) \cdot \big(\boldsymbol{p} - \boldsymbol{\underline{r}}(t_0)\big) = 0$

:::

## Normal line

Normal line to the surface $S$ at point $P$, is the line passing through $P$ and
perpendicular to the tangent plane. The equation of the normal line is:

```math
\frac{x − x_0}{F_x(x_0,y_0,z_0)}=
\frac{y − y_0}{F_y(x_0,y_0,z_0)}=
\frac{z − z_0}{F_z(x_0,y_0,z_0)}
```
