# .isSupersetOf()

### Overview

Returns if all of the elements of the passed in set are part of the caller set.

`isSupersetOf(setB: AdvancedSet<T>): boolean`

### Parameters

`setB` - The set in question of being contained in the caller set.

### Usage

```js
const setA = new AdvancedSet(1, 2, 3, 4, 5);
const setB = new AdvancedSet(1, 2, 3);
setA.isSupersetOf(setB); // true

const setC = new AdvancedSet(2, 3, 4, 5);
setA.isSupersetOf(setC); // false
```

### Details

Introduced in: 0.0.1

Last updated in: 0.0.1
