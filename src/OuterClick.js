import PropTypes from 'prop-types';
import * as React from 'react';
import { useRef } from 'react';
import useComposedRef from 'use-composed-ref';
import useOuterClick from './useOuterClick';

const OuterClick = React.forwardRef(function OuterClick(
  { as: Element = 'div', children = null, onOuterClick = null, ...rest },
  userRef
) {
  const libRef = useRef();
  const ref = useComposedRef(libRef, userRef);
  useOuterClick(libRef, onOuterClick);
  return (
    <Element {...rest} ref={ref}>
      {children}
    </Element>
  );
});

OuterClick.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  onOuterClick: PropTypes.func,
};

export default OuterClick;
