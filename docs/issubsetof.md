# .isSubsetOf()

### Overview

Returns if all of the elements of this set are contained in the passed in set.

`isSubsetOf(setB: AdvancedSet<T>): boolean`

### Parameters

`setB` - The set to check if it contains the current set

### Usage

```js
const setA = new AdvancedSet(1, 2, 3);
const setB = new AdvancedSet(1, 2, 3, 4, 5);
setA.isSubsetOf(setB); // true

const setC = new AdvancedSet(2, 3, 4, 5);
setA.isSubsetOf(setC); // false
```

### Details

Introduced in: 0.0.1

Last updated in: 0.0.1
