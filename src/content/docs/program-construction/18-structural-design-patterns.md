---
title: Structural Design Patterns
sidebar:
  order: 18
slug: program-construction/structural-design-patterns
prev: true
next: true
---

Deals with how classes are designed.

## Flyweight Pattern

Aims to minimize memory usage by sharing as much data as possible with similar
objects. A way of optimization. Useful when dealing with a large number of
objects that have some shared state.

- Flyweight Factory: This factory ensures that flyweight objects are shared
  and reused. It maintains a pool of flyweight objects and returns existing
  objects from the pool instead of creating new ones.
- Flyweight Object: This object contains the intrinsic state and methods to
  operate on it.

Used in applications like text editors, game development, graphics systems, caching systems, and document management systems.

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

## Decorator Pattern

Lets you attach new behaviors to objects by placing them inside wrapper objects
that contain these behaviors. Provides a flexible alternative to subclassing for
extending functionality.

- Component: Defines the interface for objects that can have
  responsibilities added to them.
- Concrete Component: The base object that responsibilities can be added to.
- Decorator: Maintains a reference to a Component object and implements the
  Component interface.
- Concrete Decorator: Adds responsibilities to the component.

```java
// Component interface
interface Coffee {
    double getCost();
    String getDescription();
}

// Concrete Component
class SimpleCoffee implements Coffee {
    @Override
    public double getCost() {
        return 1.0;
    }

    @Override
    public String getDescription() {
        return "Simple Coffee";
    }
}

// Decorator base class
abstract class CoffeeDecorator implements Coffee {
    protected Coffee decoratedCoffee;

    public CoffeeDecorator(Coffee coffee) {
        this.decoratedCoffee = coffee;
    }

    public double getCost() {
        return decoratedCoffee.getCost();
    }

    public String getDescription() {
        return decoratedCoffee.getDescription();
    }
}

// Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee coffee) {
        super(coffee);
    }

    @Override
    public double getCost() {
        return super.getCost() + 0.5;
    }

    @Override
    public String getDescription() {
        return super.getDescription() + ", with Milk";
    }
}

class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee coffee) {
        super(coffee);
    }

    @Override
    public double getCost() {
        return super.getCost() + 0.2;
    }

    @Override
    public String getDescription() {
        return super.getDescription() + ", with Sugar";
    }
}

// Client code
public class DecoratorPatternExample {
    public static void main(String[] args) {
        Coffee coffee = new SimpleCoffee();
        System.out.println(coffee.getDescription() + " costs $" + coffee.getCost());

        Coffee coffeeWithMilk = new MilkDecorator(coffee);
        System.out.println(coffeeWithMilk.getDescription() + " costs $" + coffeeWithMilk.getCost());

        Coffee coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);
        System.out.println(coffeeWithMilkAndSugar.getDescription() + " costs $" + coffeeWithMilkAndSugar.getCost());
    }
}
```

## Facade Pattern

Provides a simplified interface to a larger body of code, making a subsystem easier to use. It hides the complexities of the system and provides a unified interface to the client.

- Facade: The class that provides a simplified interface to the subsystem.
- Subsystem Classes: The classes that perform the actual work and contain the complex logic.

```java
// Subsystem classes
class CPU {
    public void start() {
        System.out.println("CPU started");
    }

    public void execute() {
        System.out.println("CPU executing instructions");
    }

    public void shutdown() {
        System.out.println("CPU shutting down");
    }
}

class Memory {
    public void load() {
        System.out.println("Memory loaded");
    }

    public void clear() {
        System.out.println("Memory cleared");
    }
}

class HardDrive {
    public void readData() {
        System.out.println("Hard Drive reading data");
    }

    public void writeData() {
        System.out.println("Hard Drive writing data");
    }
}

// Facade class
class ComputerFacade {
    private final CPU cpu;
    private final Memory memory;
    private final HardDrive hardDrive;

    public ComputerFacade() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    public void startComputer() {
        System.out.println("Starting computer...");
        cpu.start();
        memory.load();
        hardDrive.readData();
        cpu.execute();
        System.out.println("Computer started successfully");
    }

    public void shutdownComputer() {
        System.out.println("Shutting down computer...");
        cpu.shutdown();
        memory.clear();
        hardDrive.writeData();
        System.out.println("Computer shut down successfully");
    }
}

// Client code
public class FacadePatternExample {
    public static void main(String[] args) {
        ComputerFacade computer = new ComputerFacade();

        computer.startComputer();   // Simplified interface to start the computer
        computer.shutdownComputer(); // Simplified interface to shut down the computer
    }
}
```

## Proxy Pattern

The Proxy Pattern provides a surrogate or placeholder for another object to control access to it. It is used to add an additional layer of control, such as lazy initialization, access control, logging, or caching, without changing the original object's code.

- Proxy: The class that acts as an intermediary between the client and the real object.
- Real Subject: The actual object that the proxy represents.
- Client: The object that interacts with the proxy.

### Types of Proxy
1. Virtual Proxy: Used for lazy initialization and caching.
2. Protection Proxy: Controls access to the real object based on permissions.
3. Remote Proxy: Represents an object located in a different address space.
4. Smart Proxy: Adds additional functionality, such as reference counting or logging.

