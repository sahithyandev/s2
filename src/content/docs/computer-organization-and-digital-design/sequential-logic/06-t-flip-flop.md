---
title: T Flip-flop
sidebar:
  order: 6
slug: computer-organization-and-digital-design/sequential-logic/t-flip-flop
prev: true
next: true
---

Aka. toggle flip-flop. Has 1 input: $T$. Toggles its output state when its input
is high (1). If the input is low (0), the output remains unchanged. Derived from
a JK flip-flop by tying both the $J$ and $K$ inputs together.

## Characteristics

- **Input (T):** Determines whether the output toggles or remains the same.
- **Output (Q):** Represents the current state of the flip-flop.
- **Toggle Behavior:** When T = 1, the output switches (toggles) from 0 to 1 or
  from 1 to 0.

### Excitation table

| Current State (Q) | Next State (Q+) | T   |
| ----------------- | --------------- | --- |
| 0                 | 0               | 0   |
| 0                 | 1               | 1   |
| 1                 | 0               | 1   |
| 1                 | 1               | 0   |

## Applications

- **Counters:** T flip-flops are commonly used in binary counters due to their
  toggling nature.
- **Frequency Division:** They can divide the frequency of a clock signal by 2.
- **State Machines:** Useful in designing sequential circuits and state
  machines.
