import AdvancedSet from '../AdvancedSet';

test('Mapping an empty set with any function should return an empty set', () => {
  expect(new AdvancedSet().map(() => 1).toArray()).toMatchObject([]);
});

test('Mapping a non empty set with a one to one function should return a set of the same length', () => {
  expect(new AdvancedSet(1, 2, 3).map((x) => x * 3).toArray()).toMatchObject([3, 6, 9]);
});

test('Mapping a non empty set with a function that creates duplicate entries should return a smaller set', () => {
  expect(new AdvancedSet(4, 10, 900).map(() => true).toArray()).toMatchObject([true]);
});

test('Mapping a non empty set with a function to create duplicate entries', () => {
  expect(
    new AdvancedSet('four', 'four', 'six').map((x: string) => (x === 'four' ? 'six' : x)).toArray(),
  ).toMatchObject(['six']);
});

test('Mapping a non empty set with type changes', () => {
  expect(
    new AdvancedSet('1', '40', '3')
      .map((x: string) => parseInt(x))
      .toArray()
      .sort(),
  ).toMatchObject([1, 40, 3].sort());
});
