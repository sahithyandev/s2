---
title: SR Latch
sidebar:
  order: 19
slug: computer-organization-and-digital-design/sr-latch
prev: true
next: true
---

Short for Set-Reset Latch. A fundamental memory element made from cross-coupled
logic gates that can store one bit of data. Can be made with NOR or NAND gates.

### NOR-based SR Latch

When made with NOR gates:

- Set (S) and Reset (R) are active HIGH
- When S=1, R=0: Output Q=1 (Set state)
- When S=0, R=1: Output Q=0 (Reset state)
- When S=0, R=0: Latch maintains previous state
- When S=1, R=1: Invalid/forbidden state

### NAND-based SR Latch

When made with NAND gates:

- Set (S) and Reset (R) are active LOW
- When S=0, R=1: Output Q=1 (Set state)
- When S=1, R=0: Output Q=0 (Reset state)
- When S=1, R=1: Latch maintains previous state
- When S=0, R=0: Invalid/forbidden state

The key difference is NAND uses active LOW inputs while NOR uses active HIGH
inputs.

Both types have two stable states (Q=1 or Q=0) and maintain their state until
inputs change. The invalid state should be avoided as it creates an undefined
output.

## Latch

SR latch that is controlled by a _enable_ signal. Level sensitive.

## Flip flop

SR latch that is controlled by a clock signal. Edge sensitive.
