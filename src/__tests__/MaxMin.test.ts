import AdvancedSet from '../AdvancedSet';

test('Return the max value in the array', () => {
    expect(new AdvancedSet(1, 3, 5).maxValue()).toBe(5);
});


test('Return the min value in the array', () => {
    expect(new AdvancedSet(1, 3, 5).maxValue()).toBe(5);
});

test('pass array of nulls', () => {
    expect(new AdvancedSet(null, null, null).maxValue()).toBe(0);
})