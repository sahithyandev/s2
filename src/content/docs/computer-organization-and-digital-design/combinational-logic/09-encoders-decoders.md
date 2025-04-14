---
title: Encoders & Decoders
sidebar:
  order: 9
slug: computer-organization-and-digital-design/combinational-logic/encoders-decoders
prev: true
next: true
---

Used to facilitate efficient data transmission by reducing the number of data
lines required. Falls under medium-scale integrated (MSI) circuits group.

## Encoder

Converts $n$ input lines into $m$ output lines where $n = 2^m$.

In simple encoders, in the input lines, maximum one will be active at a time.

### Priority Encoder

Input lines are given a priority. When 2 or more input lines are activated, the
highest priority input will take precedence. An improvement over simple encoder
at the cost of extra logic. Used in interrupt controllers and as positional
encoders.

### Decimal to BCD Encoder

Converts each digit of a decimal number into its 4-bit binary equivalent. For
example, $12$ becomes $0001_2$ and $0010_2$.

### Octal to Binary Encoder

Converts octal digits (each represented by 3 bits) into binary. Example: Octal
$23_8$ becomes binary $010\;011_2$.

### Hexadecimal to Binary Encoder

Converts each hex digit (represented by 4 bits) into binary. Example: $A_{16}$
becomes $1010_2$.

## Decoder

Opposite of encoder. Have $m$ inputs and $n$ outputs where $m = \log_2{n}$.

Decoders are by-default active HIGH. If made using NAND gates, then it will
active LOW.

By default, the decoder require a $n$-input AND gates, which is bad as $n$
increases. The solution is to build higher order decoders using smaller
decoders.

Decoder and a set of OR gates can be used to build a
[Full Adder](/computer-organization-and-digital-design/combinational-logic/adders/#full-adder)
and other devices.
