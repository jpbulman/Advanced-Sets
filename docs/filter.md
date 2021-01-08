# .filter()

### Overview

Creates a set with all of the elements that pass the given test function.

`filter(filterFunc: (currVal: T) => boolean): AdvancedSet<T>`

### Parameters

`filterFunc` - A function that takes in a given element of the set and returns `true` if the element is to stay in, and `false` if the element is to be thrown out.

### Usage

```js
const setA = new AdvancedSet(1, 2, 3, 4, 5, 6);
const greaterThanTwo = (x: number) => x > 2;

setA.filter(greaterThanTwo); // AdvancedSet(3, 4, 5, 6)
```

### Details

Introduced in: 0.0.1

Last updated in: 0.0.1
