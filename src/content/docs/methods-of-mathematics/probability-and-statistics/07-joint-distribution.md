---
title: Joint Distributions
sidebar:
  order: 7
slug: methods-of-mathematics/probability-and-statistics/joint-distributions
prev: true
next: false
---

Specifies the probability of observing a combination of values for two or more random variables. Characterizes the relationship between multiple random variables, including their dependencies and correlations.

## Definition

For two random variables $X$ and $Y$, the joint probability distribution gives the probability that $X$ and $Y$ simultaneously take on specific values. This can be expressed as:

- For discrete random variables: $P(X = x, Y = y)$ or $P_{X,Y}(x, y)$
- For continuous random variables: $f_{X,Y}(x, y)$


For a joint probability distribution $P(A \cap B)$, $P(A)$ and $P(B)$ are the marginal probabilities.

## Properties

### Non-negativity

- Discrete case: $\forall x,y\;\;P(X = x, Y = y) \geq 0$
- Continuous case: $\forall x,y\;\;f_{X,Y}(x, y) \geq 0$

### Total probability equals 1

- Discrete case: $\sum_x \sum_y P(X = x, Y = y) = 1$
- Continuous case: $\int_{-\infty}^{\infty}\int_{-\infty}^{\infty} f_{X,Y}(x, y) \, dy \, dx = 1$

### Marginal distributions
The distribution of an individual variable can be derived from the joint distribution:
  - Discrete case: $P(X = x) = \sum_y P(X = x, Y = y)$
  - Continuous case: $f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x, y) \, dy$

### Conditional distributions

The distribution of one variable given a specific value of the other:
  - Discrete case: $P(X = x | Y = y) = \frac{P(X = x, Y = y)}{P(Y = y)}$
  - Continuous case: $f_{X|Y}(x|y) = \frac{f_{X,Y}(x, y)}{f_Y(y)}$
   
### Independence

Random variables $X$ and $Y$ are independent **iff**:
  - Discrete case: $\forall x,y\;\; P(X = x, Y = y) = P(X = x) \cdot P(Y = y)$
  - Continuous case: $\forall x,y\;\; f_{X,Y}(x, y) = f_X(x) \cdot f_Y(y)$

## Representation

Joint distributions can be represented in various ways:
- For discrete variables: probability mass tables or matrices
- For continuous variables: joint density functions or contour plots
- Copulas: functions that describe the dependence structure between variables

## Examples

Common joint distributions include:
- Bivariate normal distribution
- Multinomial distribution
- Dirichlet distribution

Understanding joint distributions is fundamental for analyzing relationships between variables, performing multivariate statistical analysis, and modeling complex systems with interdependent components.
