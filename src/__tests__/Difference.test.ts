import AdvancedSet from '../AdvancedSet';

test('Difference of an empty set with an empty set should be an empty set', () => {
  expect(new AdvancedSet().difference(new AdvancedSet()).isEmpty()).toBe(true);
});

test('Difference of an empty set with a non empty set should be an empty set', () => {
  expect(new AdvancedSet().difference(new AdvancedSet()).isEmpty()).toBe(true);
});

test('Difference of a non empty set with an empty set should be the non empty set', () => {
  const setA = new AdvancedSet(8, 6, 7, 5);
  expect(setA.difference(new AdvancedSet()).toArray()).toMatchObject(setA.toArray());
});

test('Differnce of a non empty set with itself should be empty', () => {
  const setA = new AdvancedSet(4, 9, 10);
  expect(setA.difference(setA).isEmpty()).toBe(true);
});

test('Difference of two different sets should be the items that are in the first, without the items in both', () => {
  const setA = new AdvancedSet(1, 2, 3);
  const setB = new AdvancedSet(2, 4, 5, 6);
  expect(setA.difference(setB).toArray().sort()).toMatchObject([1, 3].sort());
  expect(setB.difference(setA).toArray().sort()).toMatchObject([4, 5, 6].sort());
});
