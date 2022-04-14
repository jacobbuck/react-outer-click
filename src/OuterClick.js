import PropTypes from 'prop-types';
import { createElement, forwardRef, useCallback, useRef } from 'react';
import updateRef from './utils/updateRef';
import useOuterClick from './useOuterClick';

const OuterClick = forwardRef(
  ({ as = 'div', children = null, onOuterClick, ...props }, userRef) => {
    const libRef = useRef(null);

    useOuterClick(libRef, onOuterClick);

    const ref = useCallback(
      (value) => {
        libRef.current = value;
        updateRef(userRef, value);
      },
      [userRef]
    );

    return createElement(as, { ...props, ref }, children);
  }
);

OuterClick.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  onOuterClick: PropTypes.func,
};

export default OuterClick;
