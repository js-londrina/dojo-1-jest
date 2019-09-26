const read = require('../src/index').read;
const min = require('../src/index').min;
const max = require('../src/index').max;
const size = require('../src/index').size;
const med = require('../src/index').med;

test('expect input 6, 9, 15, -2, 92, 11 to read [6,9, 15, -2, 92, 11] ', () => {
  expect(read("6, 9, 15, -2, 92, 11")).toEqual([6, 9, 15, -2, 92, 11]);
});

test('expect valor minimo to be -2', () => {
  const arr = read("6, 9, 15, -2, 92, 11");
  expect(min(arr)).toBe(-2);
});

test('expect valor máximo to be 92', () => {
  const arr = read("6, 9, 15, -2, 92, 11");
  expect(max(arr)).toBe(92);
});

test('expect numeros elementos to be 6', () => {
  const arr = read("6, 9, 15, -2, 92, 11");
  expect(size(arr)).toBe(6);
});

test('expect media to be 21.833333333333332', () => {
  const arr = read("6, 9, 15, -2, 92, 11");
  expect(med(arr)).toBe(21.833333333333332);
});