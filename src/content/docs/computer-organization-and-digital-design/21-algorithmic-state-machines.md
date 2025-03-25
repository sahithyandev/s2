---
title: Algorithmic State Machines
sidebar:
  order: 21
slug: computer-organization-and-digital-design/algorithmic-state-machines
prev: true
next: false
---

Useful for specifying detailed logic for sequential logic. Similar to
flowcharts. Describes sequence of events and timing relationship between the
states of finite state machine. In a finite state machine, state is denoted by
circle. State transition is denoted by an arrow. Along the transition, the
inputs and outputs are denoted.

## Basic elements

### State box

A rectangular box. Represents state of the machine. Contains a state name,
optional output list and optional register operation. An optional _state code_
is mentioned at the upper right corner of the box.

### Decision box

A diamond-shaped box. Represents a decision with $n$ number of out-going arrows.
$ $

### Conditional box

An oval box. Represents a conditional output list. Input path to a conditional
box must be from a decision box.

## ASM Block

A structure consisting of one state box and all decision and conditional boxes
connected to its exit path. Has one entrance path and one or more exit paths.

## Rules

- Can have multiple exit paths
- For every combination of input variables, there must be exactly one exit path
- Internal feedback within an ASM is not allowed
- Parallel paths that lead to the same output path is allowed
- More than one parallel paths can be active simultaneously
