---
title: PLA and PAL
sidebar:
  order: 9
slug: computer-organization-and-digital-design/pla-and-pal
prev: true
next: true
---

A Programmable Logic Device is a fixed architecture logic device.

## Programmable Logic Array

A PLD with programmable AND gate array followed by programmable OR gate array.

### Input Buffer

Takes in 1 input ($A$) and produces 2 outputs ($A$ and $\overline{A}$).

### Steps

- Write down the truth table
- Reduce minimal SOP form for outputs
- Find total number of input buffers (which is equal to number of inputs)
- Find total number of programmable AND gates (= no of minterms)
- Find total number of programmable OR gates (= no of functions)

## Programmable Array Logic

Most commonly used type of PLD. Has programmable AND gate array and fixed OR
gate array.
