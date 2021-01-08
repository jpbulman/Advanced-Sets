# .map()

### Overview

Returns a new set with results of the passed in function being called with each element in the caller set.

`map<R>(mapFunc: (currVal: T) => R): AdvancedSet<R>`

### Parameters

`mapFunc` - The function that each element of the set will be called with. It may return the same type as the original set, or a new type, if the caller wishes to convert the elements of the set.

### Usage

```js
const setA = new AdvancedSet(1, 2, 3, 4, 5);
const timesTen = (x) => x * 10;

setA.map(timesTen); // AdvancedSet(10, 20, 30, 40, 50)
```

### Details

Introduced in: 0.0.1

Last updated in: 0.0.1
