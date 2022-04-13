import PropTypes from 'prop-types';
import { forwardRef, useEffect, useRef } from 'react';
import updateRef from './updateRef';
import useOuterClick from './useOuterClick';

const OuterClick = forwardRef(function OuterClick(
  { as: Element = 'div', children = null, onOuterClick = null, ...rest },
  userRef
) {
  const libRef = useRef(null);

  useEffect(() => {
    updateRef(userRef, libRef.current);
    return () => {
      updateRef(userRef, null);
    };
  });

  useOuterClick(libRef, onOuterClick);

  return (
    <Element {...rest} ref={libRef}>
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
