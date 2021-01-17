import AdvancedSet from '../AdvancedSet';

const basicSet = new AdvancedSet(1, 3, 5, 7);

test('Intersection with an empty set', () => {
  const intersection = basicSet.intersection(new AdvancedSet());
  expect(intersection.toArray()).toEqual([]);
});

test('Intersection with the same set', () => {
  const intersection = basicSet.intersection(basicSet);
  expect(intersection.toArray()).toEqual(basicSet.toArray());
});

test('Intersection with different set - some shared elements', () => {
  const intersection = basicSet.intersection(new AdvancedSet(3, 5));
  expect(intersection.toArray()).toEqual([3, 5]);
});

test('Intersection with different set - no shared elements', () => {
  const intersection = basicSet.intersection(new AdvancedSet(0, 2, 4, 6, 8));
  expect(intersection.toArray()).toEqual([]);
});

test('Intersection of empty set with empty set', () => {
  expect(new AdvancedSet().intersection(new AdvancedSet()).toArray()).toEqual([]);
});

test('Intersection of three empty sets should be empty set', () => {
  expect(new AdvancedSet().intersection(new AdvancedSet(), new AdvancedSet()).equals(new AdvancedSet())).toBe(true);
});

test('Intersection with an empty set and two non empty sets should be empty set', () => {
  expect(new AdvancedSet().intersection(new AdvancedSet(1, 2), new AdvancedSet(3, 4)).equals(new AdvancedSet())).toBe(
    true,
  );
});

test('Intersection with multiple non empty sets should be the elements they share', () => {
  const setA = new AdvancedSet(1, 2, 3, 4);
  const setB = new AdvancedSet(0, 2, 3, 5, 6);
  const setC = new AdvancedSet(1, 2, 3, 4, 6);

  const expected = new AdvancedSet(2, 3);
  expect(setA.intersection(setB, setC).equals(expected)).toBe(true);
});
