---
title: Structural Design Patterns
sidebar:
  order: 8
slug: program-construction/structural-design-patterns
prev: true
next: true
---

Deals with how classes are designed.

## Flyweight Pattern

Aims to minimize memory usage by sharing as much data as possible with similar
objects. A way of optimization. Useful when dealing with a large number of
objects that have some shared state.

- **Flyweight Factory**: This factory ensures that flyweight objects are shared
  and reused. It maintains a pool of flyweight objects and returns existing
  objects from the pool instead of creating new ones.
- **Flyweight Object**: This object contains the intrinsic state and methods to
  operate on it.

```java
// Flyweight interface
interface Flyweight {
  void operation(String extrinsicState);
}

// Concrete Flyweight class
class ConcreteFlyweight implements Flyweight {
  private final String intrinsicState;

  public ConcreteFlyweight(String intrinsicState) {
    this.intrinsicState = intrinsicState;
  }

  @Override
  public void operation(String extrinsicState) {
    System.out.println("Intrinsic State: " + intrinsicState + ", Extrinsic State: " + extrinsicState);
  }
}

// Flyweight Factory
class FlyweightFactory {
  private final Map<String, Flyweight> flyweights = new HashMap<>();

  public Flyweight getFlyweight(String key) {
    if (!flyweights.containsKey(key)) {
      flyweights.put(key, new ConcreteFlyweight(key));
    }
    return flyweights.get(key);
  }

  public int getFlyweightCount() {
    return flyweights.size();
  }
}

// Client code
public class FlyweightPatternExample {
  public static void main(String[] args) {
    FlyweightFactory factory = new FlyweightFactory();

    Flyweight flyweight1 = factory.getFlyweight("A");
    flyweight1.operation("First Call");

    Flyweight flyweight2 = factory.getFlyweight("A");
    flyweight2.operation("Second Call");

    Flyweight flyweight3 = factory.getFlyweight("B");
    flyweight3.operation("Third Call");

    System.out.println("Total flyweights created: " + factory.getFlyweightCount());
  }
}
```

## Decorator Pattern

Used to wrap existing objects to add new functionality without altering its
structure and at runtime. Applies Single Responsibility and Open-Closed
principles.
