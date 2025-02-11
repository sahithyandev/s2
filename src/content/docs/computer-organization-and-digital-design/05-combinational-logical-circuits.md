---
title: Combinational Logical Circuits
sidebar:
  order: 5
slug: computer-organization-and-digital-design/combinational-logical-circuits
prev: true
next: false
---

## Representation

### Karnaugh Map

A diagram which can be used to reduce a truth table of inputs and output to a boolean expression.

- Sketch an empty with (1 vs 1 or 1 vs 2, or 2 vs 2 ...)
  - If the variables in a row or column is more than 2, they must be arranged in [gray code](/computer-organization-and-digital-design/number-systems/#gray-codes).
- Populate the map with given values
- Group the 1s according to K-map rules

Then the boolean expression can be derived.

### Sum of Products

- Pick all the 1s
- Construct literals using the inputs, AND operator, so that they result in a 1.
- Sum all those operators

#### Minterm

A product of literals.

### Product of Sums

- Pick all the 0s
- Construct literals using the inputs, OR operator, so that they result in a 0.
- Join all those literals using AND operator

#### Maxterm

A sum of literals.
