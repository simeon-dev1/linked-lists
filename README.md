# Linked Lists Project

A complete implementation of a singly linked list in JavaScript, built as part of The Odin Project curriculum.

## Features

- `append(value)` - adds a new node containing value to the end
- `prepend(value)` - adds a new node containing value to the start
- `size()` - returns total number of nodes
- `head()` - returns first node
- `tail()` - returns last node
- `at(index)` - returns node at given index
- `pop()` - removes first node and returns its value
- `contains(value)` - returns true if value exists
- `findIndex(value)` - returns index of node with value
- `toString()` - returns list as ( value ) -> ( value ) -> null
- `insertAt(index, ...values)` - inserts one or more values at index
- `removeAt(index)` - removes node at index

## Architecture

This project follows the same clean architecture pattern as my previous work:
- `Data/appData.js` - contains LinkedList and Node classes
- Helper methods keep code DRY and maintainable

## What I Learned

- How references work in JavaScript
- Traversing linked structures
- Edge case handling (empty list, out of bounds)
- Abstracting repeated logic into helper functions
