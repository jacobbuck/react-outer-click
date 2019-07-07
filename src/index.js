import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import castArray from './castArray';

export const useOuterClick = (refs, handler = () => {}) => {
  if (process.env.NODE_ENV !== 'production' && typeof handler !== 'function') {
    throw new TypeError(
      `Expected "handler" to be a function, not ${typeof handler}.`
    );
  }

  const refsRef = useRef(refs);
  const handerRef = useRef(handler);

  useEffect(() => {
    refsRef.current = refs;
    handerRef.current = handler;
  }, [refs, handler]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        castArray(refsRef.current).every(
          ref =>
            ref.current &&
            ref.current !== event.target &&
            !ref.current.contains(event.target)
        )
      ) {
        handerRef.current(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside, true);
    document.addEventListener('touchstart', handleClickOutside, true);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.removeEventListener('touchstart', handleClickOutside, true);
    };
  }, []);
};

export const OuterClick = props => {
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
