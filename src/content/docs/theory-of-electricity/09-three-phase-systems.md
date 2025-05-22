---
title: Three Phase Systems
sidebar:
  order: 9
slug: theory-of-electricity/three-phase-systems
prev: true
next: true
---

### Phasor representation

Suppose $V = V_m \sin{(\omega t + \alpha)}$ is a phasor. $ $

```math
\dot{V} = j\omega \cdot V
```

```math
\int V = \frac{1}{j\omega} \cdot V
```

## Definitions

### Attenuation & Phase Shift

Suppose a linear, passive network has the input and output as:

```math
E_\text{in} = E_m \sin{(\omega t)}\;\; \text{and} \;\;E_\text{out} = A E_m \sin{(\omega t + \alpha)}
```

Here $A$ is the attenuation or magnification factor and $\alpha$ is the phase shift.

## Power

Power on a 1-phase circuit can be easily found using 1-phase power formula:

```math
P_\text{ph} = V_\text{ph} \cdot I^*_\text{ph} = P_\text{active} + j P_\text{reactive}
```

Here $I^*_\text{ph}$ is the complex conjugate of the current phasor. $ $

## Symmetrical Components

A technique used to handle unbalanced voltages or current sources. Any unbalanced system of three-phase circuits can be decomposed into three symmetrical components:

- Positive sequence ($\mathbf{a}$)   
  Has same phase sequence as the original 3-phase system
- Negative sequence ($\mathbf{b}$)    
  Has reverse phase sequence as the original 3-phase system
- Zero sequence ($\mathbf{c}$)   
  Has equal magnitude and phase angle in all 3-phases

```math
\begin{bmatrix}
  A \\
  B \\
  C \\
\end{bmatrix}
=
\begin{bmatrix}
  A_0 \\
  B_0 \\
  C_0 \\
\end{bmatrix}
+
\begin{bmatrix}
  A_1 \\
  B_1 \\
  C_1 \\
\end{bmatrix}
+
\begin{bmatrix}
  A_2 \\
  B_2 \\
  C_2 \\
\end{bmatrix}
```

The above equation can be simplified as below. Here $\alpha = 1.0\; \angle\; 0^\circ$. $ $

```math
\begin{bmatrix}
  A \\
  B \\
  C \\
\end{bmatrix}
=
\begin{bmatrix}
  1 & 1 & 1 \\
  1 & \alpha^2 & \alpha \\
  1 & \alpha & \alpha^2 \\
\end{bmatrix}
\begin{bmatrix}
  A_0 \\
  B_0 \\
  C_0 \\
\end{bmatrix}
```

### Symmetrical component matrix

```math
[\Delta]=
\begin{bmatrix}
  1 & 1 & 1 \\
  1 & \alpha^2 & \alpha \\
  1 & \alpha & \alpha^2 \\
\end{bmatrix}
```

```math
[\Delta]^{-1}=
\frac{1}{3}
\begin{bmatrix}
  1 & 1 & 1 \\
  1 & \alpha & \alpha^2 \\
  1 & \alpha^2 & \alpha \\
\end{bmatrix}
= \frac{1}{3} \cdot [\Delta]^{*}
```

### Power

```math
S =
3V_\text{A,0} I^*_\text{A,0}+
3V_\text{A,1} I^*_\text{A,1}+
3V_\text{A,2} I^*_\text{A,2}+
```
```math
S = 3
\begin{bmatrix}
V_\text{A,0} & V_\text{A,1} & V_\text{A,2} \\
\end{bmatrix}
\begin{bmatrix}
I^*_\text{A,0} \\
I^*_\text{A,1} \\
I^*_\text{A,2} \\
\end{bmatrix}
```

```math
S = 3 [V_\text{Sy}]^{T} [I_\text{Sy}]^*
```

### Impedances

```math
[Z_p] = 
\begin{bmatrix}
  Z_s & Z_m & Z_m \\
  Z_m & Z_s & Z_m \\
  Z_m & Z_m & Z_s \\
\end{bmatrix}
```

```math
[Z_s] = [\Delta]^{-1} Z_p [\Delta]
```
