---
title: Introduction to Computer Organization
sidebar:
  label: Introduction
  order: 1
slug: computer-organization-and-digital-design/computer-organization/introduction
prev: false
next: true
---

Computer organization defines the internal details of operational units, their interconnection, & control. Defined by the internal registers, timing and control structures, and the set of instructions.

## Bus

A communication channel that connects different components of a computer system. Provides a way for these components to exchange data and control signals.

### Address Bus

The bus that carries the memory addresses between the CPU and the memory.

### Data Bus

The bus that carries the data between the CPU and the memory.

### Control Bus

The bus that carries control signals between the CPU and the memory.

## Register

Capable of storing a set of bits. Built using flip flops. Has a set of data input and output lines.

General purpose registers are used for temporary storage of data and instructions during program execution. Special purpose registers are used for specific tasks such as program counter, stack pointer, and status register.

### Parallel-in Parallel-out Register

A type of register where all bits of data can be loaded/reaqd simultaneously through parallel lines. Commonly used in applications requiring rapid data access and manipulation, such as in CPU design and digital signal processing.

### Serial-in Serial-out Register

A type of register where data bits are loaded and read one bit at a time in a sequential manner. Data is shifted through the register 1 bit position at a time with each clock pulse. Commonly used in applications where data transmission bandwidth is limited, such as in serial communication interfaces and data conversion between parallel and serial formats.

### Special Purpose Registers

| Register | Description |
| --- | --- |
| Program Counter (PC) | Holds the memory address of the next instruction to be executed |
| Instruction Register (IR) | Holds the current instruction being executed |
| Memory Address Register (MAR) | Holds the address of the memory location to be accessed |
| Memory Data Register (MDR) | Holds the data being read from or written to memory |
| Accumulator (ACC) | Stores intermediate arithmetic and logic results |
| Status Register / Flag Register | Contains flags that indicate the status of operations (zero, carry, overflow, etc.) |
| Stack Pointer (SP) | Points to the top of the stack in memory |
| Index Register | Used for addressing techniques such as indexed addressing |

## Memory organization

### Memory cell

Basic element of a semiconductor memory. Carries two stable states: 1 and 0. State can be read or written.

### Memory chip

Contains a 2D array of memory cells.

### Word

Number of bits written to/read from a chip simultaneously.

### Memory module

Collection of memory chips.

<figure style="max-width: 700px; margin: 10px auto;">

![Memory module organization](/images/codd/memory-module-organization.jpg)

</figure>


### Memory types

#### RAM

Volatile. High-speed read and write. Can either be dynamic (built using capacitors) or static (built using flip flops).

- SRAM: built using flip flops. used for caching.
- DRAM: built using capacitors. used for main memory.

### ROM

Non-volatile memory.

### PROM

Can be programmed using special tools.
