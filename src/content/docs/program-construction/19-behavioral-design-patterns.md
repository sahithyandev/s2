---
title: Behavioral Design Patterns
sidebar:
  order: 19
slug: program-construction/behavioral-design-patterns
prev: true
next: false
---

Deals with how different kinds of objects interact with each other.

## Template method pattern

Defines the structure of an algorithm in the superclass but allows the steps of
the algorithm to be implemented or overridden by subclasses.

Used in parsing logic of different kinds of files, web frameworks for request
handling, testing frameworks with lifecycle hooks.

```java
// Abstract class that defines the template method
abstract class Game {
    // Template method defines the overall algorithm
    public final void play() {
        initialize();
        startPlay();
        endPlay();
    }

    // Concrete methods - Common behavior for all games
    private void initialize() {
        System.out.println("Initializing game...");
    }

    private void endPlay() {
        System.out.println("Ending game...");
    }

    // Abstract methods - Specific behavior that must be implemented by subclasses
    protected abstract void startPlay();  // To be implemented by subclasses
}

// Concrete class for Chess, implementing specific gameplay behavior
class ChessGame extends Game {
    @Override
    protected void startPlay() {
        System.out.println("Starting Chess game...");
    }
}

// Concrete class for Card game, implementing specific gameplay behavior
class CardGame extends Game {
    @Override
    protected void startPlay() {
        System.out.println("Starting Card game...");
    }
}

// Client - Demonstrates the Template Method pattern
public class TemplateMethodPatternExample {
    public static void main(String[] args) {
        Game chess = new ChessGame();
        chess.play();  // Chess game will use the template and implement its own behavior

        System.out.println("\n");

        Game cardGame = new CardGame();
        cardGame.play();  // Card game will use the template and implement its own behavior
    }
}
```

Reduces duplication and forces a structure. Allows for customization.

## Command pattern

Turns a request into a standalone Command object. Can be passed, queued, logged.
Used in controllers, job scheduling systems, user actions in GUI.

```java
// Command Interface - Defines an interface for all command objects.
interface Command {
    void execute();  // Executes the command.
}

// Concrete Command 1 - Turns on the light.
class LightOnCommand implements Command {
    private final Light light;

    public LightOnCommand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.turnOn();  // Calls the action on the receiver (Light).
    }
}

// Concrete Command 2 - Turns off the light.
class LightOffCommand implements Command {
    private final Light light;

    public LightOffCommand(Light light) {
        this.light = light;
    }

    @Override
    public void execute() {
        light.turnOff();  // Calls the action on the receiver (Light).
    }
}

// Receiver - The object that performs the actual action.
class Light {
    public void turnOn() {
        System.out.println("The light is ON");
    }

    public void turnOff() {
        System.out.println("The light is OFF");
    }
}

// Invoker - The object that asks the command to execute.
class RemoteControl {
    private Command command;

    // Set a command to be executed
    public void setCommand(Command command) {
        this.command = command;
    }

    // Executes the set command
    public void pressButton() {
        command.execute();
    }
}

// Client - Demonstrates the use of the Command pattern.
public class CommandPatternExample {
    public static void main(String[] args) {
        // Create the receiver (light) and the invoker (remote control)
        Light light = new Light();
        Command lightOn = new LightOnCommand(light);
        Command lightOff = new LightOffCommand(light);

        RemoteControl remote = new RemoteControl();

        // Turn the light on using the command
        remote.setCommand(lightOn);
        remote.pressButton();  // Output: The light is ON

        // Turn the light off using the command
        remote.setCommand(lightOff);
        remote.pressButton();  // Output: The light is OFF
    }
}
```

Benefits:

- Loosen the coupling between invoker and receiver
- Can be serialized

Drawbacks:

- Overhead for simple operations – For very simple operations, the Command
  pattern introduces unnecessary complexity by creating multiple command
  objects.
- Difficult to implement with complex systems – In systems where commands can
  have many different types of parameters, the number of command objects may
  grow significantly, making the system harder to manage.
- Harder to maintain – As new commands are added, the invoker (client) and
  command interface may need modifications, leading to possible changes in other
  parts of the system.

