---
title: Number systems
slug: computer-organization-and-digital-design/number-systems
sidebar:
  order: 3
prev: true
next: true
---

Review these topic from [S1](https://s1.sahithyan.dev):

- [Number systems](https://s1.sahithyan.dev/programming-fundamentals/b-book/number-systems/)
- [Data representation](https://s1.sahithyan.dev/programming-fundamentals/b-book/data-representation/)
- [Integers](https://s1.sahithyan.dev/programming-fundamentals/b-book/integers/)

## Signed integers

To denote signed integers, there are 3 approaches.

- Sign-and-magnitude
- [One's complement](https://s1.sahithyan.dev/programming-fundamentals/b-book/integers/#ones-complement)
- [Two's complement](https://s1.sahithyan.dev/programming-fundamentals/b-book/integers/#twos-complement)

### Sign-and-magnitude

MSB denotes the sign. Remaining bits denote the magnitude.

2 problems with this representation:

- Two zeros ($0000$ and $1000$)
- Arithmetic is cumbersome

:::note

One's complement fixes the arithmetic. Two's complement fixes both of the problems. Two's complement is the widely used one.

:::

## Special formats

### BCD

Short for binary coded decimal. Each digit is represented by a fixed set of bits. Usually in length 4 or 8. Only 10 of the available representations are used. The remaining ones are not valid.

### Gray codes

Aka. reflected binary. An ordering of the binary numeral system such that two successive values differ only by 1 bit. Named after [Frank Gray](<https://en.wikipedia.org/wiki/Frank_Gray_(researcher)>).

If two adjacent states have more than 1 bit changed (eg: 3 and 4), then the value transition might take some noticable time and could lead to issues.

A gray code is said to be cyclic, if the first and last numbers also differ by a bit.
