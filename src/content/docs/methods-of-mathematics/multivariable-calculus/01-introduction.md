---
title: Introduction to Multivariable Calculus
sidebar:
  label: Introduction
  order: 1
slug: methods-of-mathematics/multivariable-calculus/introduction
prev: false
next: true
---

### Real valued multivariable function

A function with more than 1 inputs or outputs.

$\mathbb{R}^n$ denotes a n-dimensional space with each axis denoted by real numbers. $ $

A function $f: \mathbb{R}^{n} \rightarrow \mathbb{R}$ is a map between a ordered n-tuple to real numbers. The domain can also be $D \subset \mathbb{R}^{n}$. The same can be applied to the output of the function.

### Vector-valued functions

Functions with more than 1 outputs are also called multivariable but they are commonly referred to as vector-valued functions.

## Surfaces

Suppose $f: \mathbb{R}^{2} \rightarrow \mathbb{R}$. The graph of $f$ is the set of all points such that $(x,y,f(x,y))\,\text{in}\,\mathbb{R}^3$. The graph can be plotted on a 3D space.

### Linear function

Functions of the below form are called linear functions.

```math
f(x,y) = ax + by + c
```

Plane surfaces are resulted when these functions are plotted.

### Common shapes of functions

#### Parabolic cylinder

A parabola shifted along a straight line

#### Ellipsoid

A surface in which all of its traces are ellipses.

```math
\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1
```

When $a=b=c$ the surface becomes a sphere. $ $

#### Cone

```math
\frac{z^2}{c^2} = \frac{x^2}{a^2} + \frac{y^2}{b^2}
```

Horizontal traces are ellipses. Vertical traces in $x=k$ or $y=k$ are:

- Hyperbolas if $k\neq 0$
- Pair of lines if $k=0$

#### Elliptic paraboloid

```math
\frac{z}{c} = \frac{x^2}{a^2} + \frac{y^2}{b^2}
```

Horizontal traces are ellipses. Vertical traces are parabolas. The variable raised to first power ($z$ in the example), indicates the axis of the paraboloid. $ $

#### Hyperboloic Paraboloid

```math
\frac{z}{c} = \frac{x^2}{a^2} - \frac{y^2}{b^2}
```

Horizontal traces are hyperbolas. Vertical traces are parabolas.

#### Hyperboloid of One Sheet

```math
\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1
```

Horizontal traces are ellipses. Vertical traces are hyperbolas. Variable with the negative coefficient denotes the axis of symmetry.

#### Hyperboloid of Two Sheets

```math
\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = -1
```

Horizontal traces are ellipses for $z=k$ where $k \not\in [-c,c]$. Vertical traces are hyperbolas. Variable with the positive coefficient denotes the axis of symmetry.

## Level curves

Suppose $f: \mathbb{R}^{2} \rightarrow \mathbb{R}$. The level curves of $f$ are the graphes $f(x,y)=k$ where $k$ is a constant. Aka. level sets.

Suppose $P \subset \mathbb{R}^2$ and $Q \equiv (x_0,y_0)\in\mathbb{R}^2$.

### epsilon-disk

An $\epsilon$-disk around $Q$ is the set of all points $(x,y)\in\mathbb{R}^2$ where the distance between the points is less than $\epsilon$.

### Interior point

$Q$ is an interior point of $P$ **iff** there exists some $\epsilon$-disk around $Q$ that is contained in $P$.

### Isolated point

$Q$ is an isolated point of $P$ **iff** there exists some $\epsilon$-disk around $Q$ that doesn't contains no other points of $P$.

### Boundary point

$Q$ is an boundary point of $P$ **iff** all $\epsilon$-disks around $Q$ contains points from $P$ and not from $P$.

### Open subset

$P$ is an open subset of $\mathbb{R}^2$ **iff** all the points of $P$ are interior points of $P$.

### Closed subset

$P$ is an closed subset of $\mathbb{R}^2$ **iff** $P$ contains all of its boundary points.

### Closure

The set of boundary points of $P$ and the region $P$. Denoted by $\overline{P}$.

### Bounded subset

$P$ is a bounded subset of $\mathbb{R}^2$ **iff** $P$ is contained in some $\epsilon$-disk around some point.

## Half-space

Either sides of a plane.

## Neighbourhoods

Let $D$ be the domain of 2 variable function $f$.

### Circular neighbourhoods

The below set is called a $\delta$-neighbourhood of the point $(a,b) \in D$ and $\delta > 0$.

```math
\Big\{(x,y)\,|\,\sqrt{(x-a)^2 + (y-b)^2} \lt \delta\Big\}
```

### Square neighbourhoods

The below set is called a square-neighbourhood of the point $(a,b) \in D$ and $\delta > 0$.

```math
\Big\{(x,y)\,\text{s.t.}\,\lvert x-a \rvert \lt \delta \land |y-b| \lt \delta\Big\}
```
