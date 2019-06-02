import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

export const useOuterClick = (ref, handler) => {
  const handerRef = useRef(handler);

  useEffect(() => {
    handerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        handerRef.current &&
        ref.current &&
        ref.current !== event.target &&
        !ref.current.contains(event.target)
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
  }, [ref]);
};

export const OuterClick = props => {
  const { children, onOuterClick } = props;

  const ref = useRef();

  useOuterClick(ref, onOuterClick);

  return <div ref={ref}>{children}</div>;
};

OuterClick.propTypes = {
  children: PropTypes.element.isRequired,
  onOuterClick: PropTypes.func.isRequired,
};

export default OuterClick;
