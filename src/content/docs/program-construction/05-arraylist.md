---
title: ArrayList
sidebar:
  order: 5
slug: program-construction/arraylist
prev: true
next: true
---

A resizable array implementation of the `List` interface from the Java
Collections Framework. Allows dynamic resizing and provides methods to
manipulate the stored elements. Supports a generic to hint the type of elements.
Cannot hold primitive types, like int, char, etc. Wrapper classes are needed.

## Methods

- `add(int index, Object element)`  
  Inserts the given element at the specific position
- `add(Object o)`  
  Appends the given element to the end
- `addAll(Collection C)`  
  Appends all the elements from the given collection to the end of the original
  list, in such an order that the values are returned by the specified
  collection’s iterator.
- `clear()`  
  Removes all the elements from any list.
- `clone()`  
  Return a shallow copy of the instance
- `contains(Object o)`  
  Returns if the list contains the specified element.
- `forEach(Consumer<? super E> action)`  
  Performs the given action for each element of the Iterable until all elements
  have been processed or the action throws an exception.
- `get(int index)`  
  Returns the element at the specified position
- `indexOf(Object O)`  
  The index the first occurrence of a specific element is either returned or -1
  in case the element is not in the list.
- `isEmpty()`  
  Returns if the list is empty
- `lastIndexOf(Object O)`  
  The index of the last occurrence of a specific element is either returned or
  -1 in case the element is not in the list.
- `remove(int index)`  
  Removes the element at the specified position
- `remove(Object o)`  
  Removes the first occurrence of the specified element, if it is present.
- `removeRange(int fromIndex, int toIndex)`  
  Removes all of the elements whose index is between fromIndex, inclusive, and
  toIndex, exclusive.
- `set(int index, E element)`  
  Replaces the element at the specified position with the given element.
- `size()`  
  Returns the number of elements
- `subList(int fromIndex, int toIndex)`  
  Returns a view of the portion between the specified fromIndex (inclusive) and
  toIndex (exclusive).
- `toArray()`  
  Return an array containing all of the elements in the list in the correct
  order.

## Complexity

| Operation                        | Time   | Space  |
| -------------------------------- | ------ | ------ |
| Inserting Element in ArrayList   | $O(1)$ | $O(n)$ |
| Removing Element from ArrayList  | $O(n)$ | $O(1)$ |
| Traversing Elements in ArrayList | $O(n)$ | $O(n)$ |
| Replacing Elements in ArrayList  | $O(1)$ | $O(1)$ |
