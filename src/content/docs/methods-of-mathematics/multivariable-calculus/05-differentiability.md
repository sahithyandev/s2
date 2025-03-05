---
title: Differentiability
sidebar:
  order: 5
slug: methods-of-mathematics/multivariable-calculus/differentiability
prev: true
next: true
---

## Differentiable

For a single-variable function $f$, if $f$ is differentiable at $x_0$, then the
graph of $f$ will have a tangent line at $x_0$. The tangent line's equation is:

```math
y - f(x_0) = f'(x_0)(x - x_0)
```

The same idea can be generalized to two-variable functions. They will have a
tangent plane instead of a line.

Suppose $z=f(x,y)$. **If** $f_x(a,b)$ and $f_y(a,b)$ exists and $\Delta{z}$ can
be expressed in the below form, **then** $f$ is differentiable at $(a,b)$.

```math
\Delta z = \Delta x f_x(a,b) + \Delta y f_y(a,b) + \epsilon_1\Delta x + \epsilon_2 \Delta y
```

where $\epsilon_1$ and $\epsilon_2$ approach $0$ as $(\Delta x, \Delta y)$
approach $(0,0)$.

$f$ is said to be differentiable if it is differentiable at every point in its
domain. $ $

**If** partial derivatives of $f$ is not existent at a point, **then** $f$ will
not be differentiable at that point.

**If** $f_x$ and $f_y$ are continuous throughout at an open region $D$, **then**
$f$ is differentiable at every point of $D$.

The differentiability can also be proven by proving:

```math
\lim_\limits{\Delta \rho \to 0} \frac{\Delta z - \text{d}z}{\Delta \rho} = 0
```

where $\Delta \rho = \sqrt{{\Delta x}^2 + {\Delta y}^2}$. $ $

### Implies Continuity

```math
f \text{ is differentiable} \implies f \text{ is continous}
```

### Equation of tangent plane

For the function $z=f(x,y)$ at $(x_0,y_0)$.

```math
z - z_0 = \frac{\partial f(x_0,y_0)}{\partial x} \Delta x + \frac{\partial f(x_0,y_0)}{\partial y} \Delta y

```

## Derivative

Suppose $z=f(x,y)$ where $f$ is a differentiable function of $x$ and $y$.

```math
\text{d}z
 = \frac{\partial z}{\partial x}\,\text{d}x + \frac{\partial z}{\partial y}\,\text{d}y
=\Delta x f_x(a,b) + \Delta y f_y(a,b)
```

$\text{d}z$ is called the total differential of $f$.

## Chain Rule

Let $x(t),y(t)$ be single variable differentiable functions and $f(x,y)$ be a 2
variable differentiable function having continuous first order partial
derivatives.

$f(x(t),y(t))$ is differentiable. $ $

```math
\frac{\text{d}f}{\text{d}t} = \frac{\partial f}{\partial x}\frac{\text{d}x}{\text{d}t}
+ \frac{\partial f}{\partial y}\frac{\text{d}y}{\text{d}t}
```

Can be extended for functions of more than 2 variables.
