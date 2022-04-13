import isObject from '../isObject';

test('returns true if passed an object', () => {
  expect(isObject({})).toBe(true);
  expect(isObject([])).toBe(true);
});

test('returns false if not passed an object', () => {
  expect(isObject()).toBe(false);
  expect(isObject(null)).toBe(false);
  expect(isObject('object')).toBe(false);
});
