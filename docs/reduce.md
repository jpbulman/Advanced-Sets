# .reduce()

### Overview

Condenses all of the elements in the set into a single value from the passed in accumulator function.

`reduce<R>(reduceFunc: (accumulator: R, currVal: T) => R, startingValue: R): R`

### Parameters

`reduceFunc` - A function that takes in the current value of the accumulator, and the current element from the set. It should return the new value for the accumulator.

`startingValue` - The inital value the accumulator should be.

### Usage

```js
const setA = new AdvancedSet(1, 2, 3, 4, 5);
const sum = (acc: number, currVal: number) => acc + currVal;

setA.reduce(sum, 0); // 15
```

### Details

Introduced in: 0.0.1

Last updated in: 0.0.1
