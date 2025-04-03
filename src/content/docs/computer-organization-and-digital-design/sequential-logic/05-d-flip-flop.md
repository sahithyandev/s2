---
title: D Flip-flop
sidebar:
  order: 5
slug: computer-organization-and-digital-design/sequential-logic/d-flip-flop
prev: true
next: true
---

Aka. data or delay flip-flop. Captures and stores the input at a specific tick.
Has 2 inputs: $D$ and $Clk$, 1 output: $Q$.

## Characteristics

- Edge-triggered: The D flip-flop changes its state only on the rising or
  falling edge of the clock signal.
- Single input: It has a single data input (D) and two outputs (Q and Q').
- Data storage: It is commonly used to store a single bit of data.

## Excitation table

| Current State (Q) | Next State (Q+) | D   |
| ----------------- | --------------- | --- |
| 0                 | 0               | 0   |
| 0                 | 1               | 1   |
| 1                 | 0               | 0   |
| 1                 | 1               | 1   |
