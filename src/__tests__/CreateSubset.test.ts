import AdvancedSet from '../AdvancedSet';

test('Create an empty subset from an empty universal set', () => {
  expect(new AdvancedSet().createSubset().toArray()).toMatchObject([]);
});

test('Create an empty subset from a non empty universal set', () => {
  expect(new AdvancedSet(3, 5, 6).createSubset().toArray()).toMatchObject([]);
});

test('Create a non empty subset from a non empty universal set', () => {
  expect(new AdvancedSet(10, 20, 30).createSubset(20).toArray()).toMatchObject([20]);
});

test('Try to create a subset with elements outside universal set', () => {
  const outlier = 10;
  expect(() => new AdvancedSet(2, 4, 6, 8).createSubset(outlier)).toThrow(
    new Error(`Element ${outlier} is not in the given universal set`),
  );
});
