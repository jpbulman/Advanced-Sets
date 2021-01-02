import AdvancedSet from '../AdvancedSet';

// I think this is the case, but it'd be great if someone can verify it
test('Empty set is dijoint with itself', () => {
  expect(new AdvancedSet().isDisjointWith(new AdvancedSet())).toBe(true);
});

test('Empty set is disjoint with a non empty set', () => {
  expect(new AdvancedSet().isDisjointWith(new AdvancedSet('Disjoint'))).toBe(true);
});

test('Non empty set is disjoint with empty set', () => {
  expect(new AdvancedSet(4, 10, 20).isDisjointWith(new AdvancedSet())).toBe(true);
});

test('A non empty set is not disjoint with another empty set if they share some elements', () => {
  expect(new AdvancedSet(1, 2, 3).isDisjointWith(new AdvancedSet(3, 4, 5))).toBe(false);
});

test('A non empty set is disjoint with another set when they share no elements', () => {
  expect(new AdvancedSet(1, 5, 10).isDisjointWith(new AdvancedSet(11, 15, 110))).toBe(true);
});
