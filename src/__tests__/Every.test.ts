import AdvancedSet from '../AdvancedSet';

test('Empty set with a function that returns true should return true', () => {
  expect(new AdvancedSet().every((a) => true)).toBe(true);
});

test('A non empty set with a function that returns false should return false', () => {
  expect(new AdvancedSet(6, 8, 3, 4).every((a) => false)).toBe(false);
});

test('A non empty set where not all elements pass the test should return false', () => {
  expect(new AdvancedSet(5, 10, 20, 30, -1).every((a) => a >= 0)).toBe(false);
});

test('A non empty set where all elements pass the test should return true', () => {
  expect(new AdvancedSet(20, 100, 10, 5000).every((x) => x % 10 === 0)).toBe(true);
});
