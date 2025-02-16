---
title: Java Basics
sidebar:
  order: 4
slug: program-construction/java-basics
prev: true
next: true
---

### Java

A programming language that is built around OOP.

### JVM

Short for Java Virtual Memory. The virtual machine, on top of the operating system, which runs the compiled Java code.

### JDK

Short for Java Development Kit. The set of tools to compile the Java programs.

Memory is allocated implicitly (variable declaration or `new` operator) and deallocated implicitly (by the runtime).

## Class

A template for a object, giving information about state and actions. State is represented by variables and actions are represented by methods.

Objects can be instantiated using `new` operator, a unary operator that expects a class.

## Object overhead

In Java, everything is an object. `Object` class is the root class of all objects.

In a 32-bit system, `int` type is stored using 4 bytes. But `Integer` object will require 16 bytes of memory. The reason for this is, to accomodate for the object metadata (such as class pointer, flags, lock, size, etc.)

## Collections framework

A Java framework that includes production-grade implementations for commonly used data structures. The implementation is done using interfaces, abstract classes and (regular) classes.

![Java Collections hierarchy](/images/program-construction/java-collections-hierarchy.jpg)

- `Iterable` interface represents an object that can be used in a `forEach` statement.
- `Collection` interface adds common functionliaty such as add, remove to `Iterable` interface. Provides a common interface for all the implementations of different data structures.
- `List`, `Queue`, `Set` interfaces extends `Collection` to specific data structures
- `ArrayList` is a dynamic array implementation (automatically grows and shrinks in size as required)
- `PriorityQueue` is an implementation of `Queue`
- `HashSet` is an implementation of `Set`
- `Map` is a similar interface to `Collection`. Allows access to items by reference to contents that are used as a key

All these interfaces and classes are implemented around generics. Generics allow them to be created with compile-time types.

### Pre-Collection

Originally, JDK provided the ability to group objects through:

- `Array` which is a native language feature
- `Vector` which can grow in size but not shrink
- `Hashtable` which is an array with 2 parts: a hashcode and the actual data. Hashcode is generated from the content of the data. Data is accessed using the hashcode.

But they didn't have a common interface.
