# Custom JavaScript Hash Map Implementation

## Overview

This project involves building a fully functional, custom Hash Map data structure in JavaScript. The implementation is based on the lessons from The Odin Project and demonstrates a deep understanding of core Hash Map concepts, including hashing, collision resolution, and dynamic capacity management.

## Key Features & Methods

The `HashMap` class (or factory function) implements the following essential methods:

| Method | Description |
| :--- | :--- |
| **`hash(key)`** | Generates a numerical hash code for a given string key, managing potential integer overflow. |
| **`set(key, value)`** | Inserts a new key-value pair. Overwrites the value if the key already exists. |
| **`get(key)`** | Retrieves the value associated with a key, or returns `null` if the key is not found. |
| **`has(key)`** | Returns `true` if the key exists in the map, otherwise `false`. |
| **`remove(key)`** | Removes the entry for the key and returns `true`, or `false` if the key was not found. |
| **`length()`** | Returns the total count of stored key-value pairs. |
| **`clear()`** | Removes all entries from the hash map. |
| **`keys()`** | Returns an array containing all keys. |
| **`values()`** | Returns an array containing all values. |
| **`entries()`** | Returns an array of `[key, value]` pairs. |

## Core Concepts Demonstrated

* **Collision Handling:** Implementation of a strategy (e.g., separate chaining) to handle different keys that resolve to the same bucket index.
* **Dynamic Resizing (Growth):** The map automatically *doubles* its capacity when the number of entries exceeds a predefined **load factor** (e.g., 0.75) to maintain performance.

---

## Source and Learning

This project was built following the curriculum for **The Odin Project's** [JavaScript Hash Map](https://www.theodinproject.com/lessons/javascript-linked-lists](https://www.theodinproject.com/lessons/javascript-hashmap)) lesson.
