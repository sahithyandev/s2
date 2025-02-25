---
title: Two Port Networks
sidebar:
  order: 3
slug: theory-of-electricity/two-port-networks
prev: true
next: true
---

An electrical network with two separate ports for input and output.

### Port

A pair of terminals through which current may enter or leave a network.

## Parameters

### Z parameters

Denoted by $[z]$. Aka. open-circuit impedance parameters. $ $

```math
\begin{bmatrix}
V_1 \\
V_2
\end{bmatrix}
=

\begin{bmatrix}
z_{11} & z_{12} \\
z_{21} & z_{22} \\
\end{bmatrix}

\begin{bmatrix}
I_1 \\
I_2
\end{bmatrix}
=

[z]
\begin{bmatrix}
I_1 \\
I_2
\end{bmatrix}

```

### Y parameters

Denoted by $[y]$. Aka. short-circuit admittance parameters. $ $

```math
\begin{bmatrix}
I_1 \\
I_2
\end{bmatrix}
=

\begin{bmatrix}
y_{11} & y_{12} \\
y_{21} & y_{22} \\
\end{bmatrix}

\begin{bmatrix}
V_1 \\
V_2
\end{bmatrix}
=

[z]
\begin{bmatrix}
V_1 \\
V_2
\end{bmatrix}
```

### Transmission parameters

![Transmission parameters](/images/theory-of-electricity/transmission-parameters.jpg)

Denoted by $T$. Aka. ABCD parameters. $ $

```math
\begin{bmatrix}
V_1 \\
I_1
\end{bmatrix}
=

\begin{bmatrix}
A & B \\
C & D \\
\end{bmatrix}

\begin{bmatrix}
V_2 \\
-I_2
\end{bmatrix}
```

Here:

- $A$ - Open circuit transfer function. Dimensionless.
- $B$ - Short circuit transfer impedance.
- $C$ - Open circuit transfer admittance.
- $D$ - Short circuit current ratio. Dimensionless.

```math
A = {\frac{V_1}{V_2}\Bigg{\rvert}}_{I_2 = 0}
\;\;\;\;
\;\;\;\;
\;\;\;\;
C = {\frac{I_1}{V_2}\Bigg{\rvert}}_{I_2 = 0}
```

```math
B = {\frac{V_1}{I_2}\Bigg{\rvert}}_{V_2 = 0}
\;\;\;\;
\;\;\;\;
\;\;\;\;
D = {\frac{I_1}{I_2}\Bigg{\rvert}}_{V_2 = 0}
```

#### Reciprocal network

A network is said to be reciprocal if $AD-BC=1$. $ $

### Hybrid parameters

```math
\begin{bmatrix}
V_1 \\
I_2
\end{bmatrix}
=

\begin{bmatrix}
h_{11} & h_{12} \\
h_{21} & h_{22} \\
\end{bmatrix}

\begin{bmatrix}
I_1 \\
V_2
\end{bmatrix}
=
[h]
\begin{bmatrix}
I_1 \\
V_2
\end{bmatrix}
```
