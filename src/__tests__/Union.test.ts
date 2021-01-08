import AdvancedSet from '../AdvancedSet';

test('An empty set union with another empty set should be an empty set', () => {
  expect(new AdvancedSet().union(new AdvancedSet()).toArray()).toMatchObject([]);
});

test('An empty set union with a non empty set should be that non empty set', () => {
  const empty = new AdvancedSet<number>();
  const nonEmpty = new AdvancedSet(5, 6, 10);
  expect(nonEmpty.union(empty).toArray()).toMatchObject([5, 6, 10]);
  // Reflexive property
  expect(empty.union(nonEmpty).toArray()).toMatchObject([5, 6, 10]);
});

test('A non empty set union with itself is itself', () => {
  const arr = ['foo', 'bar', 'baz'];
  const nonEmpty = new AdvancedSet(...arr);
  expect(nonEmpty.union(nonEmpty).toArray()).toMatchObject(arr);
});

test('If Set A and Set B have no shared components, then their union should be a set of all of their components', () => {
  const setA = new AdvancedSet(5, 0, 9);
  const setB = new AdvancedSet(10, 12, 13);
  expect(setA.union(setB).toArray().sort()).toMatchObject([0, 5, 9, 10, 12, 13].sort());
});

test('If Set A and Set B share some parts, their union should a set of their shared parts and their distinct parts', () => {
  const setA = new AdvancedSet(-100, 200, 1000);
  const setB = new AdvancedSet(-1000, 200, 100);
  expect(setA.union(setB).toArray().sort()).toMatchObject([-1000, -100, 100, 200, 1000].sort());
});

test('Set unions should be able to be chained', () => {
  const setA = new AdvancedSet(20, -1);
  const setB = new AdvancedSet(1, 30);
  const setC = new AdvancedSet(2, 40);
  expect(setA.union(setB).union(setC).toArray().sort()).toMatchObject([-1, 1, 2, 20, 30, 40].sort());
});
