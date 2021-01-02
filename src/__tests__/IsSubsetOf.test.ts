import AdvancedSet from '../AdvancedSet';

test('The empty set is a subset of the empty set', () => {
  expect(new AdvancedSet().isSubsetOf(new AdvancedSet())).toBe(true);
});

test('The empty set is a subset of a non empty set', () => {
  expect(new AdvancedSet().isSubsetOf(new AdvancedSet(10))).toBe(true);
});

test('A non empty set is not a subset of an empty set', () => {
  expect(new AdvancedSet('US', 'ET', 'GB').isSubsetOf(new AdvancedSet())).toBe(false);
});

test('A non empty set is not a subset of a non empty set when they share no elements', () => {
  expect(new AdvancedSet('all', 'your', 'base').isSubsetOf(new AdvancedSet('belong', 'to', 'us'))).toBe(false);
});

test('A non empty set should not be a subset of a non emtpy set where they share some elements, but the first set has elements the latter set', () => {
  const setA = new AdvancedSet(2, 4, 6);
  const setB = new AdvancedSet(1, 2, 3, 4, 5);
  expect(setA.isSubsetOf(setB)).toBe(false);
});

test("A non empty set should be a subset of a non empty set where all of the first set's elements are in the second set", () => {
  const setA = new AdvancedSet('For', 'Once');
  const setB = new AdvancedSet('For', 'I', 'In', 'Once');
  expect(setA.isSubsetOf(setB)).toBe(true);
});

test('A non empty subset is a subset of itself', () => {
  const setA = new AdvancedSet(1, 4, 6);
  expect(setA.isSubsetOf(setA)).toBe(true);
});
