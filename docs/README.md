# Advanced Sets

Advanced Sets is a TS/JS library that builds extra functionality on top of the standard `Set()`

## Basic Operations

```js
const setA = new AdvancedSet(1, 2, 4);
const setB = new AdvancedSet(2, 4, 6, 8);

setA.intersection(setB); // AdvancedSet(2, 4)
setA.union(setB); // AdvancedSet(1, 2, 4, 6, 8)
setA.toArray(); // [1, 2, 4]

const universal = new AdvancedSet('TS', 'Advanced', 'Sets');
const sub = universal.createSubset('TS');
const complement = sub.complement(); // AdvancedSet("Advanced", "Sets")

setA.filter((a) => a > 1); // AdvancedSet(2, 4)
setA.map((x) => x * 2); // AdvancedSet(2, 4, 8)

setA.add(5); // AdvancedSet(1, 2, 4, 5)
```

## Chaining Allows for easy Functional Programming

```js
const setA = new AdvancedSet(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const setB = new AdvancedSet(10, 100, 50);

setA
  .map((x) => x * 10)
  .intersection(setB)
  .filter((x) => x > 10)
  .union(new AdvancedSet(5))
  .reduce((acc, curr) => acc + curr); // 115
```
