# .isDisjointWith()

### Overview

Returns whether or not the sets share no elements.

`isDisjointWith(setB: AdvancedSet<T>): boolean`

### Parameters

`setB` - The set to see if no elements are shared with.

### Usage

```js
const setA = new AdvancedSet(1, 2, 3, 4, 5, 6);
const setB = new AdvancedSet(100, 200, 300);

setA.isDisjointWith(setB); // true

const setC = new AdvancedSet(1, 2, 10, 20);

setA.isDisjointWith(setC); // false
```

### Details

Introduced in: 0.0.1

Last updated in: 0.0.1
