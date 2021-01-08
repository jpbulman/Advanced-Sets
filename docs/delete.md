# .delete()

### Overview

Removes an element from the existing set. Returns the current set (without the new element).

`delete(val: T): AdvancedSet<T>`

### Parameters

`val` - The element to remove from the set.

### Usage

```js
const setA = new AdvancedSet(1, 2, 3, 4, 5);
setA.delete(5); // AdvancedSet(1, 2, 3, 4)

// Original object is changed, as well as the return value
console.log(setA); // AdvancedSet(1, 2, 3, 4)

// Deleting elements not in the set will simply return the set
setA.delete(5); // AdvancedSet(1, 2, 3, 4)
```

### Details

Introduced in: 0.0.1

Last updated in: 0.0.1
