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
