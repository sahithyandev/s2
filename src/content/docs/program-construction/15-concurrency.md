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

<figure>

![Java Thread States](/images/program-construction/life-cycle-java-threads.jpg)

</figure>

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

Background threads that run in the JVM and are typically used for tasks like garbage collection or monitoring. Low-priority threads. Do not prevent the JVM from exiting when all user threads have finished execution. Automatically terminated when the JVM shuts down.

A thread can be set to be a daemon, using `setDaemon(true)` before starting the thread:

```java
Thread daemonThread = new Thread(() -> {
    while (true) {
        System.out.println("Daemon thread running");
    }
});
daemonThread.setDaemon(true);
daemonThread.start();
```

Key points:
- Daemon threads are suitable for background tasks.
- They should not be used for critical operations as they may terminate abruptly.

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

## Issues

Here are the most common concurrency issues.

### Memory Visibility

Changes made by one thread may not be visible to another thread. The solution is to use `volatile` keyword or synchronization.

```java
class SharedData {
    private volatile boolean flag = false;

    public void toggleFlag() {
        flag = !flag;
    }

    public boolean getFlag() {
        return flag;
    }
}
```

### Race Condition

Occurs when multiple threads access and modify the same data concurrently, leading to unpredictable results.

```java
// Unsafe counter
class Counter {
    private int count = 0;

    public void increment() {
        count++; // This is not atomic!
    }
}
```

The solution is to use synchronization or atomic classes.

```java
// Using synchronized
class SafeCounter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }
}

// Using AtomicInteger
class AtomicCounter {
    private AtomicInteger count = new AtomicInteger(0);

    public void increment() {
        count.incrementAndGet();
    }
}
```

### Deadlock

Occurs when two or more threads are blocked forever, waiting for each other.

```java
// Potential deadlock
synchronized(lockA) {
    // Do something
    synchronized(lockB) {
        // Do something else
    }
}

// Another thread might do:
synchronized(lockB) {
    synchronized(lockA) {
        // This creates a circular wait condition
    }
}
```

The solution is to
- Acquire locks in the same order always
- Use `tryLock` with timeout
- Use higher-level concurrency utilities

### Thread Starvation

Occurs when a thread is unable to gain regular access to shared resources. The solution is to use fair locks and avoid indefinite locks.

```java
// Fair lock example
ReentrantLock fairLock = new ReentrantLock(true);
```

### Livelock

Occurs when 2 or more threads continuously change their state in response to each other without making any progress. Unlike deadlock, where threads are blocked and unable to proceed, livelock threads remain active but are stuck in a loop of reacting to each other’s actions.

For example, consider 2 threads trying to avoid a conflict by backing off and retrying, but their retries keep interfering with each other:

```java
class Resource {
    private boolean inUse = false;

    public synchronized void use() {
        while (inUse) {
            // Back off and retry
            Thread.yield();
        }
        inUse = true;
    }

    public synchronized void release() {
        inUse = false;
    }
}
```

If two threads repeatedly attempt to use the resource and back off at the same time, they may never acquire it, resulting in livelock.

To resolve livelock:
- Randomized delays can be introduced between retries to reduce the likelihood of repeated interference.
- Priority-based access can be implemented to ensure one thread can proceed while others wait.

### Producer-Consumer problem

A situation where one or more threads produce data that other threads consume. If not properly synchronized, this can lead to issues like:
- Buffer overflow if producers are faster than consumers
- Inefficient waiting if consumers are faster than producers
- Race conditions when accessing the shared buffer

The solution typically involves using a bounded buffer with proper synchronization:

```java
BlockingQueue<Task> queue = new LinkedBlockingQueue<>(100); // Bounded buffer

// Producer thread
new Thread(() -> {
    try {
        while (true) {
            Task task = createNewTask();
            queue.put(task); // Will block if queue is full
        }
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
}).start();

// Consumer thread
new Thread(() -> {
    try {
        while (true) {
            Task task = queue.take(); // Will block if queue is empty
            processTask(task);
        }
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
}).start();
```

### Thread Pool Issues

- Resource Exhaustion: Too many threads consuming system resources
- Thread Leakage: Threads not properly returned to the pool

These issues can be solved by using appropriate thread pool configurations and properly handle exceptions.

```java
ExecutorService executor = Executors.newFixedThreadPool(10);
try {
    executor.submit(() -> {
        // Task logic
    });
} finally {
    executor.shutdown();
}
```
