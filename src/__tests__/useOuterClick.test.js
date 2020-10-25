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

test('throws when handler is not a function', () => {
  expect(() => useOuterClick([], { hello: 'world' })).toThrow();
});

test('uses default handler when not set', () => {
  const { getByTestId } = render(<TestComponent />);
  expect(() => fireClickEvent(getByTestId('parent'))).not.toThrow();
});

test('calls handler when element outside ref is clicked/touched', () => {
  const handler = jest.fn();
  const { getByTestId } = render(<TestComponent handler={handler} />);
  [getByTestId('parent'), getByTestId('sibling')].forEach(fireClickEvent);
  expect(handler).toHaveBeenCalledTimes(4);
});

test('does not call handler when element ref is clicked/touched', () => {
  const handler = jest.fn();
  const { getByTestId } = render(<TestComponent handler={handler} />);
  fireClickEvent(getByTestId('target'));
  expect(handler).toHaveBeenCalledTimes(0);
});

test('does not call handler when element inside ref is clicked/touched', () => {
  const handler = jest.fn();
  const { getByTestId } = render(<TestComponent handler={handler} />);
  fireClickEvent(getByTestId('child'));
  expect(handler).toHaveBeenCalledTimes(0);
});