```java
// Subject interface
interface Image {
    void display();
}

// Real Subject
class RealImage implements Image {
    private final String filename;

    public RealImage(String filename) {
        this.filename = filename;
        loadFromDisk();
    }

    private void loadFromDisk() {
        System.out.println("Loading " + filename);
    }

    @Override
    public void display() {
        System.out.println("Displaying " + filename);
    }
}

// Proxy
class ProxyImage implements Image {
    private RealImage realImage;
    private final String filename;

    public ProxyImage(String filename) {
        this.filename = filename;
    }

    @Override
    public void display() {
        if (realImage == null) {
            realImage = new RealImage(filename); // Lazy initialization
        }
        realImage.display();
    }
}

// Client code
public class ProxyPatternExample {
    public static void main(String[] args) {
        Image image = new ProxyImage("test_image.jpg");

        // Image will be loaded from disk
        image.display();

        // Image will not be loaded from disk again
        image.display();
    }
}
```

## Composite Pattern

Allows you to compose objects into tree-like structures to represent part-whole hierarchies. It lets clients treat individual objects and compositions of objects uniformly.

- Component: Declares the interface for objects in the composition.
- Leaf: Represents the leaf objects in the composition. A leaf has no children.
- Composite: Represents a node that can have children. Implements the component interface and stores child components.

This pattern is particularly useful when you need to work with tree structures, such as representing a file system, organization hierarchies, or graphical user interfaces.

```java
// Component interface
interface Graphic {
    void draw();
}

// Leaf class
class Circle implements Graphic {
    @Override
    public void draw() {
        System.out.println("Drawing a Circle");
    }
}

class Rectangle implements Graphic {
    @Override
    public void draw() {
        System.out.println("Drawing a Rectangle");
    }
}

// Composite class
class CompositeGraphic implements Graphic {
    private final List<Graphic> children = new ArrayList<>();

    public void add(Graphic graphic) {
        children.add(graphic);
    }

    public void remove(Graphic graphic) {
        children.remove(graphic);
    }

    @Override
    public void draw() {
        for (Graphic graphic : children) {
            graphic.draw();
        }
    }
}

// Client code
public class CompositePatternExample {
    public static void main(String[] args) {
        // Create leaf objects
        Graphic circle = new Circle();
        Graphic rectangle = new Rectangle();

        // Create composite objects
        CompositeGraphic composite1 = new CompositeGraphic();
        CompositeGraphic composite2 = new CompositeGraphic();

        // Build the tree structure
        composite1.add(circle);
        composite1.add(rectangle);

        composite2.add(composite1);
        composite2.add(new Circle());

        // Draw the entire structure
        System.out.println("Drawing composite2:");
        composite2.draw();
    }
}
```

## Adapter Pattern

Allows incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces by converting the interface of one class into another that the client expects.

- Target Interface: Defines the domain-specific interface that the client uses.
- Adapter: Implements the target interface and translates requests from the client to the adaptee.
- Adaptee: The existing class that needs to be adapted.
- Client: The object that interacts with the target interface.

This pattern is particularly useful when integrating legacy code with new systems or when working with third-party libraries that have different interfaces.

```java
// Target Interface
interface MediaPlayer {
    void play(String audioType, String fileName);
}

// Adaptee
class AdvancedMediaPlayer {
    public void playMp4(String fileName) {
        System.out.println("Playing mp4 file: " + fileName);
    }

    public void playVlc(String fileName) {
        System.out.println("Playing vlc file: " + fileName);
    }
}

// Adapter
class MediaAdapter implements MediaPlayer {
    private final AdvancedMediaPlayer advancedMediaPlayer;

    public MediaAdapter(String audioType) {
        if (audioType.equalsIgnoreCase("vlc")) {
            advancedMediaPlayer = new AdvancedMediaPlayer() {
                @Override
                public void playVlc(String fileName) {
                    super.playVlc(fileName);
                }
            };
        } else if (audioType.equalsIgnoreCase("mp4")) {
            advancedMediaPlayer = new AdvancedMediaPlayer() {
                @Override
                public void playMp4(String fileName) {
                    super.playMp4(fileName);
                }
            };
        } else {
            throw new IllegalArgumentException("Unsupported audio type: " + audioType);
        }
    }

    @Override
    public void play(String audioType, String fileName) {
        if (audioType.equalsIgnoreCase("vlc")) {
            advancedMediaPlayer.playVlc(fileName);
        } else if (audioType.equalsIgnoreCase("mp4")) {
            advancedMediaPlayer.playMp4(fileName);
        }
    }
}

// Client
class AudioPlayer implements MediaPlayer {
    @Override
    public void play(String audioType, String fileName) {
        if (audioType.equalsIgnoreCase("mp3")) {
            System.out.println("Playing mp3 file: " + fileName);
        } else if (audioType.equalsIgnoreCase("vlc") || audioType.equalsIgnoreCase("mp4")) {
            MediaPlayer adapter = new MediaAdapter(audioType);
            adapter.play(audioType, fileName);
        } else {
            System.out.println("Invalid media type: " + audioType);
        }
    }
}

// Client Code
public class AdapterPatternExample {
    public static void main(String[] args) {
        MediaPlayer player = new AudioPlayer();

        player.play("mp3", "song.mp3"); // Playing mp3 file: song.mp3
        player.play("mp4", "video.mp4"); // Playing mp4 file: video.mp4
        player.play("vlc", "movie.vlc"); // Playing vlc file: movie.vlc
        player.play("avi", "clip.avi"); // Invalid media type: avi
    }
}
```
