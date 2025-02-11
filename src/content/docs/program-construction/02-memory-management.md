---
title: Memory Management
sidebar:
  order: 2
slug: program-construction/memory-management
prev: true
next: false
---

Memory management is where the physical memory is allocated and deallocated during program execution. Controlled by the OS where the program is running and the programming language used to code the program.

Activities in memory management:

- Memory allocation
- Memory deallocation
- Use of pointers for memory access
- Ensuring memory safety

## Memory allocation

When a program needs to store data, memory is requested from the OS by the program. The memory can be allocated statically at compile time or dynamically at run time. Allocated implicitly or explicitly depending on the programming language.

Examples:

- In C, memory is allocated explicitly using `malloc()` system call
- In Java, memory is allocated explicitly using `new` operator
- In Python, memory is allocated implicitly

## Memmory deallocation

When memory is no longer required by the program, it needs to be deallocated and freed to the OS. If not, memory leaks are resulted. Memory leaks hog up memory and ultimately lead to crashes. Can happen either implicitly or explicitly depending on the programming language.

Examples:

- In C, memory is deallocated explicitly using `free()` system call
- In Java, memory is deallocated implicitly

:::note

In high level programming languages such as Java, Python, Go and JavaScript, memory management is implicitly handled by the runtime. Memory is allocated implicitly using a operator and deallocation is handled by a process called garbage collection.

:::

### Garbage

Garbage, in this context, means unreachable memory or memory that is only reachable from other unreachable memory.

### Garbage Collection

Garbage collection is a process where free unused memory is detected using various algorithms and freed. This process is handled by a garbage collector. Garbage collectors are preferred because otherwise, the deallocation must be done manually by programmers which is very error-prone and time-consuming.

:::note[Terminal programs]

GC is not required. When standard output is piped to another program, the output is written to persistent storage.

:::

Garbage collectors runs in a separate thread of the program's process so that the GC can share the memory buffer of the process. If GC is run as a separate process, it would not have access to other process' memory buffer, by default. It would require root permissions to do so, and it is not recommended.

Many techniques are used to determine which memory must be garbage collected.

#### Reference counting

A table of objects and their reference count is kept by the GC. An object is marked as garbage when the reference count decrements to 0. In this technique, the GC only has to keep track of a single column. Good for object-oriented programming.

#### Tracing

A set of memory roots is used. Recursively follows all the pointers to other objects in memory. An object is marked as garbage when it is not reached in the tracing process.

## Examples

### In C

Memory is allocated either implicitly (variable declaration) or explicitly (`malloc()`) and deallocated either implicitly (by the compiler) or explicitly (`free()`)

Memory layout in C is similar to the image below.

<figure>

![Memory layout in C](/images/program-construction/c-memory-layout.jpg)

<figcaption>Image from

[MarinLwx's blog post](https://martinlwx.github.io/en/what-is-the-heap-and-stack/)

</figcaption>
</figure>

- data - initialized variables
- bss - uninitialized variables
- heap and stack grows in the opposite directions
- heap can have gaps but stack cannot

### In Java

Memory is allocated implicitly (variable declaration or `new` operator) and deallocated implicitly (by the runtime).
