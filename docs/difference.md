# .difference()

### Overview

Returns all of the elements in the first set that are not in the second set.

`difference(setB: AdvancedSet<T>): AdvancedSet<T>`

### Parameters

`setB` - The set to find the difference with. Must be an AdvancedSet of the same type as the current set.

### Usage

```js
const setA = new AdvancedSet(1, 2, 3, 4, 5);
const setB = new AdvancedSet(1, 5);

setA.difference(setB); // AdvancedSet(2, 3, 4)
```

### Details

Introduced in: 0.0.1

Last updated in: 0.0.1
