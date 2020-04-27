import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import useOuterClick from './useOuterClick';

export const OuterClick = (props) => {
  const { children, onOuterClick, ...restProps } = props;

  const ref = useRef();

  useOuterClick(ref, onOuterClick);

  return (
    <div {...restProps} ref={ref}>
      {children}
    </div>
  );
};

OuterClick.propTypes = {
  children: PropTypes.element.isRequired,
  onOuterClick: PropTypes.func.isRequired,
};

export default OuterClick;
