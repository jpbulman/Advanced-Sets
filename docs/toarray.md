# .toArray()

### Overview

Returns all of the elements in the set in an array. Since sets do not have an order to their elements, the order of elements in the array is not guaranteed.

`toArray(): T[]`

### Parameters

None

### Usage

```js
const setA = new AdvancedSet(1, 2, 3, 4, 5);
setA.toArray().sort(); // [1, 2, 3, 4, 5]
```

### Details

Introduced in: 0.0.1

Last updated in: 0.0.1
