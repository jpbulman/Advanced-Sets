import AdvancedSet from '../AdvancedSet';

const sum = (acc: number, curr: number) => acc + curr;

test('Reduce with an empty set and an empty function should return 0', () => {
  expect(new AdvancedSet().reduce(() => 1, 0)).toBe(0);
});

test('Reduce with an empty set and an add funciton should return 0', () => {
  expect(new AdvancedSet<number>().reduce(sum, 0)).toBe(0);
});

test('Reduce with an empty set and a sum function with a different inital value should return the initial value', () => {
  expect(new AdvancedSet<number>().reduce(sum, 5)).toBe(5);
});

test('Reduce with a non empty set, but with an empty function should return 0', () => {
  expect(new AdvancedSet(4, 5, 10).reduce(() => 0, 0)).toBe(0);
});

test('Reduce with a non empty set and a sum function should return the sum of the set', () => {
  expect(new AdvancedSet(2, 4, 8, -1).reduce(sum, 0)).toBe(13);
});

test('Reduce with a non empty set and a sum functinon with a non zero starting value should return the sum plus the initial value', () => {
  expect(new AdvancedSet(10, 20, 30).reduce(sum, 5)).toBe(65);
});

test('Reduce with changing types', () => {
  expect(new AdvancedSet('234', '-1', '20').reduce((acc: number, currVal: string) => acc + parseInt(currVal), 0)).toBe(
    253,
  );
});
