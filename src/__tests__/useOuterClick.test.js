import { fireEvent, render } from '@testing-library/react';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import useOuterClick from '../useOuterClick';

const fireClickEvent = (element) =>
  [fireEvent.mouseDown, fireEvent.touchStart].forEach((fn) => fn(element));

const TestComponent = (props) => {
  const ref = useRef(null);
  useOuterClick(ref, props.handler);
  return (
    <div data-testid="parent">
      <div data-testid="sibling">Test</div>
      <div data-testid="target" ref={ref}>
        Hello <div data-testid="child">World</div>
      </div>
    </div>
  );
};

TestComponent.propTypes = {
  handler: PropTypes.func,
};

test('calls handler when element outside ref is clicked/touched', () => {
  const handler = jest.fn();
  const { getByTestId } = render(<TestComponent handler={handler} />);
  [getByTestId('parent'), getByTestId('sibling')].forEach(fireClickEvent);
  expect(handler).toHaveBeenCalledTimes(4);
});

test('doesn’t call handler when element ref is clicked/touched', () => {
  const handler = jest.fn();
  const { getByTestId } = render(<TestComponent handler={handler} />);
  fireClickEvent(getByTestId('target'));
  expect(handler).not.toHaveBeenCalled();
});

test('doesn’t call handler when element inside ref is clicked/touched', () => {
  const handler = jest.fn();
  const { getByTestId } = render(<TestComponent handler={handler} />);
  fireClickEvent(getByTestId('child'));
  expect(handler).not.toHaveBeenCalled();
});

test('doesn’t throw if handler is not set', () => {
  const { getByTestId } = render(<TestComponent handler={null} />);
  expect(() => fireClickEvent(getByTestId('child'))).not.toThrow();
});

test('throws TypeError if refs is not an array or object', () => {
  expect(() => useOuterClick('hello', () => {})).toThrow(
    new TypeError(
      'Expected `refs` to be of type `array` or `object`, but received type `string`'
    )
  );
});

test('throws TypeError if refs contains a value that is not a object', () => {
  expect(() => useOuterClick([{}, false], () => {})).toThrow(
    new TypeError(
      'Expected `refs[1]` to be of type `object`, but received type `boolean`'
    )
  );
});

test('throws TypeError if handler is not a function', () => {
  expect(() => useOuterClick({}, {})).toThrow(
    new TypeError(
      'Expected `handler` to be of type `function`, but received type `object`'
    )
  );
});

test.skip('doesn’t throw TypeError if handler is nullish', () => {
  expect(() => useOuterClick({}, null)).not.toThrow();
  expect(() => useOuterClick({}, undefined)).not.toThrow();
});

test('doesn’t typecheck in production', () => {
  const env = process.env;
  process.env = { NODE_ENV: 'production' };

  expect(() => useOuterClick('hello', () => {})).not.toThrow(
    new TypeError(
      'Expected `refs` to be of type `array` or `object`, but received type `string`'
    )
  );

  process.env = env;
});
