import AdvancedSet from '../AdvancedSet';

test('Create an empty subset from an empty universal set', () => {
  expect(new AdvancedSet().createSubSet().toArray()).toMatchObject([]);
});

test('Create an empty subset from a non empty universal set', () => {
  expect(new AdvancedSet(3, 5, 6).createSubSet().toArray()).toMatchObject([]);
});

test('Create a non empty subset from a non empty universal set', () => {
  expect(new AdvancedSet(10, 20, 30).createSubSet(10).toArray()).toMatchObject([10]);
});

test('Try to create a subset with elements outside universal set', () => {
  const outlier = 10;
  expect(() => new AdvancedSet(2, 4, 6, 8).createSubSet(outlier)).toThrow(
    new Error(`Element ${outlier} is not in the given universal set`),
  );
});
