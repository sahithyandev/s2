---
title: Sequential Logic
sidebar:
  order: 18
slug: computer-organization-and-digital-design/sequential-logic
prev: true
next: true
---

Output is determined by the current state and the input. The output is fed back
to the input to determine the next output.

## Clock

Generates a series of pulses at regular intervals. Used to synchronize the
operation of digital circuits.

### Clock signal

A square wave with a 50%
[duty cycle](/computer-organization-and-digital-design/digital-logic-signals/#duty-cycle).
The signal is high for half the period and low for the other half.

## Triggering methods

Determines when the output changes according to the clock signal.

### Positive edge-triggered

Output changes on the rising edge of the clock signal.

### Negative edge-triggered

Output changes on the falling edge of the clock signal.

### Level Triggering

Output changes when the clock signal is high (or low).
