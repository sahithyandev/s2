---
title: Memory
sidebar:
  order: 2
slug: computer-organization-and-digital-design/computer-organization/memory
prev: true
next: true
---

Consists of RAM and secondary memory.

In Von Neumann architecture, both data and instructions are stored in the same memory. In Howard Aiken's architecture, data and instructions are stored in separate memories.

## Memory cell

Basic element of a semiconductor memory. Carries two stable states: 1 and 0. State can be read or written.

## Memory chip

Contains a 2D array of memory cells.

## Word

Number of bits written to/read from a chip simultaneously.

## Memory module

Collection of memory chips.

<figure style="max-width: 700px; margin: 10px auto;">

![Memory module organization](/images/codd/memory-module-organization.jpg)

</figure>

## Memory types

### RAM

Volatile. High-speed read and write. Can either be dynamic (built using capacitors) or static (built using flip flops).

- SRAM: built using flip flops. used for caching.
- DRAM: built using capacitors. used for main memory.

### ROM

Non-volatile memory.

### PROM

Can be programmed using special tools.
