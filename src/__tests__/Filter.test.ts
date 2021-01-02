import AdvancedSet from '../AdvancedSet';

test('Filter an empty set with any function should return an empty set', () => {
  expect(new AdvancedSet().filter(() => true).toArray()).toMatchObject([]);
});

test("Filter a non empty set with a 'true' function should return the same set", () => {
  expect(new AdvancedSet(1, 3, 5).filter(() => true).toArray()).toMatchObject([1, 3, 5]);
});

test("Filter a non empty set with a 'false' function should return an empty set", () => {
  expect(new AdvancedSet(1, 3, 5).filter(() => false).toArray()).toMatchObject([]);
});

test('Filter set of 1-10 for evens should return even numbers', () => {
  const evens = [2, 4, 6, 8, 10];
  expect(new AdvancedSet(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).filter((x) => x % 2 === 0).toArray()).toMatchObject(evens);
});

test('Filter on condition that nothing meets should return empty set', () => {
  expect(new AdvancedSet(2, 4, 5).filter((x) => x === 1).toArray()).toMatchObject([]);
});