## Momento pattern

Provides a way to store and restore the internal state of an object, without
breaking encapsulation. Used for implementing undo/redo.

```java
import java.util.Stack;

/**
 * Memento class that stores a snapshot of the text editor's state.
 * This class is immutable, meaning its state cannot be modified after creation.
 */
class TextEditorMemento {
    private final String content;  // The saved content of the editor.

    /**
     * Constructor initializes the memento with the editor's content.
     * @param content The text content to be saved.
     */
    public TextEditorMemento(String content) {
        this.content = content;
    }

    /**
     * Retrieves the saved content.
     * @return The stored text content.
     */
    public String getContent() {
        return content;
    }
}

/**
 * Originator: The TextEditor class that can save and restore its state.
 */
class TextEditor {
    private String content = "";  // Current content of the text editor.

    /**
     * Appends new text to the editor.
     * @param text The text to be added.
     */
    public void write(String text) {
        content += text;
    }

    /**
     * Retrieves the current content of the editor.
     * @return The editor's text content.
     */
    public String getContent() {
        return content;
    }

    /**
     * Saves the current state of the editor in a Memento object.
     * @return A new TextEditorMemento containing the current content.
     */
    public TextEditorMemento save() {
        return new TextEditorMemento(content);
    }

    /**
     * Restores the editor's content from a previously saved Memento.
     * @param memento The memento object containing the saved state.
     */
    public void restore(TextEditorMemento memento) {
        content = memento.getContent();
    }
}

/**
 * Caretaker: Manages the history of text editor states.
 * It keeps track of previous states and allows undo functionality.
 */
class History {
    private final Stack<TextEditorMemento> history = new Stack<>();  // Stack to store previous states.

    /**
     * Saves the current state of the editor by creating a new memento.
     * @param editor The text editor whose state is to be saved.
     */
    public void save(TextEditor editor) {
        history.push(editor.save());
    }

    /**
     * Restores the editor to the most recent saved state.
     * If no previous states exist, no changes are made.
     * @param editor The text editor to be restored.
     */
    public void undo(TextEditor editor) {
        if (!history.isEmpty()) {
            editor.restore(history.pop());
        }
    }
}

/**
 * Demonstrates the use of the Memento pattern in a text editor scenario.
 */
public class MementoPatternExample {
    public static void main(String[] args) {
        // Create a text editor and a history manager
        TextEditor editor = new TextEditor();
        History history = new History();

        // Write text and save state
        editor.write("Hello, ");
        history.save(editor);  // Save the state after writing "Hello, "

        editor.write("world!");
        history.save(editor);  // Save the state after writing "world!"

        System.out.println("Current content: " + editor.getContent());  // Output: Hello, world!

        // Undo the last action (removes "world!")
        history.undo(editor);
        System.out.println("After Undo: " + editor.getContent());  // Output: Hello,

        // Undo again (removes "Hello, ")
        history.undo(editor);
        System.out.println("After Another Undo: " + editor.getContent());  // Output: (empty)
    }
}
```

Encapsulation property is maintained.

Not suitable when the state is complex, or large, or frequently changing.

## Visitor pattern

Allows adding new operations to objects without modifying them. The operation is
abstracted into a separate class.

Used for AST (Abstract Syntax Tree) traversal, serialization, graphic rendering,
etc.

