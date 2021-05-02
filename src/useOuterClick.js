import { useEffect, useRef } from 'react';
import invariant from 'tiny-invariant';
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
    typeof handler === 'function' || handler == null,
    'Expected `handler` to be a function'
  );

  const eventListenerRef = useRef();

  useEffect(() => {
    eventListenerRef.current = (event) => {
      if (
        castArray(refs).every(
          (ref) =>
            ref.current &&
            ref.current !== event.target &&
            !ref.current.contains(event.target)
        )
      ) {
        handler?.(event);
      }
    };
  }, [handler, refs]);

  useEffect(() => {
    const eventListener = (event) => {
      eventListenerRef.current(event);
    };
    ['mousedown', 'touchstart'].forEach((type) => {
      document.addEventListener(type, eventListener, true);
    });
    return () => {
      ['mousedown', 'touchstart'].forEach((type) => {
        document.removeEventListener(type, eventListener, true);
      });
    };
  }, []);
};

export default useOuterClick;
