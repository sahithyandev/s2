---
title: Logic Gates
sidebar:
  order: 4
slug: computer-organization-and-digital-design/logic-gates
prev: true
next: true
---

There are AND, OR, XOR, and their inverted versions.

### BUF

A logical gate that reflects the input as is. But there is a time delay.

#### Tri-state buffer

Works as a switch. A control signal. if the control signal is

- 0 - disconnected
- 1 - connected

## Extending for n-inputs

### XOR

Returns true **iff** when the number of true inputs are odd.

## Logical circuit representation

Logical circuits are a abstraction of transistor circuits. The circuits can be
built using <abbr title="Transistor-to-Transistor Logic">TTL</abbr> or
<abbr title="Complementary Metal Oxide Semiconductor">CMOS</abbr>.

### TTL

Two or more transistors are used.

### CMOS

Uses 2 metal oxide semiconductors.

:::note

It is recommended to design CMOS with NAND gates only. NAND gates have more
fanout and less power comsumption. The other gates can be implemented using
NAND.

:::

### Power consumption

```math
\text{Dynamic power consumption} = CV^2 f
```

Here:

- $C$ - Capacitance of the circuit
- $V$ - Supply voltage
- $f$ - Charging frequency of the capacitor

```math
\text{Static power consumption} = V I_{\text{leakage}}
```

Here:

- $V$ - Supply voltage
- $I_{\text{leakage}}$ - Leakage current

```math
\text{Energy consumption} = \text{Power} \times \text{Time}
```

## Logic circuits

|               | Combinational Logic   | Sequential Logic          |
| ------------- | --------------------- | ------------------------- |
| Memory        | No                    | Yes                       |
| Feedback loop | No                    | Yes                       |
| Output        | Depends only on input | Depends on input & memory |
