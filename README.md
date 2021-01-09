# Advanced Sets

A JS/TS library that builds extra functionality on top of the standard `Set()`

```ts
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

## Installation

```
npm i advanced-sets
```

## Documentation

https://jpbulman.github.io/Advanced-Sets/

## Local Setup

First, clone the repository and cd into the folder. Then, install all of the dependencies with

```
npm install
```

Run the test suite with

```
npm test
```
