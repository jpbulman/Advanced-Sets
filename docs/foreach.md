# .forEach()

### Overview

Calls the passed in function once for each element in the set.

`forEach<R>(forEachFunc: (currVal: T) => R): void`

### Parameters

`forEachFunc` - A callback function that takes in a given element of the set. The result of the function with the current elemnt is not used.

### Usage

```js
const setA = new AdvancedSet(1, 2, 3, 4, 5, 6);
let count = 0;
setA.forEach((x) => (count += x));

console.log(count); // 21
```

### Details

Introduced in: 0.0.1

Last updated in: 0.0.1
