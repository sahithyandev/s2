---
title: Creational Design Patterns
sidebar:
  order: 17
slug: program-construction/creational-design-patterns
prev: true
next: true
---

Deals with how classes are created.

## Builder Pattern

Separates the construction of a complex object from its representation. Provides
a step-by-step process. Useful when the attributes are too many and optional.

Used in SQL query builders, HTTP response builders, etc.

```java
// Product class - Represents the HTTP request being built
class HttpRequest {
    private final String method;
    private final String url;
    private final String body;
    private final Map<String, String> headers;

    // Private constructor ensures objects can only be created through Builder
    private HttpRequest(HttpRequestBuilder builder) {
        this.method = builder.method;
        this.url = builder.url;
        this.body = builder.body;
        this.headers = builder.headers;
    }

    @Override
    public String toString() {
        return "HttpRequest{" +
                "method='" + method + '\'' +
                ", url='" + url + '\'' +
                ", body='" + body + '\'' +
                ", headers=" + headers +
                '}';
    }

    // Static Builder class
    public static class HttpRequestBuilder {
        private String method = "GET";  // Default to GET request
        private String url;
        private String body = "";
        private Map<String, String> headers = new HashMap<>();

        public HttpRequestBuilder(String url) {
            this.url = url;
        }

        public HttpRequestBuilder method(String method) {
            this.method = method;
            return this;
        }

        public HttpRequestBuilder body(String body) {
            this.body = body;
            return this;
        }

        public HttpRequestBuilder addHeader(String key, String value) {
            this.headers.put(key, value);
            return this;
        }

        public HttpRequest build() {
            return new HttpRequest(this);
        }
    }
}

// Client - Demonstrates how to use the Builder pattern
public class BuilderPatternExample {
    public static void main(String[] args) {
        // Construct an HTTP POST request using the Builder
        HttpRequest request = new HttpRequest.HttpRequestBuilder("https://api.example.com/users")
                .method("POST")
                .body("{\"name\":\"John Doe\", \"email\":\"john@example.com\"}")
                .addHeader("Content-Type", "application/json")
                .addHeader("Authorization", "Bearer xyz123")
                .build();

        System.out.println(request);
    }
}
```

## Singleton Pattern

Ensures only one instances of a class exists. Provides global access to it.

Used in logging, thread pools, database connections, etc.

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

Provides an interface for creating objects of different types. The type of the
object is passed to the factory method.

Used in

```java
// Step 1: Define an interface for notifications
interface Notification {
    void send(String message);
}

// Step 2: Concrete implementations of the Notification interface
class EmailNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("Sending Email: " + message);
    }
}

class SMSNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("Sending SMS: " + message);
    }
}

// Step 3: Factory class to create Notification objects
class NotificationFactory {
    public static Notification createNotification(String type) {
        if (type.equalsIgnoreCase("EMAIL")) {
            return new EmailNotification();
        } else if (type.equalsIgnoreCase("SMS")) {
            return new SMSNotification();
        }
        throw new IllegalArgumentException("Unknown notification type: " + type);
    }
}

// Step 4: Client code using the Factory
public class FactoryMethodPatternExample {
    public static void main(String[] args) {
        Notification notification1 = NotificationFactory.createNotification("EMAIL");
        notification1.send("Welcome to our service!");

        Notification notification2 = NotificationFactory.createNotification("SMS");
        notification2.send("Your OTP code is 123456.");
    }
}
```

## Abstract Factory Pattern