```java
// Visitor interface - Defines the operations that can be performed on different file types.
interface FileVisitor {
    void visit(TextFile textFile);
    void visit(ImageFile imageFile);
}

// Element interface - Represents a file that can accept a visitor.
interface File {
    void accept(FileVisitor visitor);
}

// Concrete Element 1 - A text file that can be scanned.
class TextFile implements File {
    private String name;

    public TextFile(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    @Override
    public void accept(FileVisitor visitor) {
        visitor.visit(this);  // Calls the visitor's method for text files.
    }
}

// Concrete Element 2 - An image file that can be scanned.
class ImageFile implements File {
    private String name;

    public ImageFile(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    @Override
    public void accept(FileVisitor visitor) {
        visitor.visit(this);  // Calls the visitor's method for image files.
    }
}

// Concrete Visitor - VirusScanner that implements scanning logic for different file types.
class VirusScanner implements FileVisitor {
    @Override
    public void visit(TextFile textFile) {
        System.out.println("Scanning text file: " + textFile.getName() + " for viruses.");
    }

    @Override
    public void visit(ImageFile imageFile) {
        System.out.println("Scanning image file: " + imageFile.getName() + " for viruses.");
    }
}

// Client - Demonstrates how the Visitor pattern is used in a file scanning scenario.
public class VisitorPatternExample {
    public static void main(String[] args) {
        // Create different types of files
        File textFile = new TextFile("document.txt");
        File imageFile = new ImageFile("photo.jpg");

        // Create a virus scanner visitor
        FileVisitor virusScanner = new VirusScanner();

        // Apply the visitor to each file
        textFile.accept(virusScanner);
        imageFile.accept(virusScanner);
    }
}
```

Drawbacks:

- Open/closed principle is broken – Every time a new file type is added (e.g.,
  VideoFile), the visitor interface must be modified, which affects all concrete
  visitors.
- Increased complexity – More interfaces and classes make the system harder to
  understand for beginners.
- Not ideal for frequently changing structures – If the object structure (i.e.,
  file types) changes frequently, modifying all visitors becomes cumbersome.

## Observer pattern

Defines a one-to-many relationship between objects so that when one object
changes state, all its dependents are notified and updated automatically.

Used in event handling systems, MVC pattern (Model-View relationship),
publish-subscribe systems.

```java
// Observer interface - Defines method that gets called when subject changes
interface Observer {
    void update(String message);
}

// Subject interface - Defines methods for managing observers
interface Subject {
    void registerObserver(Observer observer);
    void removeObserver(Observer observer);
    void notifyObservers();
}

// Concrete Subject - NewsAgency that broadcasts news to subscribers
class NewsAgency implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private String news;

    @Override
    public void registerObserver(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(news);
        }
    }

    // Method that changes the subject's state
    public void setNews(String news) {
        this.news = news;
        notifyObservers();
    }
}

// Concrete Observer - NewsChannel that receives news updates
class NewsChannel implements Observer {
    private String name;

    public NewsChannel(String name) {
        this.name = name;
    }

    @Override
    public void update(String news) {
        System.out.println(name + " received news: " + news);
    }
}

// Client - Demonstrates the Observer pattern
public class ObserverPatternExample {
    public static void main(String[] args) {
        NewsAgency newsAgency = new NewsAgency();

        NewsChannel channel1 = new NewsChannel("Channel 1");
        NewsChannel channel2 = new NewsChannel("Channel 2");

        // Register observers
        newsAgency.registerObserver(channel1);
        newsAgency.registerObserver(channel2);

        // Set news, which will notify all observers
        newsAgency.setNews("Breaking News: Observer Pattern Demonstration!");

        // Remove an observer
        newsAgency.removeObserver(channel2);

        // Set news again, only channel1 will be notified
        newsAgency.setNews("Channel 2 won't receive this news!");
    }
}
```

Benefits:

- Loose coupling between subject and observers
- Support for broadcast communication
- Easy to add new observers without modifying subject

Drawbacks:

- Memory leaks if observers aren't properly unregistered
- Unexpected updates if order of notification matters
- Performance impact with many observers

## Strategy pattern

Defines a family of algorithms, encapsulates each one, and makes them
interchangeable. Strategy lets the algorithm vary independently from clients
that use it.

Used for different sorting algorithms, payment methods, compression algorithms,
etc.

