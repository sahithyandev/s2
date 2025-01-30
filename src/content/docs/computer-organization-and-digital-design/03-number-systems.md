---
title: Number systems
slug: computer-organization-and-digital-design/number-systems
sidebar:
  order: 3
prev: true
next: false
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
