import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useComposedRef } from 'use-composed-ref';
import useOuterClick from './useOuterClick';

const OuterClick = React.forwardRef((props, outerRef) => {
  const { as: Element, children, onOuterClick, ...rest } = props;

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

OuterClick.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  onOuterClick: PropTypes.func.isRequired,
};

export default OuterClick;
