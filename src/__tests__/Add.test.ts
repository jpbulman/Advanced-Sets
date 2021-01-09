import AdvancedSet from '../AdvancedSet';

test('Add nothing to empty set should be empty set', () => {
  expect(new AdvancedSet().add().toArray()).toMatchObject([]);
});

test('Empty set adding a value should be a set with just that value', () => {
  expect(new AdvancedSet().add(1).toArray()).toMatchObject([1]);
});

test('Non emtpy set adding a value should be the set with the new value', () => {
  expect(new AdvancedSet(2, 3).add(1).toArray().sort()).toMatchObject([1, 2, 3].sort());
});

test('Non empty set adding nothing should be just that set', () => {
  expect(new AdvancedSet(4, 5).add().toArray().sort()).toMatchObject([4, 5].sort());
});

test('Advanced sets should allow for multiple items to be added at the same time', () => {
  expect(new AdvancedSet(2, 3, 5).add(1, 4).toArray().sort()).toMatchObject([1, 2, 3, 4, 5].sort());
});
