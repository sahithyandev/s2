---
title: Creational Design Patterns
sidebar:
  order: 7
slug: program-construction/creational-design-patterns
prev: true
next: true
---

Deals with how classes are created.

## Builder Pattern

A way of creating complex objects on a step-by-step basis. The constructor will
not take all the available attributes. Instead, the object creation logic is
moved to a `Builder` class.

```java
CarBuilder carBuilder = new CarBuilder();
carBuilder.brand("Ford").color("red");
Car mine = carBuilder.build();
```

### Director

Defines the order in which the constructor calls should be called. Optional.

## Singleton Pattern

Ensures only one instances of its kind exists. Provides single point of access
to it.

```java
public class DatabaseConnection {
  private static DatabaseConnection instance;

  private DatabaseConnection() {
    // private constructor to prevent instantiation
  }

  public static DatabaseConnection getInstance() {
    if (instance == null) {
      instance = new DatabaseConnection();
    }
    return instance;
  }

  public void connect() {
    // connection logic here
  }
}
```

The above example uses singleton pattern for DatabaseConnection. Only one
connection instance is required at runtime.

## Factory Pattern

## Abstract Factory Pattern
