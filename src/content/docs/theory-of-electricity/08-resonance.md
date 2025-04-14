---
title: Resonance
slug: theory-of-electricity/resonance
sidebar:
  order: 8
prev: true
next: true
---

A circuit is said to be "at resonance" when its power factor becomes 1.

### Resonance frequency

Frequency at resonance. Denoted by $f_0$. $ $

### Stored energy

In an electric circuit, energy is stored in both:

- electrostatic force in the capacitance
- electromagnetic force in the inductance

Oscillations occur when the energy gets transferred between the 2. Resistance
causes energy losses and decreases the oscillation.

- Maximum energy stored in the electromagnetic field occurs in the inductor when
  current is a maximum
- Maximum energy stored in the electrostatic field occurs in the capacitor when
  voltage is a maximum.

For calculation purposes, energy stored at either the peak current or the peak
voltage is considered. For a series circuit, it is easier to consider the
current through the inductance rather than the voltage across the capacitor.

## Series resonance

When current through a circuit for a given voltage source reaches its maximum.
Occurs when:

```math
\omega L = \frac{1}{\omega C}
```

### Quality factor

A relationship between maximum energy stored and energy dissipation.

```math
Q = \frac{L\omega_0}{R} = \frac{1}{L\omega_0 R}
```

```math
Q_s = 2\pi\frac{\text{maximum stored energy}}{\text{energy dissipation per cycle}}
```

## Parallel resonance

When voltage across a circuit for a given current source reaches its maximum.

In a series connection, resonance condition is achieved at:
