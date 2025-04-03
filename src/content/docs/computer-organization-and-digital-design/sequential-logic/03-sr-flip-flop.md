---
title: SR Flip-flop
sidebar:
  order: 3
slug: computer-organization-and-digital-design/sequential-logic/sr-flip-flop
prev: true
next: true
---

A basic type of sequential logic circuit used for storing a single bit of data.
It has two inputs: $S$ and $R$, and two outputs: $Q$ and $\overline{Q}$. The
behavior of the SR flip-flop is determined by the combination of the S and R
inputs:

| S   | R   | Q         | Q'        | Description              |
| --- | --- | --------- | --------- | ------------------------ |
| 0   | 0   | No Change | No Change | Holds the previous state |
| 0   | 1   | 0         | 1         | Resets the output to 0   |
| 1   | 0   | 1         | 0         | Sets the output to 1     |
| 1   | 1   | Undefined | Undefined | Invalid state            |

## Characteristics

### Excitation table

| Current State (Q) | Next State (Q+) | S   | R   |
| ----------------- | --------------- | --- | --- |
| 0                 | 0               | 0   | X   |
| 0                 | 1               | 1   | 0   |
| 1                 | 0               | 0   | 1   |
| 1                 | 1               | X   | 0   |

## Applications

- Basic memory storage elements.
- Control circuits.
- Debouncing switches.
