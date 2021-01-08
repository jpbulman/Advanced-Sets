# .union()

### Overview

Returns a set containing all elements in _either_ set.

`union(setB: AdvancedSet<T>): AdvancedSet<T>`

### Parameters

`setB` - The set union with the caller set.

### Usage

```js
const setA = new AdvancedSet(1, 2, 3, 4, 5);
const setB = new AdvancedSet(1, 2, 6);

setA.union(setB); // AdvancedSet(1, 2, 3, 4, 5, 6)
```

### Details

Introduced in: 0.0.1

Last updated in: 0.0.1
