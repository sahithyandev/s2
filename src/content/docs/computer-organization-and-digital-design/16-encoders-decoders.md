---
title: Encoders & Decoders
sidebar:
  order: 16
slug: computer-organization-and-digital-design/encoders-decoders
prev: true
next: true
---

Encoders and decoders are essential components that facilitate efficient data transmission by reducing the number of data lines required. Falls under medium-scale integrated (MSI) circuits group.

## Encoder

Converts multiple input signals into a single output signal with fewer lines, typically in binary or base systems. Have $n$ inputs and $m$ outputs where $n = 2^m$.

### Priority Encoder

When 2 or more input lines are activated in a priority encoder, the input having the highest priority will take precedence. An improvement over simple encoder at the cost of extra logic. Used in interrupt controllers.

### Decimal to BCD Encoder

Converts each digit of a decimal number into its 4-bit binary equivalent.
For example, '12' becomes '0001' and '0100'.

### Octal to Binary Encoder

Converts octal digits (each represented by 3 bits) into binary.
Example: Octal '23' becomes binary '0010 0111'.

### Hexadecimal to Binary Encoder

Converts each hex digit (represented by 4 bits) into binary.
Example: 'A' becomes '1010'.

## Decoder

Opposite of encoder. Have $m$ inputs and $n$ outputs where $m = \log_2{n}$.
