import AdvancedSet from '../AdvancedSet';

test('An empty set using foreach with any function should *return* nothing', () => {
  expect(new AdvancedSet<number>().forEach((x) => x + 1)).toBe(undefined);
});

test('A non empty set using foreach with any function should *return* nothing', () => {
  expect(new AdvancedSet(1, 5, 10).forEach((a) => a + 1)).toBe(undefined);
});

test('An empty array incrementing an outside counter with foreach should not increase the counter', () => {
  let count = 0;
  expect(new AdvancedSet<number>().forEach((x) => (count += x))).toBe(undefined);
  expect(count).toBe(0);
});

test('A non empty array incrementing an outside counter with foreach should increase the counter', () => {
  let count = 0;
  const testSet = new AdvancedSet('300', '12', '4');
  const addString = (a: string) => (count += parseInt(a));
  expect(testSet.forEach(addString)).toBe(undefined);
  expect(count).toBe(316);
});
