---
title: Transient Analysis
sidebar:
  order: 10
---

In AC circuit theory, time and frequency domains are 2 fundamental ways by which signals can be represented and analyzed.

## Time Domain

In the time domain, how a signal varies with time is analyzed. This is considered the most intuitive representation as the amplitude of a signal at each point in time is shown. Signals are expressed as a function of time, e.g., v(t) = Vm sin(ωt + φ). Amplitude vs. time is shown

Time domain analysis is particularly useful when the response of a circuit to sudden changes needs to be understood or when non-periodic signals are being analyzed.

Used in analysis of circuit start-up behavior, step responses, and transient effects.

## Frequency Domain

The frequency domain representation shows how much of a signal exists at each frequency, rather than at each time moment. Signals are expressed as a function of frequency, typically using Fourier or Laplace transforms. Amplitude and phase vs. frequency are shown, frequency components of complex signals are revealed

By frequency domain analysis, the following aspects can be more easily understood:
- How different frequency components are responded to by circuits
- Resonance behaviors
- Filter characteristics
- System stability

Used in filter design, frequency response analysis, impedance calculations are performed.

## Relationship Between Domains

These two representations are mathematically related through transforms:
- Fourier transform is used to convert from time domain to frequency domain for periodic and some non-periodic signals
- Laplace transform is considered more general and a wider range of signals, including those with transient components, can be handled by it

In circuit analysis, a switch between these domains is often made by engineers depending on which provides the clearer insight for a particular problem.

:::note

To convert from a differential equation of impedance (or admittance) in time domain to frequency domain, use the substitution:

```math
\frac{\text{d}}{\text{d}t} = j\omega
```

:::
