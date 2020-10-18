import { useEffect } from 'react';
import useLatest from 'use-latest';
import castArray from './castArray';

const useOuterClick = (refs, handler) => {
  if (process.env.NODE_ENV !== 'production') {
    if (Array.isArray(refs)) {
      refs.forEach((ref, i) => {
        if (typeof refs !== 'object') {
          throw new TypeError(
            `Expected \`refs[${i}]\` to be of type \`object\`, but received type \`${typeof ref}\``
          );
        }
      });
    } else if (typeof refs !== 'object') {
      throw new TypeError(
        `Expected \`refs\` to be of type \`array\` or \`object\`, but received type \`${typeof handler}\``
      );
    }
    if (typeof handler !== 'function' && handler != null) {
      throw new TypeError(
        `Expected \`handler\` to be of type \`function\`, but received type \`${typeof handler}\``
      );
    }
  }

  const refsRef = useLatest(refs);
  const handerRef = useLatest(handler);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        castArray(refsRef.current).every(
          (ref) =>
            ref.current &&
            ref.current !== event.target &&
            !ref.current.contains(event.target)
        ) &&
        handerRef.current != null
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useOuterClick;
