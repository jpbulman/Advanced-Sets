import AdvancedSet from '../AdvancedSet';

test('Iterator should not execute if empty', () => {
  const initial = new AdvancedSet();
  let iters = 0;

  for (const item of initial) {
    iters++;
  }

  expect(iters).toBe(0);
});

test('Iterator should execute N times with N items', () => {
  let values = [100, 200, 300];

  const initial = new AdvancedSet(...values);
  
  let iters = 0;

  for (const item of initial) {
    iters++;
  }

  expect(iters).toBe(values.length);
});

test('Iterator should contain items in AdvancedSet', () => {
  let values = [100, 200, 300];

  const initial = new AdvancedSet(...values);

  let output = [];

  for (const item of initial) {
    output.push(item);
  }

  expect(new AdvancedSet(...initial).equals(new AdvancedSet(...output))).toBe(true);
});