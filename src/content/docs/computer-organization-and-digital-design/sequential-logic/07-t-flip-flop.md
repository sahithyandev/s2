---
title: T Flip-flop
sidebar:
  order: 7
slug: computer-organization-and-digital-design/sequential-logic/t-flip-flop
prev: true
next: true
---

Aka. toggle flip-flop. Has 1 input: $T$. Toggles its output state when its input
is high (1). If the input is low (0), the output remains unchanged. Derived from
a JK flip-flop by tying both the $J$ and $K$ inputs together.

## Characteristics

### Excitation table

| Current State (Q) | Next State (Q+) | T   |
| ----------------- | --------------- | --- |
| 0                 | 0               | 0   |
| 0                 | 1               | 1   |
| 1                 | 0               | 1   |
| 1                 | 1               | 0   |
