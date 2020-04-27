import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import useOuterClick from './useOuterClick';

export const OuterClick = (props) => {
  const { as: Element, children, onOuterClick, ...restProps } = props;

  const ref = useRef();

  useOuterClick(ref, onOuterClick);

  return (
    <Element {...restProps} ref={ref}>
      {children}
    </Element>
  );
};

OuterClick.defaultProps = {
  as: 'div',
};

OuterClick.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.element.isRequired,
  onOuterClick: PropTypes.func.isRequired,
};

export default OuterClick;