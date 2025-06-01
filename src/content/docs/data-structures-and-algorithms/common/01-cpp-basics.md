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
