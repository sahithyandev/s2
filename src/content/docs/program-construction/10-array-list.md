---
title: ArrayList
sidebar:
  order: 10
slug: program-construction/array-list
prev: true
next: true
---

An ArrayList in Java is a resizable array implementation of the List interface
from the Java Collections Framework. It allows dynamic resizing and provides
methods to manipulate the stored elements.

Syntex of ArrayList: `ArrayList<T> arr = new ArrayList<T>();`

ArrayList can not be used for primitive types, like int, char, etc. We need a
wrapper class for such cases.

# Java ArrayList methods

- `add(int index, Object element)` : This method is used to insert a specific
  element at a specific position index in a list.
- `add(Object o)` : This method is used to append a specific element to the end
  of a list.
- `addAll(Collection C)` : This method is used to append all the elements from a
  specific collection to the end of the mentioned list, in such an order that
  the values are returned by the specified collection’s iterator.
- `clear()` : This method is used to remove all the elements from any list.
- `clone()` : This method is used to return a shallow copy of an ArrayList in
  Java.
- `contains(Object o)` : Returns true if this list contains the specified
  element.
- `forEach(Consumer<? super E> action)` : Performs the given action for each
  element of the Iterable until all elements have been processed or the action
  throws an exception.
- `get(int index)` : Returns the element at the specified position in this list.
- `indexOf(Object O)` : The index the first occurrence of a specific element is
  either returned or -1 in case the element is not in the list.
- `isEmpty()` : Returns true if this list contains no elements.
- `lastIndexOf(Object O)` : The index of the last occurrence of a specific
  element is either returned or -1 in case the element is not in the list.
- `remove(int index)` : Removes the element at the specified position in this
  list.
- `remove(Object o)` : Removes the first occurrence of the specified element
  from this list, if it is present.
- `removeRange(int fromIndex, int toIndex)` : Removes from this list all of the
  elements whose index is between fromIndex, inclusive, and toIndex, exclusive.
- `set(int index, E element)` : Replaces the element at the specified position
  in this list with the specified element.
- `size()` : Returns the number of elements in this list.
- `subList(int fromIndex, int toIndex)` : Returns a view of the portion of this
  list between the specified fromIndex, inclusive, and toIndex, exclusive.
- `toArray()` : This method is used to return an array containing all of the
  elements in the list in the correct order.

# Complexity of Java ArrayList

|              Operation           | Time complexity | Space complexity |
|              ----------          | --------------- |  ----------------|
|Inserting Element in ArrayList    |      O(1)       |       O(N)       |
|Removing Element from ArrayList   |      O(N)       |       O(1)       |
|Traversing Elements in ArrayList  |      O(N)       |       O(N)       |
|Replacing Elements in ArrayList   |      O(1)       |       O(1)       |