```java
// Strategy interface - Defines the common interface for all algorithms
interface PaymentStrategy {
    void pay(int amount);
}

// Concrete Strategy 1 - Credit Card payment
class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;

    public CreditCardPayment(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    @Override
    public void pay(int amount) {
        System.out.println("Paid $" + amount + " using Credit Card: " + cardNumber);
    }
}

// Concrete Strategy 2 - PayPal payment
class PayPalPayment implements PaymentStrategy {
    private String email;

    public PayPalPayment(String email) {
        this.email = email;
    }

    @Override
    public void pay(int amount) {
        System.out.println("Paid $" + amount + " using PayPal account: " + email);
    }
}

// Context - Shopping Cart that uses payment strategy
class ShoppingCart {
    private PaymentStrategy paymentStrategy;

    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.paymentStrategy = strategy;
    }

    public void checkout(int amount) {
        paymentStrategy.pay(amount);
    }
}

// Client - Demonstrates the Strategy pattern
public class StrategyPatternExample {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();

        // Pay with Credit Card
        cart.setPaymentStrategy(new CreditCardPayment("1234-5678-9012-3456"));
        cart.checkout(100);

        // Pay with PayPal
        cart.setPaymentStrategy(new PayPalPayment("example@email.com"));
        cart.checkout(200);
    }
}
```

Benefits:

- Algorithms can be switched at runtime
- Isolates algorithm implementation details
- Promotes composition over inheritance

Drawbacks:

- Increased number of objects if many strategies
- Client must be aware of different strategies
- Strategy and Context interfaces may become complex

## State pattern

Allows an object to alter its behavior when its internal state changes,
appearing to change its class.

Used in workflow management, game state handling, user interface states, etc.

```java
// State interface - Defines behavior associated with each state
interface VendingMachineState {
    void insertCoin(VendingMachine machine);
    void pressButton(VendingMachine machine);
    void dispense(VendingMachine machine);
}

// Concrete State 1 - No Coin State
class NoCoinState implements VendingMachineState {
    @Override
    public void insertCoin(VendingMachine machine) {
        System.out.println("Coin inserted");
        machine.setState(new HasCoinState());
    }

    @Override
    public void pressButton(VendingMachine machine) {
        System.out.println("Please insert a coin first");
    }

    @Override
    public void dispense(VendingMachine machine) {
        System.out.println("Please insert a coin first");
    }
}

// Concrete State 2 - Has Coin State
class HasCoinState implements VendingMachineState {
    @Override
    public void insertCoin(VendingMachine machine) {
        System.out.println("Coin already inserted");
    }

    @Override
    public void pressButton(VendingMachine machine) {
        System.out.println("Button pressed, dispensing item");
        machine.setState(new DispensingState());
    }

    @Override
    public void dispense(VendingMachine machine) {
        System.out.println("Please press the button first");
    }
}

// Concrete State 3 - Dispensing State
class DispensingState implements VendingMachineState {
    @Override
    public void insertCoin(VendingMachine machine) {
        System.out.println("Please wait, dispensing in progress");
    }

    @Override
    public void pressButton(VendingMachine machine) {
        System.out.println("Please wait, dispensing in progress");
    }

    @Override
    public void dispense(VendingMachine machine) {
        System.out.println("Item dispensed");
        machine.setState(new NoCoinState());
    }
}

// Context - Vending Machine that maintains current state
class VendingMachine {
    private VendingMachineState state;

    public VendingMachine() {
        state = new NoCoinState();
    }

    public void setState(VendingMachineState state) {
        this.state = state;
    }

    public void insertCoin() {
        state.insertCoin(this);
    }

    public void pressButton() {
        state.pressButton(this);
    }

    public void dispense() {
        state.dispense(this);
    }
}

// Client - Demonstrates the State pattern
public class StatePatternExample {
    public static void main(String[] args) {
        VendingMachine machine = new VendingMachine();

        // Try to get item without coin
        machine.pressButton();  // Output: Please insert a coin first

        // Insert coin and get item
        machine.insertCoin();   // Output: Coin inserted
        machine.pressButton();  // Output: Button pressed, dispensing item
        machine.dispense();     // Output: Item dispensed

        // Try to insert coin while dispensing
        machine.insertCoin();   // Output: Coin inserted
    }
}
```

Benefits:

- Organizes state-specific behavior
- Makes state transitions explicit
- Eliminates complex conditionals

Drawbacks:

- Can be overkill for simple state management
- Increased number of classes
- State transitions can become complex
