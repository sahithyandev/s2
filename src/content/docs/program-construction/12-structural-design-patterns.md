---
title: Structural Design Patterns
sidebar:
  order: 12
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

## Bridge Pattern

Used to split large classes into separate hierarchies which can be developed
independently. There are 2 layer of classes.

- Abstraction layer - high-level control logic
- Implementation layer - underlying code

Mostly used when the objects vary in more than 2 independent dimensions.

```java
interface Device {
    void turnOn();
    void turnOff();
    void setChannel(int channel);
}

// Concrete Implementations
class TV implements Device {
    private boolean on = false;
    private int channel = 1;

    @Override
    public void turnOn() {
        on = true;
        System.out.println("TV is ON");
    }

    @Override
    public void turnOff() {
        on = false;
        System.out.println("TV is OFF");
    }

    @Override
    public void setChannel(int channel) {
        this.channel = channel;
        System.out.println("TV channel set to " + channel);
    }
}

class Radio implements Device {
    private boolean on = false;
    private int channel = 1;

    @Override
    public void turnOn() {
        on = true;
        System.out.println("Radio is ON");
    }

    @Override
    public void turnOff() {
        on = false;
        System.out.println("Radio is OFF");
    }

    @Override
    public void setChannel(int channel) {
        this.channel = channel;
        System.out.println("Radio frequency set to " + channel);
    }
}

// Abstraction
abstract class RemoteControl {
    protected Device device;

    public RemoteControl(Device device) {
        this.device = device;
    }

    public abstract void turnOn();
    public abstract void turnOff();
    public abstract void setChannel(int channel);
}

// Refined Abstraction
class BasicRemoteControl extends RemoteControl {
    public BasicRemoteControl(Device device) {
        super(device);
    }

    @Override
    public void turnOn() {
        device.turnOn();
    }

    @Override
    public void turnOff() {
        device.turnOff();
    }

    @Override
    public void setChannel(int channel) {
        device.setChannel(channel);
    }
}

// Client Code
public class BridgePatternDemo {
    public static void main(String[] args) {
        Device tv = new TV();
        RemoteControl remote = new BasicRemoteControl(tv);

        remote.turnOn();       // TV is ON
        remote.setChannel(5);  // TV channel set to 5
        remote.turnOff();      // TV is OFF

        Device radio = new Radio();
        remote = new BasicRemoteControl(radio);

        remote.turnOn();       // Radio is ON
        remote.setChannel(99); // Radio frequency set to 99
        remote.turnOff();      // Radio is OFF
    }
}
```

In the above example, the type of device and the type of remote are 2
independent dimensions and can be paired together without too much complexity.
