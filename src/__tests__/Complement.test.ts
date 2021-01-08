import AdvancedSet from '../AdvancedSet';

const universal = new AdvancedSet(5, 10, 15, 20);

test('Complement of empty set is universal set', () => {
  const empty = universal.createSubset();
  expect(empty.complement().toArray()).toMatchObject(universal.toArray());
});

test('Complement of universal set is empty set', () => {
  expect(universal.complement().toArray()).toMatchObject([]);
});

test('Complement of subset should be other components of universal set', () => {
  const subset = universal.createSubset(10, 15);
  expect(subset.complement().toArray()).toMatchObject([5, 20]);
});

test('Complement of empty universal set is empty set', () => {
  expect(new AdvancedSet().createSubset().complement().toArray()).toMatchObject([]);
});
