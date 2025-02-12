---
title: Limits
sidebar:
  order: 2
slug: methods-of-mathematics/multivariable-calculus/limits
prev: true
next: false
---

$\lim_\limits{(x,y)\to{(a,b)}} {f(x)}=L$ **iff**: $ $

```math
\forall{\epsilon>0}\;
\exists{\delta>0}\;
\forall{(x,y)\in D}\;
(0<\sqrt{(x-a)^2 + (y-b)^2}<\delta\implies{|f(x,y)-L|<\epsilon})
```

The target point can be approached in any directions. Thus, if 2 different paths yield 2 different limtting values, then the limit doesn't exist.

Multivariable limit properties are analogous to the [single variable limits](https://s1.sahithyan.dev/mathematics/real-analysis/limits/#properties).

## Uniqueness of limit

Let $f$ be a real-valued function defined on $D\subseteq \mathbb{R}^2$. Let $(a,b)\in \overline{D}$. If limit of $f$ as $(x,y)$ approaches $(0,0)$ exists, then it is unique.

:::note[Proof Hint]

- Consider 2 limits $l,m$ for $f$ at $(a,b)$
- Consider $\delta_1, \delta_2 > 0$ for both limitting values for a chosen $\epsilon \gt 0$
- Reduce to $\forall \epsilon \gt 0, |l-m| < \epsilon$

:::

## Iterated limits

Aka. repeated limits. If $f$ is defined in a neighborhood of a point $(a,b)$ in $\mathbb{R}^2$ and $\lim_\limits{x\to a} f(x,y)$ exists, which is a function of $y$ only and then the limit of this function as $y\to b$ can be written as:

```math
\lim_\limits{y\to{b}}
\;
\lim_\limits{x\to{a}}
 {f(x,y)}
```

Similarily, another limit exists.

```math
\lim_\limits{y\to{b}}
\;
\lim_\limits{x\to{a}}
 {f(x,y)}
```

Both of the above limits are not necessarily equal. If $\lim_\limits{(x,y)\to{(a,b)}} {f(x)}$ exists, they will be equal. $ $
