import AdvancedSet from '../AdvancedSet';

test('Empty set to array', () => {
  expect(new AdvancedSet().toArray()).toMatchObject([]);
});

test('Non empty set to array', () => {
  expect(new AdvancedSet(1, 7, 18).toArray().sort()).toMatchObject([1, 7, 18].sort());
});
