---
title: Concurrency
sidebar:
  order: 15
slug: program-construction/concurrency
prev: true
next: true
---

Concurrency refers to the ability of different parts of a program to be executed
in parallel, without following a sequential order. Different tasks are executed
in a specific period of time but not 2 tasks are executed at the same time.
Tasks are split into smaller chunks and the chunks executed in a shared manner.
Read more about [time sharing](https://en.wikipedia.org/wiki/Time-sharing).

### Advantages

- Reduce time required to run a set of Tasks
- Better resource utilization across CPU cores
- Keep responsive user interfaces by offloading heavy tasks

### Challenges

In concurrent systems, these common challenges may arise.

- Race conditions - when multiple threads access shared data
- Deadlocks - when threads are blocked waiting for each other
- Thread starvation - when a thread is perpetually denied access to resources

## Primitives

### Process

An instance of a computer program that is being executed. It contains the
program code and its current activity. Each process has its own memory space and
resources. Each processes are isolated from each other. Inter-process
communication is more complex.

### Thread

Smallest unit of execution within a process. Within a process, all threads share
the same memory space and resources. This allows for efficient communication
between threads but requires careful synchronization. Inter-threads
communication is easier. Creating a thread is less resource intensive than
creating processes.

When one thread crashes, it may affect sibling threads.

### Thread scheduler

A part of the operating system that controls how threads are executed. It
determines which thread should run at any given time and for how long.

The scheduler is responsible for:

- Context switching between threads
- Ensuring fair execution time distribution
- Managing thread priorities
- Handling thread states (Ready, Running, Blocked, etc)

The scheduler follows different algorithms to manage these decisions, such as:

- Round Robin - Threads are given equal time slices in circular order
- Priority Based - Higher priority threads are executed first
- Preemptive - Running threads can be interrupted for higher priority threads
- Multi-level Queue - Multiple queues with different priorities

Modern operating systems use complex scheduling algorithms that combine multiple
approaches to achieve optimal performance and responsiveness.

## In Java

Concurrency is achieved through threads - independent paths of execution within
a program.

Here's a basic example of creating and starting a thread in Java:

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

// Define the thread
MyThread thread = new MyThread();
// Until the start method is called, the thread won't be created

thread.start(); // this call initializes the separate stack for MyThread and start its execution (the run method)
```

Threads can also be created using the Runnable interface.

```java
Runnable task = () -> {
    System.out.println("Task running in thread");
};

Thread thread = new Thread(task);
thread.start();
```

Implementing `Runnable` interface is preferred over extending `Thread` class.
Because a class can only extend 1 class in Java. Additionally, Runnable-based
classes keeps the code more flexible as the task can be executed by different
executor services and thread pools, not just in a Thread. It also follows the
principle of composition over inheritance.

### Thread states

A thread can be in either of these 5 states:

- Runnable
- Running
- Sleeping
- Blocked
- Waiting

Once `start` method is called, the thread goes to running state.

A thread can be paused using `sleep` method. It goes to sleeping state once the
method is called. When the sleep time expires, or through an interrupt, the
thread can be waken up. But it wouldn't start running immediately.

A thread will terminate once the run method finish executing. It can be stopped
forcibly using `stop` method.

### Interrupt

An indication to a thread that it should stop what it is doing and do something
else. A thread can be interrupted when it is in sleeping or executing or waiting
state.

An interrupted thread is free to do whatever when interrupted. // Explain the
try-catch.

### Joining

The `join` method allows one thread to wait for the completition of another.
When `thread2.join()` is called on thread 1, until thread 2 finishes thread 1
will wait. The method responds to an interrupt with an InterruptedException.

### Thread priority

The priority of the threads are used by the thread scheduler in its algorithm. 3
levels of priority: `Thread.NORM_PRIORITY`, (default), `Thread.MIN_PRIORITY`,
`Thread.MAX_PRIORITY`.

### Daemon threads

Low priority threads by default.

### Solutions for common issues

- Synchronization primitives (`synchronized`, `volatile`)
- Locks (`ReentrantLock`, `ReadWriteLock`)
- Thread-safe collections (`ConcurrentHashMap`, `BlockingQueue`)
- Atomic variables (`AtomicInteger`, `AtomicReference`)

When multiple threads access shared resources, synchronization is required to
prevent race conditions. The `synchronized` keyword ensures exclusive access:

```java
class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public synchronized int getCount() {
        return count;
    }
}
```

Here's an example using a `BlockingQueue` for thread-safe producer-consumer
pattern:

```java
BlockingQueue<String> queue = new ArrayBlockingQueue<>(10);

// Producer
new Thread(() -> {
    try {
        queue.put("message");
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
}).start();

// Consumer
new Thread(() -> {
    try {
        String message = queue.take();
        System.out.println(message);
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
}).start();
```

## Best practices

1. Minimize shared state
2. Use immutable objects when possible
3. Prefer higher-level concurrency utilities over raw threads
4. Always handle InterruptedException properly
5. Be careful with thread pools to avoid resource exhaustion
