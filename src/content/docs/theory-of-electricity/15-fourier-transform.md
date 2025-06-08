---
title: Fourier Transform
sidebar:
  order: 15
slug: theory-of-electricity/fourier-transform
prev: true
next: false
---

```math
F(\omega) = \frac{1}{2\pi} \int_{-\infty}^{\infty} f(t) e^{-i\omega t}\,\text{d}t
```

$F$ is a continuous function of $\omega$, and is called the spectrum of $f(t)$.

Used in telecommunications, and in transient analysis, especially where the circuit parameters are frequency dependent.

## Fourier inverse transform

```math
F(t) = \int_{-\infty}^{\infty} F(\omega) e^{-i\omega t}\,\text{d}\omega
```
