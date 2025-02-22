---
title: Differentiability
sidebar:
  order: 4
slug: methods-of-mathematics/multivariable-calculus/differentiability
prev: true
next: true
---

## Partial derivative

Suppose $f: (x,y) \rightarrow \mathbb{R}$. $f_x$ is the partial derivative of $f$ with respect to $x$. This derivative is got by considering $y$ as a constant. Also denoted by $\frac{\partial{f}}{\partial{x}}$, $f_x(x,y)$. The definition can be extended for functions with more than 2 inputs.

Partial derivative of $f(x,y)$ with respect to $x$ at the point $(a,b)$ is:

```math
f_x(a,b) = \lim_\limits{h \to 0} \frac{f(a+h,b) - f(a,b)}{h}
```

Provided that the above limit exists. $f(x,b)$ must be continous at $x=a$.

### Higher partial derivatives

Similar to higher order derivatives of single-variable functions, the same logic can be extended for mutlivariable functions.

```math
\frac{\partial^2 f}{\partial x^2} = \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial x} \right) = f_{xx}
```

```math
\frac{\partial^2 f}{\partial y^2} = \frac{\partial}{\partial y} \left( \frac{\partial f}{\partial y} \right) = f_{yy}
```

```math
\frac{\partial^2 f}{\partial y \partial x} = \frac{\partial}{\partial y} \left( \frac{\partial f}{\partial x} \right) = f_{yx}
```

```math
\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial y} \right) = f_{xy}

```

## Differentiable

For a single-variable function $f$, if $f$ is differentiable at $x_0$, then the graph of $f$ will have a tangent line at $x_0$. The tangent line's equation is:

```math
y - f(x_0) = f'(x_0)(x - x_0)
```

The same idea can be generalized to two-variable functions. They will have a tangent plane instead of a line.

Suppose $z=f(x,y)$. **If** $f_x(a,b)$ and $f_y(a,b)$ exists and $\Delta{z}$ can be expressed in the below form, **then** $f$ is differentiable at $(a,b)$.

```math
\Delta z = \Delta x f_x(a,b) + \Delta y f_y(a,b) + \epsilon_1\Delta x + \epsilon_2 \Delta y
```

where $\epsilon_1$ and $\epsilon_2$ approach $0$ as $(\Delta x, \Delta y)$ approach $(0,0)$.

### Implies Continuity

```math
f \text{ is differentiable} \implies f \text{ is continous}
```
