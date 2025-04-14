---
title: HashMap
sidebar:
  order: 7
slug: program-construction/hashmap
prev: true
next: true
---

A basic implementation of the [Map](/program-construction/map) interface in
Java. Uses keys in the same way as an Array uses an index. Duplicate keys are
not allowed. Existing value will be overridden when a key is reused.

:::note

HashMaps are not ordered and not thread safe.

:::

## Creating a HashMap

```java
HashMap <K,V> hm = new HashMap<>();
```

Here `K` is type of key and `V` is type of value.

## Adding elements to the HashMap

We can use `put()` method to add elements to the HashMap.

```java
import java.util.HashMap;

class Main {
  public static void main(String[] args) {

    // create a hashmap
    HashMap<String, Integer> numbers = new HashMap<>();

    // put() method to add elements
    numbers.put("key1", 1);
    numbers.put("key2", 2);
    numbers.put("key3", 3);
    System.out.println("HashMap after put(): " + numbers);
  }
}

```

Output

```txt
HashMap after put(): {key1=1, key2=2, key3=3}
```

## Changing the elements in HashMap

```java
import java.io.*;
import java.util.*;
class ChangeElementsOfHashMap {
    public static void main(String args[])
    {
        HashMap<String, Integer> hm = new HashMap<String, Integer>();
        hm.put("key1", 1);
        hm.put("key2", 2);
        hm.put("key3", 3);

        System.out.println("Initial Map " + hm);
        //Changing the element
        hm.put("key2", 5);
        System.out.println("Updated Map " + hm);
    }
}
```

Output

```txt
Initial Map {key1=1, key2=2, key3=3}
Updated Map {key1=1, key2=5, key3=3}
```

## Access the elements

```java
import java.util.HashMap;

class Main {
  public static void main(String[] args) {

    // create a hashmap
    HashMap<String, Integer> numbers = new HashMap<>();

    // put() method to add elements
    numbers.put("key1", 1);
    numbers.put("key2", 2);
    numbers.put("key3", 3);

    // get the value of key2
    int value2 = numbers.get("key2");
    System.out.println(value2);
  }
}
```

Output

```txt
2
```

## Remove the elements from HashMap

```java
import java.util.HashMap;

class Main {
  public static void main(String[] args) {

    // create a hashmap
    HashMap<String, Integer> numbers = new HashMap<>();

    numbers.put("key1", 1);
    numbers.put("key2", 2);
    numbers.put("key3", 3);
    System.out.println("Before: "+numbers);
    //remove the element
    numbers.remove("key2");
    System.out.println("After: "+numbers);


  }
}

```

Output

```txt
Before: {key1=1, key2=2, key3=3}
After: {key1=1, key3=3}
```

## Traversal of Java HashMap

```java
import java.util.HashMap;
import java.util.Map;

public class Test {
    public static void main(String[] args)
    {
        // initialize a HashMap
        HashMap<String, Integer> numbers = new HashMap<>();

        numbers.put("key1", 1);
        numbers.put("key2", 2);
        numbers.put("key3", 3);

        for(Map.Entry<String,Integer> e:numbers.entrySet()){
            System.out.println("Key: "+e.getKey()+" Value: "+e.getValue());
        }
    }
}
```

Output

```txt
Key: key1 Value: 1
Key: key2 Value: 2
Key: key3 Value: 3
```
