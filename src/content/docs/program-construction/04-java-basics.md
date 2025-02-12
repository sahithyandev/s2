---
title: Java Basics
sidebar:
  order: 4
slug: program-construction/java-basics
prev: true
next: true
---

### Java

A famous programming language.

### JVM

Short for Java Virtual Memory. The virtual machine, on top of the operating system, which runs the compiled Java code.

### JDK

Short for Java Development Kit. The set of tools to compile the Java programs.

Memory is allocated implicitly (variable declaration or `new` operator) and deallocated implicitly (by the runtime).

## Class

A template for a object, giving information about state and actions. State is represented by variables and actions are represented by methods.

Objects can be instantiated using `new` operator, a unary operator that expects a class.

## Object overhead

In a 32-bit system, `int` type is stored using 4 bytes. But `Integer` object will require 16 bytes of memory. The reason for this is, to accomodate for the object metadata (such as class pointer, flags, lock, size, etc.)

## Common Classes

### Vector

Can grow but not shrink.

### Hashtable

An array with 2 parts: a hashcode and the actual data. Hashcode is generated from the content of the data. Data is accessed using the hashcode.

### Collection

A group of objects, manipulated as a single entity.
