import AdvancedSet from '../AdvancedSet';

test('The empty set is a super set of the empty set', () => {
  expect(new AdvancedSet().isSupersetOf(new AdvancedSet())).toBe(true);
});

test('The empty set is not a super set of any non empty set', () => {
  expect(new AdvancedSet().isSupersetOf(new AdvancedSet(12))).toBe(false);
});

test('Any non empty set is a super set of the empty set', () => {
  expect(new AdvancedSet(3, 91, 3, 5).isSupersetOf(new AdvancedSet())).toBe(true);
});

test('A non empty set is not a super set of a non empty set where no elements are shared', () => {
  const setA = new AdvancedSet('Planes', 'Trains', 'Automobiles');
  const setB = new AdvancedSet('1987', 'John', 'Hughes');
  expect(setA.isSupersetOf(setB)).toBe(false);
});

test('A non empty set is not a super set of a non empty set where some, but not all, elements of the first set are in the second set', () => {
  const setA = new AdvancedSet(-3, 1, 4, 1);
  const setB = new AdvancedSet(3, 1, 4, 1, 5);
  expect(setB.isSupersetOf(setA)).toBe(false);
});

test('A non empty set is a super set of a non empty set where all of the elements in the second set are in the first set', () => {
  const setA = new AdvancedSet('Sheep', 'Wood', 'Rock');
  const setB = new AdvancedSet('Sheep', 'Wood', 'Wheat', 'Rock', 'Brick');
  expect(setB.isSupersetOf(setA)).toBe(true);
});

test('A non empty set is a super set of itself', () => {
  const setA = new AdvancedSet('Rocket', 'Man');
  expect(setA.isSupersetOf(setA)).toBe(true);
});
