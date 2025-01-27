---
title: Theory of Electricity
sidebar:
  label: Introduction
  order: 1
slug: theory-of-electricity/introduction
prev: false
next: true
---

Review these from [S1](https://s1.sahithyan.dev).
- [Charge](https://s1.sahithyan.dev/electrical-fundamentals/basics/introduction#charge)
- [Potential difference](https://s1.sahithyan.dev/electrical-fundamentals/basics/introduction#voltage)
- [Current](https://s1.sahithyan.dev/electrical-fundamentals/basics/introduction#current)
- [Power](https://s1.sahithyan.dev/electrical-fundamentals/basics/introduction#power)
- [Kirchoff's laws](https://s1.sahithyan.dev/electrical-fundamentals/kirchoff-laws/)
- [Circuit elements](https://s1.sahithyan.dev/electrical-fundamentals/circuit-elements/)
- [Resistors](https://s1.sahithyan.dev/electrical-fundamentals/resistors/)
- [Capacitors](https://s1.sahithyan.dev/electrical-fundamentals/capacitors/)
- [Inductors](https://s1.sahithyan.dev/electrical-fundamentals/inductors/)
- [Impedance & Admittance](https://s1.sahithyan.dev/electrical-fundamentals/impedance-and-admittance/)
- [Active elements](https://s1.sahithyan.dev/electrical-fundamentals/circuit-elements/#active)

### Types of active elements

- Independent source   
  The terminal voltage or current depends only on the loading & internal source quantity.
- Dependent source   
  The terminal voltage or current depends on another circuit quantity such as a voltage or current. Categorized into 4.

## Special functions

### Unit step function

```math
H(t) =
\begin{cases}
0,  &  t<0 \\
1, & t>0
\end{cases}
```

### Unit impulse function 

```math
\delta(t) =
\begin{cases}
0,  &  t<0 \lor t > 0 \\
\infty, & t=0
\end{cases}
```

#### Properties

Area under the curve is $1$. $ $

```math
\int_{-\infty}^{\infty} \delta(t)\, \text{d}t = 1
```

```math
\int_{-\infty}^{\infty} f(t)\,\delta(t)\, \text{d}t = f(0)
```

```math
\int_{-\infty}^{\infty} f(t-k)\,\delta(t)\, \text{d}t = f(k)
```
