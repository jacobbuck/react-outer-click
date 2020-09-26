import PropTypes from 'prop-types';
import * as React from 'react';
import { useRef } from 'react';
import useComposedRef from 'use-composed-ref';
import useOuterClick from './useOuterClick';

const OuterClick = React.forwardRef(function OuterClick(
  { as: Element, children, onOuterClick, ...rest },
  outerRef
) {
  const innerRef = useRef();
  const ref = useComposedRef(innerRef, outerRef);

  useOuterClick(innerRef, onOuterClick);

  return (
    <Element {...rest} ref={ref}>
      {children}
    </Element>
  );
});

OuterClick.defaultProps = {
  as: 'div',
  children: null,
};

if (process.env.NODE_ENV !== 'production') {
  OuterClick.propTypes = {
    as: PropTypes.elementType,
    children: PropTypes.node,
    onOuterClick: PropTypes.func.isRequired,
  };
}

export default OuterClick;
