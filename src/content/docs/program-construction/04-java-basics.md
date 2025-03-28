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
- [ArrayList](/program-construction/arraylist/) is a dynamic array
  implementation
- `PriorityQueue` is an implementation of `Queue`
- `HashSet` is an implementation of `Set`
- `Map` is a similar interface to `Collection`. Allows access to items by
  reference to contents that are used as a key
- `HashMap` is an implementation of Map

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

## Access modifiers

In Java, access modifiers control visibility and accessibility of classes,
methods, and variables:

For classes:

- `public`: Class is visible everywhere
- `default` (no modifier): Class is only visible within same package

For methods:

- `public`: Accessible from any other class
- `protected`: Accessible within same package and by subclasses
- `default`: Only accessible within same package
- `private`: Only accessible within declaring class

For attributes:

- `public`: Accessible from any class
- `protected`: Accessible in same package and subclasses
- `default`: Only accessible in same package
- `private`: Only accessible within declaring class

## Non-access modifiers

For classes:

- `final`: Class cannot be inherited
- `abstract`: Class cannot be instantiated and may have abstract methods
- `strictfp`: Class uses strict floating-point calculations

For methods:

- `final`: Method cannot be overridden
- `abstract`: Method has no implementation and must be implemented by subclasses
- `synchronized`: Method can only be accessed by one thread at a time
- `native`: Method is implemented in platform-dependent code
- `strictfp`: Method uses strict floating-point calculations

For attributes:

- `final`: Attribute cannot be changed after initialization
- `static`: Attribute belongs to class rather than instance
- `transient`: Attribute will not be serialized
- `volatile`: Attribute value may be changed by multiple threads

## Static members

Static members (aka. class members) are used to store data, specific to a class
instead of an instance. There can be static variables and static methods. Static
methods cannot access non-static variables and cannot call non-static methods.
`this` keyword is not available inside static methods. There can also be static
classes, which means only one instance of a class is created.
