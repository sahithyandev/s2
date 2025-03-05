---
title: Introduction to Numerical Methods
sidebar:
  label: Introduction
  order: 1
slug: methods-of-mathematics/numerical-methods/introduction
prev: false
next: false
---

## Round-Off Errors

The error that is produced when a calculator or computer is used to perform real
number calculations is called round-off error. Real numbers are typically
represented in computers using floating-point form.

## Machine Numbers

Represented in the normalized decimal floating-point form.

```math
\pm\;0.d_{1}d_{2}\ldots d_{k}\times 10^{n},\quad 1\leq d_{1}\leq 9,\ \text{and}\ 0 \leq d_{i}\leq 9
```

Aka. k-digit decimal machine numbers. Any positive real number can be written in
the above form.

The floating-point form of $y$, denoted $fl(y)$, is obtained by terminating the
mantissa of $y$ at $k$ decimal digits. There are 2 common ways of performing
this termination.

- chopping: chop off the digits $d_{k+1}d_{k+2} \dots$ to produce the
  floating-point form
- rounding: when $d_{k+1} ≥ 5$, add $1$ to $d_k$ to obtain $fl(y)$ and then chop
  off all but the first k digits.

## Measuring Errors

Suppose $*p$ is an approximation of $p$.

### Absolute Error

```math
\lvert\, p - *p\,\rvert
```

### Relative Error

```math
\bigg\lvert{\frac{p - *p}{p}}\bigg\rvert
```

## Finite-Digit Arithmetic

Machine arithmetic are done on finite-digits and are not exact. Suppose
$\oplus, \ominus, \otimes, \oslash$ are machine addition, subtraction,
multiplication and division.

```math
x \oplus y = f_l(f_l(x) + f_l(y))
```

```math
x \ominus y = f_l(f_l(x) - f_l(y))
```

```math
x \otimes y = f_l(f_l(x) \times f_l(y))
```

```math
x \oslash y = f_l(f_l(x)/f_l(y))
```

Due to this, the accuracy is lost to some extent. The accuracy can be increased
by rearranging calculations.

## Truncating Error

Occurs because of using approximation in place of an exact mathematical
procedure.
