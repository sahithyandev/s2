---
title: Lookup Tables
sidebar:
  order: 11
slug: computer-organization-and-digital-design/lookup-tables
prev: true
next: true
---

A technique for implementing combinational logic digital circuits instead of
using AND, OR, NOT gates. For each input combination, the output is precomputed
and stored in memory. Later, the table is used to output the values based on the
applied input combination. Can be cascaded or combined to implement larger and
more complex functions. Aka. LUT.

## Usage

### PLDs

LUTs are a fundamental component of programmable logic devices such as
Field-Programmable Gate Arrays (FPGAs) and Complex Programmable Logic Devices
(CPLDs). In these devices, LUTs are used to implement custom combinational logic
functions by configuring the memory cells according to the desired logic
function.

### Speed optimization

LUTs can be used to optimize the speed of a digital circuit by precomputing the
outputs and eliminating the propagation delays associated with traditional
gate-based logic. Useful in applications that require high-speed computation or
low-latency responses.

### Simplifying complex functions

LUTs can be used to implement complex logic functions that would otherwise
require a large number of gates. Overall complexity and area of the circuit will
be reduced by using LUTs.

### Function approximation

LUTs can be used to approximate mathematical functions or nonlinear functions
that are difficult to implement directly using traditional logic gates.
