---
title: Timing Hazards
sidebar:
  order: 9
slug: computer-organization-and-digital-design/timing-hazards
prev: true
next: true
---

Aka. Glitch. Momentary unwanted switching transient at a logic function's output. Happens because of unequal propogation delays along different paths in a combinational circuit.

## Static hazards

Occurs when the output must remain unchanged but switches back and forth due to a change in input.

When a circuit is implemented as 2-level SOP or POS, the hazard can be detected using a K-map. There will be a glitch if any two adjacent minterms or maxterms are not covered by a single product or sum term. Glitches can be resolved by using redundunt gates.

### Static-0 hazard

Occurs when output must stay at 0 but temporarily switches to a 1 due to a change in input.

### Static-1 hazard

Occurs when output must stay at 1 but temporarily switches to a 0 due to a change in input.

## Dynamic hazards

Occurs when input changes, and output must change but temporarily flips between values. An unwanted change in output.
