import AdvancedSet from '../AdvancedSet';

test('An empty set with a function that returns true should return false', () => {
  expect(new AdvancedSet().some((el) => true)).toBe(false);
});

test('A non empty set with a function returning false should return false', () => {
  const setA = new AdvancedSet(1, 5, 10);

  expect(setA.some(() => false)).toBe(false);
  expect(setA.some(() => true)).toBe(true);
});

test('A non empty set with a function no elements meet should return false', () => {
  const setA = new AdvancedSet('learning', 'to', 'fly');
  const lenOverTen = (a: string) => a.length > 10;

  expect(setA.some(lenOverTen)).toBe(false);
});

test('A non empty set with a function that some elements meet should return true', () => {
  const setA = new AdvancedSet('drive', 'my', 'car');
  const containsA = (x: string) => x.includes('a');

  expect(setA.some(containsA)).toBe(true);
});
