# .equals()

### Overview

Returns if the passed in set has all of the same elements as the current set.

`equals(otherSet: AdvancedSet<T>): boolean`

### Parameters

`otherSet` - The set to check equality with. Must be an AdvancedSet of the same type as the current set.

### Usage

```js
const setA = new AdvancedSet(1, 2, 3, 4, 5);
const setB = new AdvancedSet(5, 4, 3, 2, 1);

setA.equals(setB); // true

const setC = new AdvancedSet(2, 3, 4, 5, 6);

setA.equals(setC); // false
```

### Details

Introduced in: 0.0.1

Last updated in: 0.0.3
