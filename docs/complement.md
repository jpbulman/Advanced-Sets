# .complement()

### Overview

Finds all of the elements that are _not_ in the given subset. Can only be used if the set has a defined parent, which is done with [createSubset](createSubset.md).

`complement(): AdvancedSet<T> `

### Parameters

None

### Usage

```js
const universalSet = new AdvancedSet(1, 2, 3, 4, 5);
const evens = universalSet.createSubset(2, 4);

const odds = evens.complement(); // 1, 3, 5
```

### Details

Introduced in: 0.0.1

Last updated in: 0.0.1
