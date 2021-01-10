import AdvancedSet from './AdvancedSet';

test('Minimum of empty set should be undefined', () => {
  expect(new AdvancedSet().min()).toBe(undefined);
});

test('Minimum of non empty set of non-number type should be undefined', () => {
  expect(new AdvancedSet('test', 'sets').min()).toBe(undefined);
});

test('Minimum of number set should be the smallest in the set', () => {
  expect(new AdvancedSet(1, 2, 3, 0, -5).min()).toBe(-5);
});

test('Minimum should change after adding to the set', () => {
  const set = new AdvancedSet(1, 3, 5, 9, 10);
  expect(set.min()).toBe(1);
  set.add(20, 1, -20);
  expect(set.min()).toBe(-20);
});
