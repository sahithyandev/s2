---
title: Tangent Planes
sidebar:
  order: 10
slug: methods-of-mathematics/multivariable-calculus/tangent-planes
prev: true
next: false
---

Let

- $F(x,y,z)$ is a 3-variable function
- $S$ is the level surface of $F$ at $F(x,y,z)=k$
- $C: r(t) = (x(t), y(t), z(t))$ be a continuous curve on $S$
- $P = r(t_0) = (x_0,y_0,z_0)$ be a point on $C$

All points on $C$ satisfy the equation $F = 0$. The below equation can be
deduced by differentiating the equation.

```math
\bigtriangledown F \cdot \boldsymbol{\underline{r}'} = 0
```

The gradient vector of $F$ is perpendicular to the tangent vector
$\boldsymbol{\underline{r}'}$ (of $C$).

Tangent plane to $S$ can be defined by applying the above equation at point $P$.
**If** $F(x_0,y_0,z_0) \neq 0$, **then** the tangent plane to $S$ at $P$ is the
one that passes through $P$ and has a normal vector
$\bigtriangledown F(x_0,y_0,z_0)$.

The equation of the tangent plane:

```math
F_x(x_0, y_0, z_0)(x − x_0) + F_y(x_0, y_0, z_0)(y − y_0) + F_z(x_0, y_0, z_0)(z − z_0) = 0
```

## Normal line

Normal line to the surface $S$ at point $P$, is the line passing through $P$ and
perpendicular to the tangent plane. The equation of the normal line is:

```math
\frac{x − x_0}{F_x(x_0,y_0,z_0)}=
\frac{y − y_0}{F_y(x_0,y_0,z_0)}=
\frac{z − z_0}{F_z(x_0,y_0,z_0)}
```
