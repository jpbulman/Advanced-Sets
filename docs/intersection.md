# .intersection()

### Overview

Finds the elements that are shared between two sets.

`intersection(setB: AdvancedSet<T>): AdvancedSet<T>`

### Parameters

`setB` - The set to find the shared elements between the current set. Must be an AdvancedSet of the same **type**.

### Usage

```js
const setA = new AdvancedSet(1, 2, 3, 4, 5, 6);
const setB = new AdvancedSet(1, 2, 10, 20);

setA.intersection(setB); // AdvancedSet(1, 2)

const setC = new AdvancedSet(100, 200, 300);

setA.intersection(setC); // AdvancedSet()
```

### Details

Introduced in: 0.0.1

Last updated in: 0.0.1
