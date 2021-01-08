# .createSubset()

### Overview

Create a child set branching off of the current set. Allows for a set to use [complement](complement.md), as it now has a parent set.

`createSubset(...initialValues: T[] | never): AdvancedSet<T>`

### Parameters

`initialValues` - Variable list of items from the set that are to become the subset. Can also be nothing to create an empty subset. Throws an **error** if an element in `initialValues` is not in the parent/universal set.

### Usage

```js
const universalSet = new AdvancedSet(10, 100, 200, 1000);

const powersOfTen = universalSet.createSubset(10, 100, 1000); // AdvancedSet(10, 100, 1000)

const multiplesOfTwo = universalSet.createSubset(2, 200); // Error - 2 is not part of the universal/parent set
```

### Details

Introduced in: 0.0.1

Last updated in: 0.0.1
