import { render } from '@testing-library/react';
import React from 'react';
import OuterClick from '../OuterClick';
import useOuterClick from '../useOuterClick';

jest.mock('../useOuterClick');

test('calls useOuterClick with ref and onOuterClick prop when rendered', () => {
  const handler = jest.fn();
  const { container } = render(<OuterClick onOuterClick={handler} />);
  expect(useOuterClick).toHaveBeenCalledWith(
    { current: container.firstChild },
    handler
  );
});

test('renders a div element with passed children and props', () => {
  const { container } = render(
    <OuterClick id="test" onOuterClick={() => {}} style={{ color: 'red' }}>
      Hello <strong>World!</strong>
    </OuterClick>
  );
  const { firstChild } = container;
  expect(firstChild.tagName).toBe('DIV');
  expect(container.firstChild).toHaveAttribute('id', 'test');
  expect(container.firstChild).toHaveStyle('color: red');
  expect(container.firstChild).toContainHTML('Hello <strong>World!</strong>');
});

test('renders element defined by `as` prop', () => {
  const { container } = render(
    <OuterClick as="span" onOuterClick={() => {}} />
  );
  expect(container.firstChild.tagName).toBe('SPAN');
});

test('renders component defined by `as` prop', () => {
  const TestComponent = React.forwardRef(function TestComponent(props, ref) {
    return <aside ref={ref} {...props} />;
  });
  const { container } = render(
    <OuterClick as={TestComponent} onOuterClick={() => {}} />
  );
  expect(container.firstChild.tagName).toBe('ASIDE');
});

test('forwards ref to rendered elment', () => {
  const ref = React.createRef();
  const { container } = render(
    <OuterClick onOuterClick={() => {}} ref={ref} />
  );
  expect(ref.current).toBe(container.firstChild);
});

test('forwards callback ref to rendered elment', () => {
  const ref = jest.fn();
  const { container } = render(
    <OuterClick onOuterClick={() => {}} ref={ref} />
  );
  expect(ref).toHaveBeenCalledWith(container.firstChild);
});
