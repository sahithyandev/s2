---
title: Encoders & Decoders
sidebar:
  order: 13
slug: computer-organization-and-digital-design/encoders-decoders
prev: true
next: true
---

Encoders and decoders are essential components that facilitate efficient data
transmission by reducing the number of data lines required. Falls under
medium-scale integrated (MSI) circuits group.

## Encoder

Converts multiple input lines into a single output line with fewer lines,
typically in binary or base systems. Have $n$ inputs and $m$ outputs where
$n = 2^m$.

In simple encoders, in the input lines, maximum one will be active at a time.

### Priority Encoder

When 2 or more input lines are activated in a priority encoder, the input having
the highest priority will take precedence. An improvement over simple encoder at
the cost of extra logic. Used in interrupt controllers and as positional
encoders.

### Decimal to BCD Encoder

Converts each digit of a decimal number into its 4-bit binary equivalent. For
example, '12' becomes '0001' and '0010'.

### Octal to Binary Encoder

Converts octal digits (each represented by 3 bits) into binary. Example: Octal
'23' becomes binary '010 011'.

### Hexadecimal to Binary Encoder

Converts each hex digit (represented by 4 bits) into binary. Example: 'A'
becomes '1010'.

## Decoder

Opposite of encoder. Have $m$ inputs and $n$ outputs where $m = \log_2{n}$.
Decoders are by-default active high. If the decoder is made using NAND gates,
then it will active low. By default, the decoder require a $n$-input AND gates,
which is bad as $n$ increases. The solution is to build higher order decoders
using smaller decoders.

Decoder and a set of OR gates can be used to build a
[Full Adder](/computer-organization-and-digital-design/adders/#full-adder) and
other devices.
