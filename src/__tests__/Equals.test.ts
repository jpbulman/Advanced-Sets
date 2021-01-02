import AdvancedSet from '../AdvancedSet';

test('An empty set should equal a different empty set', () => {
  expect(new AdvancedSet().equals(new AdvancedSet())).toBe(true);
});

test('An empty set should not equal a different non empty set', () => {
  expect(new AdvancedSet().equals(new AdvancedSet(1, 2))).toBe(false);
});

test('A non empty set should not equal an empty set', () => {
  expect(new AdvancedSet(4, 5).equals(new AdvancedSet())).toBe(false);
});

test('A non empty set with some different elements from another set should not be equal to the other set', () => {
  expect(new AdvancedSet(1, 7, 10).equals(new AdvancedSet(7, 20, 50))).toBe(false);
});

test('A subset and a superset should not be equal if they are different in size', () => {
  expect(new AdvancedSet(1, 2, 3).equals(new AdvancedSet(1, 2, 3, 4))).toBe(false);
});

test('A non empty set should be equal to a new set with the same elements', () => {
  expect(new AdvancedSet(0, -4, 30).equals(new AdvancedSet(30, -4, 0))).toBe(true);
});
