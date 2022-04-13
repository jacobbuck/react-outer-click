import * as React from 'react';
import updateRef from '../updateRef';

test('handles function refs', () => {
  const ref = jest.fn();
  const value = { foo: 'bar' };
  updateRef(ref, value);
  expect(ref).toHaveBeenCalledWith(value);
});

test('handles object refs', () => {
  const ref = React.createRef();
  const value = { foo: 'bar' };
  updateRef(ref, value);
  expect(ref).toHaveProperty('current', value);
});

test('doesn’t throw when passed an invalid ref', () => {
  expect(() => {
    const value = { foo: 'bar' };
    updateRef(null, value);
    updateRef(true, value);
    updateRef('ref', value);
  }).not.toThrow();
});
