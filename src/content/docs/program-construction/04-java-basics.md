---
title: Java Basics
sidebar:
  order: 4
slug: program-construction/java-basics
prev: true
next: true
---

### Java

A programming language that is built around
[object-oriented paradigm](/program-construction/object-oriented-paradigm/).
Everything is an object in Java. Objects can be instiated from a _class_ using
the unary operator: `new`. All classes are an extension of the `Object` class.

### JVM

Short for Java Virtual Memory. The virtual machine, on top of the operating
system, which runs the compiled Java code.

### JDK

Short for Java Development Kit. The set of tools to compile the Java programs.

Memory is allocated implicitly (variable declaration or `new` operator) and
deallocated implicitly (by the runtime).

## Object overhead

In a 32-bit system, `int` type is stored using 4 bytes. But `Integer` object
will require 16 bytes of memory. The reason for this is, to accomodate for the
object metadata (such as class pointer, flags, lock, size, etc.)

## Collections framework

A Java framework that includes production-grade implementations for commonly
used data structures. The implementation is done using interfaces, abstract
classes and (regular) classes.

![Java Collections hierarchy](/images/program-construction/java-collections-hierarchy.jpg)

- `Iterable` interface represents an object that can be used in a `forEach`
  statement.
- `Collection` interface adds common functionliaty such as add, remove to
  `Iterable` interface. Provides a common interface for all the implementations
  of different data structures.
- `List`, `Queue`, `Set` interfaces extends `Collection` to specific data
  structures
- `ArrayList` is a dynamic array implementation (automatically grows and shrinks
  in size as required)
- `PriorityQueue` is an implementation of `Queue`
- `HashSet` is an implementation of `Set`
- `Map` is a similar interface to `Collection`. Allows access to items by
  reference to contents that are used as a key

All these interfaces and classes are implemented around generics. Generics allow
them to be created with compile-time types.

### Pre-Collection

Originally, JDK provided the ability to group objects through:

- `Array` which is a native language feature
- `Vector` which can grow in size but not shrink
- `Hashtable` which is an array with 2 parts: a hashcode and the actual data.
  Hashcode is generated from the content of the data. Data is accessed using the
  hashcode.

But they didn't have a common interface.

## Child class

Aka. sub class, derived class. A class extending another class (all public and
protected members), which is called its super class. Members can be overridden
by defining a member again in the sub class. New members can be declared.
`super` keyword can be used to access methods of super class.

## Interfaces

Defines the structure of a class. Can include state variable definitions but not
values. Can include method signatures. After Java 8, can also include method
body.

## Abstract classes

A special type of class, which cannot be used to instantiate objects from.
Defined by `abstract` keyword. Can only be extended from.

## Abstract methods

Can only be defined inside abstract classes. Defined by `abstract` keyword. Any
child class must either override the abstract method or declare itself abstract

## Access level

Modifiers are used to force an access control in Java, which is important with
inheritance.

| Modifier      | Class | Package | Subclass | Other |
| ------------- | ----- | ------- | -------- | ----- |
| `public`      | Y     | Y       | Y        | Y     |
| `protected`   | Y     | Y       | Y        | N     |
| (no modifier) | Y     | N       | N        | Y     |
| `private`     | Y     | N       | N        | N     |

## Static members

Static members (aka. class members) are used to store data, specific to a class
instead of an instance. There can be static variables and static methods. Static
methods cannot access non-static variables and cannot call non-static methods.
`this` keyword is not available inside static methods. There can also be static
classes, which means only one instance of a class is created.
