---
title: Digital Logic Signals
slug: computer-organization-and-digital-design/digital-logic-signals
sidebar:
  order: 2
prev: true
next: true
---

### Logic levels

Ranges of voltages are abstracted away into 0 (Low) and 1 (High). These ranges
are called as logic levels.

The ranges would have a gap in-between. This is done to avoid errors by
fluctuations.

Example:

- HIGH - 2V to 3.3V
- LOW - 0V to 0.8V

### Digital waveforms

Voltage levels that are changing back and forth between the digital states.

### Pulse

A change between the digital states.

2 types:

- Positive-going pulse
- Negative-going pulse

### Non-ideal pulse

Even though we abstract the analog states into digital, the analog
characteristic can be observed when switching states. An non-ideal pulse will
take some time (a very short time) to switch the states.

### Pulse width

Pulse width is the time a pulse takes. In non-ideal case, the pulse width is
said to be the time between 50% mark of the transition.

### Raise and fall time

Ideally a pulse is instantaneous. In non-ideal case, it takes time to transition
between states. Raise and fall times are measured between the 10% and 90% time.

### Gate delay

Aka. propogation delay. Time for change at input to cause change at output.
Denoted by $t_p$. Can vary betwen 0 to 1 and 1 to 0 change. Denoted as $t_{pLH}$
and $t_{pHL}$.

3 delays:

- Min delay
- Typical/nominal delay
- Max delay

### Waveforms

A series of pulses. They can either be periodic (pulse train) or non-periodic. A
clock is required along with the waveform to convert it into binary.

### Duty cycle

In a period waveform, a duty cycle is the ratio of pulse width ($t_w$) to the
period ($T$).

```math
\text{Duty cycle} = \frac{t_w}{T} \times 100%
```

## Logic family

A collection of different integrated circuit (IC) chips/ chip building blocks
that have:

- Similar input, output and internal circuit characteristics
- Methods to implement all necessary logic functions

Chips from the same family can be interconnected to perform any desired logic
function. Chips from different logic families may not be compatible, so we need
to take special steps to interconnect circuits from different logic families.

### Electrical behavior

- Logic voltage level
- DC noise margins Highest LOW voltage of output must be lower than highest LOW
  voltage of input
- Fanout Number and type of inputs that are connected to a given output
- Power consumption
- Speed
- Noise/interference
- Electrostatic discharge
- Three-state outputs

### Examples

![Examples for Logic Families](/images/codd/logic_voltage_stds.jpg)

The above image is from
[Wired && Coded;](https://www.jsykora.info/2014/05/logic-voltage-levels/).

- Light colored strips are for input
- Dark colored strips are for output

## Digital Design

Digital circuits are designed using software. Simulations are ran at logic
level. Then the circuit is built using FGPAs. After many verifications, the
circuit is fabricated as a chip.

## Data transfer

Data can be transferred in either serial or parallel. Serial transfer takes more
time while parallel transfer requires more transmission lines.

:::note[Useful tips for Digital Design]

- Good tools do not guarantee good design, but they help a lot by taking the
  pain out of doing things right.
- Digital circuits have analog characteristics.
- Know when to worry and when not to worry about the analog aspects of digital
  design.
- Always document your designs to make them understandable by yourself and
  others.
- Associate active levels with signal names and practice bubble-to-bubble logic
  design.
- Understand and use standard functional building blocks.
- Design for minimum cost at the system level, including your own engineering
  effort as part of the cost.
- State-machine design is like programming; approach it that way.
- Use programmable logic to simplify designs, reduce cost, and accommodate
  last-minute modifications.
- Avoid asynchronous design. Practice synchronous design until a better
  methodology comes along.
- Pinpoint the unavoidable asynchronous interfaces between different subsystems
  and the outside world, and provide reliable synchronizers.
- Catching a glitch in time saves nine.

:::
