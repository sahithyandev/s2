---
title: Introduction to Probability & Statistics
sidebar:
  label: Introduction
  order: 1
slug: methods-of-mathematics/probability-and-statistics/introduction
prev: false
next: true
---

### Statistical experiment

A process designed and conducted to obtain data
under a controlled or an uncontrolled background. The outcome depends purely on
chance.

## Experimental data

The data gathered from a statistical experiment.

### Sample Space

Set of all possible outcomes of a statistical
experiment. Denoted by $S$. $ $

### Sample Point

An element of the sample space.

### Event

A subset of the sample space.

#### Mutually Exclusive

Two events are said to be mutually exclusive **iff** they have no sample points in
common.

#### Independent

Two events are said to be independent **iff** the occurence of one does not affect
the probability of the occurence of the other.

#### Complement

Complement of the event $A$ (of $S$) is denoted by $\overline{A}$. An event
consisting of all the sample points that are in $S$ and not $A$.

#### Union

Union of two or more events, is the event containing all sample points that
belong to any one of the events.

#### Intersection

Intersection of two or more events, is the event containing all sample points
that belong to all of the events.

### Outcome

A possible result of a statistical experiment.

#### Discrete

Outcomes that can take on only specific, distinct values. For example:
- the number of students in a class
- the result of a dice roll
- the count of defective items in a batch

#### Continuous

Outcomes that can take on any value within a range. For example:
- height
- weight
- time
- temperature measurements.

## Observational data

### Population of interest

A specific group that a researcher aims to study in order to draw meaningful conclusions or make statistical inferences about its characteristics.

### Variable of interest

A changing quantity which is being measured in an experimental study.

### Census

The process of gathering information about the members of a given population of
interest.

### Cohort

A group of subjects who share a particular event during a particular time
duration.

## Properties of Distributions

### Mean

Denoted by $E(X)$ or $\mu$. Represents the "average" (or expected) value.

Properties:
- If $c$ is constant, $E(c) = c$
- $E(X+c) = E(X) + c$
- $E(cX) = cE(X)$
- $E(g(x)) = g(E(x))$, where $g$ is a linear function

### Variance

Denoted by $\text{Var}(X)$ or $\sigma^2$. Measures the spread or dispersion of the distribution around the mean.

Properties:
- $\text{Var}(c) = 0$
- $\text{Var}(X+k) = \text{Var}(X)$
- $\text{Var}(aX) = a^2\text{Var}(X)$
- $\text{Var}(X+Y) = \text{Var}(X) + \text{Var}(Y) + 2\text{Cov}(X,Y)$
- If $X$ and $Y$ are independent, $\text{Cov}(X,Y) = 0$

### Covariance

Denoted by $\text{Cov}(X,Y)$ or $\sigma_{XY}$. Measures the linear relationship between two random variables. Not standardized.

Properties:
- $\text{Cov}(X,Y) = E\Big[\big(X-E(X)\big)\big(Y-E(Y)\big)\Big]$
- $\text{Cov}(X,X) = \text{Var}(X)$
- $\text{Cov}(aX,bY) = ab\text{Cov}(X,Y)$
- $\text{Cov}(X+Y,Z) = \text{Cov}(X,Z) + \text{Cov}(Y,Z)$

### Standard Deviation

Square root of the variance. Provides a measure of spread in the same units as the original random variable, making it often more interpretable than variance.
