---
title: Directional Derivative
sidebar:
  order: 8
slug: methods-of-mathematics/multivariable-calculus/directional-derivative
prev: true
next: false
---

Rate of change of a multivariable function in the direction of the unit vector
$\boldsymbol{u}=(a,b)$. $ $

Directional derivative of $f$ in the direction $\boldsymbol{u}$ is:

```math
D_{\boldsymbol{u}} f(x_0,y_0) =
\lim_\limits{h\to 0}
\frac{\Delta z}{h} =
\lim_\limits{h\to 0}
\frac{f(x_0+ha, y_0+hb) - f(x_0,y_0)}{h}
```

**If** $f(x,y)$'s first partials $f_x$ and $f_y$ are continuous, **then** $f$
has a directional derivative in any direction $\boldsymbol{u}=(a,b)$.

```math
D_{\boldsymbol{u}} f(x,y) = af_x(x,y) + bf_y(x,y)
```

Also the directional derivative can be written as:

```math
D_{\boldsymbol{u}} f(x_0,y_0) = <f_x(x_0,y_0),f_y(x_0,y_0)> \cdot \boldsymbol{u}
```

## Gradient

Denoted by $\bigtriangledown f$. $ $

```math
\bigtriangledown f(x_0,y_0) =
 <f_x(x_0,y_0),f_y(x_0,y_0)>
 =
\frac{\partial f}{\partial x}\boldsymbol{i}
+\frac{\partial f}{\partial y}\boldsymbol{j}
```

## Maxmimum of Directional Derivative

Maximum value of the directional derivative $D_\boldsymbol{u} f$ is
$\lvert \bigtriangledown f \rvert$ and occurs when the gradient vector and
$\boldsymbol{u}$ has the same direction.

## Tangent planes to level surfaces

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

The gradient vector of $F$ at $P$ is perpendicular to the tangent vector
$\boldsymbol{\underline{r}'}$ of $C$. **If** $F(x_0,y_0,z_0) \neq 0$, **then**
the tangent plane to $S$ at $P$ is the one that passes through $P$ and has a
normal vector $\bigtriangledown F(x_0,y_0,z_0)$.

The equation of the tangent plane:

```math
F_x(x_0, y_0, z_0)(x − x_0) + F_y(x_0, y_0, z_0)(y − y_0) + F_z(x_0, y_0, z_0)(z − z_0) = 0
```

## Normal line

Normal line to $S$ at $P$ is the line passing through $P$ and perpendicular to
the tangent plane. The equation of the normal line is:

```math
\frac{x − x_0}{F_x(x_0,y_0,z_0)}+
\frac{y − y_0}{F_y(x_0,y_0,z_0)}+
\frac{z − z_0}{F_z(x_0,y_0,z_0)}+
```
