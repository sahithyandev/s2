---
title: Tree
sidebar:
  order: 2
slug: data-structures-and-algorithms/data-structures/tree
prev: true
next: true
---

A widely used abstract data type that simulates a hierarchical tree structure
with a set of connected nodes.

## Terminology

### Root

The topmost node in a tree. It is the only node that has no parent.

### Node

Each element in the tree. A node contains a value or data and may have a parent
and child nodes.

### Edge

The connection between two nodes.

### Child

A node directly connected to another node when moving away from the root.

### Parent

A node directly connected to another node when moving towards the root.

### Leaf

A node that does not have any children.

### Subtree

A tree consisting of a node and its descendants.

### Height

The length of the longest path from the root to a leaf.

### Depth

The length of the path from the root to a node.

## Common Operations

- Insertion: Adding a node to the tree.
- Deletion: Removing a node from the tree.
- Traversal: Visiting all the nodes in some order
- Searching: Finding a node in the tree.

Trees are fundamental in computer science and are used in various applications
such as databases, file systems, and network routing algorithms.

## Traversal Order

- In-order Traversal: Visit the left subtree, the root, and then the right
  subtree.
- Pre-order Traversal: Visit the root, the left subtree, and then the right
  subtree.
- Post-order Traversal: Visit the left subtree, the right subtree, and then the
  root.
- Level-order Traversal: Visit nodes level by level from top to bottom.

## Binary Tree

Each node has at most 2 children: left and right. Used to implement efficient
searching and sorting algorithms.

## Binary Search Tree

A binary tree where the left child contains only nodes with values less than the
parent node, and the right child contains only nodes with values greater than
the parent node.

### Insertion Logic

After adding the new node, the tree must remain valid.

- Start at the Root: Begin at the root node.
- Compare Values: Compare the value to be inserted with the value of the current
  node.
- Move Left or Right:
  - If the value is less than the current node's value, move to the left child.
  - If the value is greater than the current node's value, move to the right
    child.
- Insert the Node: When you reach a `null` position (where there is no left or
  right child), insert the new node there.

### Deletion Logic

Deletion algorithm depends on the node to be deleted.

- Node with No Children: Simply remove the node.
- Node with One Child: Remove the node and replace it with its child.
- Node with Two Children: Find the in-order successor (smallest node in the
  right subtree), replace the node's value with the successor's value, and then
  delete the successor.

## Balanced Tree

A tree where the height of the left and right subtrees of any node differ by at
most one.

## AVL Tree

A self-balancing binary search tree where the difference in heights of left and
right subtrees cannot be more than one for all nodes.

## Red-Black Tree

A self-balancing binary search tree where each node contains an extra bit for
denoting the color of the node, either red or black.
