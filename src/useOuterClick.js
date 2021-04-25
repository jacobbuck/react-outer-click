import { useEffect } from 'react';
import invariant from 'tiny-invariant';
import useLatest from 'use-latest';
import castArray from './castArray';

const useOuterClick = (refs, handler) => {
  invariant(
    Array.isArray(refs) || (typeof refs === 'object' && refs !== null),
    'Expected `refs` to be an array or object'
  );
  if (Array.isArray(refs)) {
    refs.forEach((ref, i) => {
      invariant(
        typeof ref === 'object' && ref !== null,
        `Expected \`refs[${i}]\` to be an object`
      );
    });
  }
  invariant(
    typeof handler !== 'function' || handler == null,
    'Expected `handler` to be a function'
  );

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
