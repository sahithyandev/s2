---
title: Introduction to Program Construction
sidebar:
  label: Introduction
  order: 1
slug: program-construction/introduction
prev: false
next: true
---

Program construction is a methodological process that starts from a user's
requirements and end with a working program.

:::note

Programming is only one step among the many in program construction process.

:::

## The methodology

### System level

- System requirements analysis
- System requirements specification
- System architecture design
- System validation (checking if the specification captures the customer’s
  requirements)

### Software level

- Software requirements analysis
- Software requirements specification
- Software architecture design
- Software component/module design
- Program coding and testing
- Software deployment and maintenance
- Software verification (checking if the software meets the specifications)

## Requirements

### Functional requirements

A statement of a piece of required functionality or a behavior that a system
will exhibit under specific conditions.

The above definition is from Grady Booch, James Rumbaugh, and Ivar Jacobson and
is a generally accepted one.

### Non-functional requirements

A requirement that specifies criteria that can be used to judge the operation of
a system. Conveniently identified as _illities_. These are subjetive, ambigous
and conflicting.

Examples:

- Usability
- Reliability
- Safety
- Responsiveness

### Summary

|               | Functional req.            | Non-functional req.             |
| ------------- | -------------------------- | ------------------------------- |
| Objective     | Describe what product does | Describe how product works      |
| End result    | Define product features    | Define product properties       |
| Focus         | On user requirements       | On user expectations            |
| Documentation | Captured in use cases      | Captured as a quality attribute |
| Origin type   | Defined by user            | Defined by developers           |
