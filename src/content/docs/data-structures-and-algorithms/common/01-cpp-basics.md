---
title: C++ Basics
sidebar:
  order: 1
slug: data-structures-and-algorithms/common/cpp-basics
prev: false
next: false
---

### Header files
Files with a `.h` or `.hpp` extension that contain declarations of functions, classes, variables, and other constructs. They allow code to be shared across multiple source files by including the header file using the `#include` directive.

:::note

- `#include <iostream>` - Provides functionality for input and output operations, such as reading from the console (`std::cin`) and writing to the console (`std::cout`).
- `#include <bits/stdc++.h>` - Includes almost all standard library headers. But it increases the compile time.

:::

### Namespace

Used to organize code and prevent name conflicts. They provide a way to group related classes, functions, and variables under a unique identifier. The scope resolution operator `::` is used to access elements within a namespace.

The `std` namespace contains all the standard library functions and objects.

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

To avoid repeatedly specifying the namespace, `using namespace` directive can be used. This directive brings all the names from the specified namespace into the current scope. Might lead to name conflicts in large projects.

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
```

## Standard Library

### Containers

Container classes are used to store and manage collections of data. Categorized into three types:

- Sequence Containers: Store elements in a linear order.
  - [`std::vector`](https://en.cppreference.com/w/cpp/container/vector): Dynamic array that can grow or shrink in size.
  - [`std::deque`](https://en.cppreference.com/w/cpp/container/deque): Double-ended queue that allows insertion and deletion at both ends.
  - [`std::list`](https://en.cppreference.com/w/cpp/container/list): Doubly linked list for efficient insertion and deletion.
  - [`std::stack`](https://en.cppreference.com/w/cpp/container/stack): Adapts other containers to provide stack (LIFO) functionality.
  - [`std::queue`](https://en.cppreference.com/w/cpp/container/queue): Adapts other containers to provide queue (FIFO) functionality.
  - [`std::priority_queue`](https://en.cppreference.com/w/cpp/container/priority_queue): Provides a container adapter that maintains elements in a priority order.

- Associative Containers: Store elements in a sorted order and allow fast retrieval based on keys.
  - [`std::set`](https://en.cppreference.com/w/cpp/container/set): Stores unique elements in sorted order.
  - [`std::map`](https://en.cppreference.com/w/cpp/container/map): Stores key-value pairs with unique keys in sorted order.

- Unordered Containers: Store elements in an unsorted order but provide faster average lookup times using hash tables.
  - [`std::unordered_set`](https://en.cppreference.com/w/cpp/container/unordered_set): Stores unique elements without any specific order.
  - [`std::unordered_map`](https://en.cppreference.com/w/cpp/container/unordered_map): Stores key-value pairs without any specific order.

### Algorithms

- [`std::sort`](https://en.cppreference.com/w/cpp/algorithm/sort): Sorts elements in a range.
- [`std::find`](https://en.cppreference.com/w/cpp/algorithm/find): Searches for a specific value in a range.
- [`std::accumulate`](https://en.cppreference.com/w/cpp/algorithm/accumulate): Computes the sum of elements in a range.

### Iterators

Allow traversal of elements in a container. They provide a way to access elements sequentially without exposing the underlying representation. Common types of iterators:
- [`std::begin`](https://en.cppreference.com/w/cpp/iterator/begin) and [`std::end`](https://en.cppreference.com/w/cpp/iterator/end): Used to obtain iterators pointing to the beginning and end of a container.
- [`std::advance`](https://en.cppreference.com/w/cpp/iterator/advance): Moves an iterator forward by a specified number of steps.

### Utilities

- [`std::pair`](https://en.cppreference.com/w/cpp/utility/pair) and [`std::tuple`](https://en.cppreference.com/w/cpp/utility/tuple): Used to group multiple values together.
- [`std::function`](https://en.cppreference.com/w/cpp/utility/functional/function): Encapsulates callable objects like functions, lambdas, and functors.
- [`std::unique_ptr`](https://en.cppreference.com/w/cpp/memory/unique_ptr) and [`std::shared_ptr`](https://en.cppreference.com/w/cpp/memory/shared_ptr): Smart pointers for managing dynamic memory.

### Input/Output

- [`std::cin`](https://en.cppreference.com/w/cpp/io/cin) and [`std::cout`](https://en.cppreference.com/w/cpp/io/cout): Used for console input and output.
- [`std::fstream`](https://en.cppreference.com/w/cpp/io/basic_fstream): Used for file input and output.
