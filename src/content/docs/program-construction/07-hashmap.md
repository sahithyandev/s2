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

## Operations

### Creating a HashMap

```java
HashMap <K,V> hm = new HashMap<>();
```

Here `K` is type of key and `V` is type of value.

### Adding elements to the HashMap

`put(key, value)` method is used to add elements.

### Changing the elements in HashMap

`put(key, value)` can be used to change elements.

### Access the elements

`get(key)` method is used to access a value using its key.

### Remove the elements from HashMap

`remove(key)` method is used to remove elements.

### Traversal

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

        for(Map.Entry<String,Integer> e : numbers.entrySet()){
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
