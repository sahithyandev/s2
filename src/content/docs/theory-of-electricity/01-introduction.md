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
- [Capacitors](https://s1.sahithyan.dev/electrical-fundamentals/capacitors/) - Voltage through a capacitor cannot change instantaneously
- [Inductors](https://s1.sahithyan.dev/electrical-fundamentals/inductors/)- Current through an inductor cannot change instantaneously
- [Impedance & Admittance](https://s1.sahithyan.dev/electrical-fundamentals/impedance-and-admittance/)
- [Active elements](https://s1.sahithyan.dev/electrical-fundamentals/circuit-elements/#active)

### Types of active elements

- Independent source  
  The terminal voltage or current depends only on the loading & internal source quantity.
- Dependent source  
  The terminal voltage or current depends on another circuit quantity such as a voltage or current. Categorized into 4.

### Recommended textbooks

- Charles K., Alexander, M. N. O. S., **Fundamentals of Electric Circuits 5th Edition**,
  McGraw Hill, NewYork, NY, USA, 2013, ISBN 978-0-07-338057-5
- Hambley, A. R., **Electrical Engineering Principles and Applications 5th Edition**, Pearson
  Education, Inc., Upper Saddle River, New Jersey,USA, 2011, ISBN-13: 978-0-13-213006-6.
- Nahvi M., Edminister J.A., **Electric Circuits 4th Edition**, Schaum's Outline Series, McGraw
  Hill, New York, NY, USA 2003, DOI: 10.1036/0071425829.
- **Theory and Problems of Basic Electrical Engineering**, D P Kothari, I J Kothari, Prentice
  Hall of India, New Delhi
- **Electrical Engineering Fundamentals**, Vincent Del Toro, Prentice Hall of India, New Delhi

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
