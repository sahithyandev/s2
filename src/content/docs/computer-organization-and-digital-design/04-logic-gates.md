---
title: Logic Gates
sidebar:
  order: 4
slug: computer-organization-and-digital-design/logic-gates
prev: true
next: false
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

Logical circuits are a abstraction of transistor circuits. The circuits can be built using <abbr title="Transistor-to-Transistor Logic">TTL</abbr> or <abbr title="Complementary Metal Oxide Semiconductor">CMOS</abbr>.

### TTL

Two or more transistors are used.

### CMOS

Uses 2 metal oxide semiconductors.

:::note

It is recommended to design CMOS with NAND gates only. NAND gates have more fanout and less power comsumption. The other gates can be implemented using NAND.

:::

## Logic circuits

- Combinational
  - no memory
  - no feedback loops
  - output depends only on the current input
- Sequential
  - memory
  - feedback loops
  - output depends on the current input and current state
