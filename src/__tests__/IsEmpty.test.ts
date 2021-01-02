import AdvancedSet from '../AdvancedSet';

test('An empty set should return true with isEmpty', () => {
  expect(new AdvancedSet().isEmpty()).toBe(true);
});

test('A non empty set should return false with isEmpty', () => {
  expect(new AdvancedSet(1, 3, 10).isEmpty()).toBe(false);
});
