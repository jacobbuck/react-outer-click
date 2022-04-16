/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import useOuterClick from '../useOuterClick';

const fireClickEvent = (element) =>
  [fireEvent.mouseDown, fireEvent.touchStart].forEach((fn) => fn(element));

const TestComponent = (props) => {
  const emptyRef = useRef(null);
  const targetRef = useRef(null);
  useOuterClick([emptyRef, targetRef], props.handler);
  return (
    <div data-testid="parent">
      <div data-testid="sibling">Test</div>
      <div data-testid="target" ref={targetRef}>
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
  render(<TestComponent handler={handler} />);
  [screen.getByTestId('parent'), screen.getByTestId('sibling')].forEach(
    fireClickEvent
  );
  expect(handler).toHaveBeenCalledTimes(4);
});

test('doesn’t call handler when element ref is clicked/touched', () => {
  const handler = jest.fn();
  render(<TestComponent handler={handler} />);
  fireClickEvent(screen.getByTestId('target'));
  expect(handler).not.toHaveBeenCalled();
});

test('doesn’t call handler when element inside ref is clicked/touched', () => {
  const handler = jest.fn();
  render(<TestComponent handler={handler} />);
  fireClickEvent(screen.getByTestId('child'));
  expect(handler).not.toHaveBeenCalled();
});

test('doesn’t throw if handler is not set', () => {
  render(<TestComponent handler={null} />);
  expect(() => fireClickEvent(screen.getByTestId('child'))).not.toThrow();
});

test('throws if refs is not an array or object', () => {
  expect(() => useOuterClick('hello', jest.fn())).toThrow(
    new Error('Invariant failed: Expected `refs` to be an array or object')
  );
});

test('throws if refs contains a value that is not a object', () => {
  expect(() => useOuterClick([{}, false], jest.fn())).toThrow(
    new Error('Invariant failed: Expected `refs[1]` to be an object')
  );
});

test('throws if handler is not a function', () => {
  expect(() => useOuterClick({}, {})).toThrow(
    new Error('Invariant failed: Expected `handler` to be a function')
  );
});
