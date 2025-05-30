---
title: Network Theorems
sidebar:
  order: 2
slug: theory-of-electricity/network-theorems
prev: true
next: true
---

## Definitions

### Linear network

A network is linear **iff** frequency of the output signal is equal to the frequency of the input signal.

## Thevenin's theorem

Any linear electrical network containing only voltage sources, current sources
and resistances can be replaced at terminals A-B by an equivalent combination of
a voltage source $V_{th}$ in a series connection with a resistance $R_{th}$.

- $V_{th}=$ the voltage obtained at terminals A-B of the network with the
  terminals A-B open circuited.
- $R_{th}=$ the resistance that the circuit between A-B terminals would have if
  all the current and voltage sources are set to to provide 0 currents or
  voltages.

:::note

If the terminals are short-cuited, the current flowing from A to B is
$\frac{V_{th}}{R_{th}}$. $ $

:::

## Norton's theorem

In a network made of linear time-invariant resistances, voltage sources and
current sources, at a pair of terminals, it can be replaced by a current source
and a resistor connected in parallel.

In AC circuits, this theorem can be applied to reactive elements as well.

- $I_{no}=$ the current flowing between the terminals as the terminals are short
  circuited
- $R_{no}=\frac{V_{no}}{I_{no}}$ where $V_{no}$ is the voltage between the
  terminals with no load

:::note[Finding the Thevenin Resistance directly]

When there are no dependent sources in a circuit, Thevenin Resistance can be
found directly by setting all the sources to be 0

- A voltage source set to 0 is equivalent to a short circuit.
- A current source set to 0 is equivalent ot a open circuit.

:::

## Superstition theorem

In a linear network with several independent sources, any voltage or current in
the circuit can be found as the algebraic sum of the corresponding values
obtained by assuming only one source at a time, with all the other sources
turned off.

## Reciprocity theorem

In a reciprocal network, if an emf $E$ in one branch produces a current $I$ in
another, then if the emf $E$ is moved to the second branch, it will cause the
same current in the first branch, where the emf has been replaced by a short
circuit.

## Compensation theorem

In a linear, bilateral network, any element can be replaced by a voltage source
of magnitude equal to the current passing through the element multiplied by the
value of the element.

### Bilateral network

A circuit whose characteristics are the same when the direction of current
through various elements. In a linear passive bilateral network, an excitation
and its response can be interchanged.

## Maximum Power Transfer theorem

For maximum active power to be delivered to the load, load impedance must
correspond to the conjucate of the source impedance.

```math
\text{Maximum power}\;\; P_\text{max} = \frac{E^2}{4r}
```

```math
\text{Load voltage at maximum power}\;\; = \frac{E}{2}
```

## Millmann's theorem

![Millmann's theorem](/images/theory-of-electricity/millmanns-theorem.jpg)

Suppose there are $n$ number of admittances which share a point $S$ and the
other ends are open.

```math
V_{\text{SN}} =
\frac
{\sum_{p=1}^n {Y_\text{P} V_{\text{PN}}}}
{\sum_{p=1}^n {Y_\text{P}}}
```

## Equivalent Generator theorem

![Equivalent Generator theorem](/images/theory-of-electricity/equivalent-generator-theorem.jpg)

An extension of Millmann's theorem. A system of voltage sources operating in
parallel may be replaced by a single voltage source in series with an equivalent
impedance. This is also Thevenin's theorem applied to generators in parallel.

```math
E_\text{eq}=
\frac
{1}
{Y_\text{eq}}

{\sum_{k=1}^n E_k Y_k}
```

```math
Y_\text{eq}=
{\sum_{k=1}^n Y_k}
```

## Rosen's theorem

![Rosen's theorem](/images/theory-of-electricity/rosens-theorem.jpg)

Used to convert star connected network to mesh equivalent. External conditions
will not be affected.

```math
Y_{\text{pq}} = \frac{Y_p Y_q}{\sum_{k=1}^n Y_k}
```

When $n=3$, the conversion becomes quite simple as mentioned in
[S1](https://s1.sahithyan.dev/electrical-fundamentals/basics/terms/#delta-star-conversion).
$ $
