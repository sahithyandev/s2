---
title: Numerical Differentiation
sidebar:
  order: 11
slug: methods-of-mathematics/numerical-methods/numerical-differentiation
prev: true
next: true
---

Approximate numerical formulae can be derived using [Taylor series](https://s1.sahithyan.dev/mathematics/real-analysis/taylor-series/).

## First Order Derivative

Taylor series expansion of $f(x_0+h)$ around $x_0$, truncated after $1^{\text{st}}$ derivative.

```math
f'(x_0) = \frac{f(x_0+h) - f(x_0)}{h} + \frac{h}{2!} f^{(2)}(\epsilon)
```

Here $h$ is a small positive number, and is called the step size. $ $

Error is bounded by :

```math
\frac{M \lvert h \rvert}{2}
```

### Forward difference formula

```math
f'(x_0) \approx \frac{f(x_0+h) - f(x_0)}{h}
```

Here $M$ is a bound on $f^{(2)}(x)$ between $x_0$ and $x_0 + h$.

### Backward difference formula

```math
f'(x_0) \approx \frac{f(x_0) - f(x_0 - h)}{h}
```

Here $M$ is a bound on $f^{(2)}(x)$ between $x_0$ and $x_0 - h$.

### Centered difference formula

Aka. three-point mid point formula. Truncated after $2^{\text{nd}}$ derivative. $ $

```math
f'(x_0) \approx \frac{f(x_0 + h) - f(x_0 - h)}{2h}
```

Error is in order of $O(h^2)$ which is better than $O(h)$.

:::note[Proof Hint]

- Taylor series expansion of $f(x_0+h)$ and $f(x_0-h)$ around $x_0$ are truncated after $2^{\text{nd}}$ derivative.
- The below equation is derived by subtracting the two.
  ```math
  f'(x_0) = \frac{f(x_0 + h) - f(x_0 - h)}{2h} - \frac{h^2}{3!} \frac{f^{(3)}(\epsilon_1) - f^{(3)}(\epsilon_2)}{2}
  ```

:::

## Higher Order Derivatives

Taylor series is truncated after $2^{\text{nd}}$ derivative. $ $

### Second forward difference formula 

```math
f^{(2)}(x_0) \approx
\frac{1}{h^2} \Big[ f(x_0 + 2h) - 2f(x_0 + h) + f(x_0) \Big]
```

### Second backward difference formula 

```math
f^{(2)}(x_0) \approx
\frac{1}{h^2} \Big[ f(x_0) - 2f(x_0 - h) + f(x_0 - 2h) \Big]
```

### Second centered difference formula

```math
f^{(2)}(x_0) \approx
\frac{1}{h^2} \Big[ f(x_0 + h) - 2f(x_0) + f(x_0 - h) \Big]
```

## Accuracy

The accuracy of these divided difference formulas can be increased by including additional terms in the Taylor series. In each step the accuracy is improved by a power of $h$. $ $
