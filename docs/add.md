# .add()

### Overview

Adds an element to the existing set. Returns the current set (with the new element).

`add(...vals: T[]): AdvancedSet<T>`

### Parameters

`vals` - Any elements to be added to the set.

### Usage

```js
const setA = new AdvancedSet(1, 2, 3, 4, 5);
setA.add(0); // AdvancedSet(1, 2, 3, 4, 5, 0)

// Original object is changed, as well as the return value
console.log(setA); // AdvancedSet(1, 2, 3, 4, 5, 0)

setA.add(6, 7, 8);
```

### Details

Introduced in: 0.0.1

Last updated in: 0.0.3
