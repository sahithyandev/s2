---
title: Coupled Circuits
sidebar:
  order: 4
slug: theory-of-electricity/coupled-circuits
prev: true
next: true
---

### Self inductance

When the magnetic field produced by a coil causes an emf on itself.

### Mutual coupling

Mutual coupling between coils exist when one (secondary coil) is in the magnetic
field created by the other coil (primary coil).

When a time-varying current $i_p$ flows in the primary coil, a time-varying flux
$\phi_p$ is produced, which produces a back emf $e_p$.

## Magnetic field

### Magnetic field strength

Denoted by $H$. Measured in ampere per meter ($Am^{-1}$).

### Magnetic permeability

Measure of magnetization on a material when a magnetic field is applied. Depends
on the material. Denoted by $\mu$. Meausred in $Hm^{-1}$ or $NA^{-2}$.

### Magnetic flux density

Measure of strength and direction of the magnetic field. Denoted by $B$.
Measured in tesla ($T$) or $kgs^{-2}A^{-1}$ or $Nm^{-1}A^{-1}$.

```math
B = \mu H
```

## Laws

### Faraday's Law

The magnetic flux passing through a surface A is given by the surface integral:

```math
\phi = \int {B\cdot \text{d}A} = BA
```

### Ampere's Law

Line integral of magnetic field intensity around a closed path is equal to the
sum of the currents owing through the surface bounded by the path.

```math
\oint H \cdot \text{d}l = \sum i
```

When $H$ is constant (magnitude and direction) along the path, the above
equation reduces to $Hl = \sum i$.

## Definitions

### Magnetomotive force

A force acted on a coil carrying current. Denoted by $\text{mmf}$. $ $

```math
\mathfrak{f} = Ni
```

Here:

- $N$ - number of turns
- $i$ - current in the coil

### Reluctance

Reluctance of a path for magnetic flux:

```math
\mathcal{R} = \frac{l}{\mu A} = \frac{\mathfrak{f}}{\phi}
```

Here:

- $l$ - Length of the path
- $\mu$ - Permeability
- $A$ - Cross-sectional area

## Mutual Inductance

When 2 coils are coupled, part of the magnetic flux produced in the primary coil
links with secondary coil.

### Coefficient of coupling

Ratio between the produced magnetic flux and linked magnetic flux. Denoted by
$k$. Less than or equal to 1. $ $

```math
\phi_m = k\phi_p
```

### Induced emf

Since the produced flux is time-varying, an emf $e_s$ is induced in the second
coil. $ $

```math
e_p = N_p \frac{\text{d}\phi_p}{\text{d}t}
```

```math
e_s = N_s \frac{\text{d}\phi_m}{\text{d}t}
```

In the linear region of magnetization characteristic:

```math
\phi_p \propto i_p \implies e_s
= \frac{N_s \phi_m}{i_p}\frac{\text{d}i_p}{\text{d}t}
= M_{SP} \frac{\text{d}i_p}{\text{d}t}
```

Here $M_{SP}$ is the mutual inductance. $ $

```math
M_{SP} = \frac{N_s \phi_m}{i_p} = \frac{k_{SP}N_sN_p\mu A}{l}
```

Practically, coupling between the primary and secondary coils is identical to
the coupling between secondary and primary coils.

```math
k_{SP} = k_{PS}
```

```math
M_{SP} = M_{PS}= M= k\sqrt{L_pL_s}
```

### Energy stored

```math
\text{Total stored energy}=
\int{v_pi_p\text{d}t}+
\int{v_si_s\text{d}t}
```

```math
\text{Total stored energy}=
\frac{1}{2}L_pi_p^2+
\frac{1}{2}L_si_s^2
\mp
Mi_pi_s
```

The last component is the effective energy stored in the mutual inductance. It
is added to the energy when the produced fluxes on each coil aid each other;
subtracted when they oppose each other.

## Dot notation

One terminal of the coils is marked with a dot. If both currents enter or exit
from the dotted terminals, the fields aid; mutual inductance is positive.
Otherwise the fields oppose; mutual inductance is negative.

:::note

When a single coil is considered, the induced voltage would oppose the applied
voltage or the current flow.

:::
