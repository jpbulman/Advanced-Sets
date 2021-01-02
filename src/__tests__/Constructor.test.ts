import AdvancedSet from '../AdvancedSet';

test('An advanced set can take in duplicate values and record only unique entries', () => {
  expect(new AdvancedSet(1, 1, 1, 1).toArray()).toMatchObject([1]);
});

test('An advanced set can take in multiple different duplicate values and record only unique entries', () => {
  expect(new AdvancedSet(1, 2, 2, 3, 3, 3).toArray()).toMatchObject([1, 2, 3]);
});

test('An advanced set can take in no parameters and be an empty set', () => {
  expect(new AdvancedSet().toArray()).toMatchObject([]);
});
