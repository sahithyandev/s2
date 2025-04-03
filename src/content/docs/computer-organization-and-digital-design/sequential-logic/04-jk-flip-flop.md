---
title: JK Flip-flop
sidebar:
  order: 4
slug: computer-organization-and-digital-design/sequential-logic/jk-flip-flop
prev: true
next: true
---

Has 2 inputs: $J$ and $K$, and 1 output: $Q$. Invalid state of SR flip-flop is
eliminated here.

- When J = 0 and K = 0, the output Q remains unchanged (no change state).
- When J = 0 and K = 1, the output Q is reset to 0 (reset state).
- When J = 1 and K = 0, the output Q is set to 1 (set state).
- When J = 1 and K = 1, the output Q toggles its state (toggle state).

The JK flipflop is widely used in digital systems for counters, shift registers,
and other applications where toggling or controlled state changes are required.

## Excitation table

| Current State (Q) | Next State (Q+) | J   | K   |
| ----------------- | --------------- | --- | --- |
| 0                 | 0               | 0   | X   |
| 0                 | 1               | 1   | X   |
| 1                 | 0               | X   | 1   |
| 1                 | 1               | X   | 0   |
