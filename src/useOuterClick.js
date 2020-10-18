import { useEffect } from 'react';
import useLatest from 'use-latest';
import castArray from './castArray';

const useOuterClick = (refs, handler) => {
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
  }, []);
};

export default useOuterClick;
