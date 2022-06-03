import { sum } from '../sum';

test('add two numbers together', () => {
  expect(sum(1, 1).toBe(2));
  expect(sum(-100, 200).toBe(100));
});

test('throws an error if arguments are not numbers', () => {
  expect(() => sum(1, '2')).toThrow('pass only numbers!');
});
