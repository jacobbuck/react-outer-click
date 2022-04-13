import isObject from './isObject';

const updateRef = (ref, value) => {
  if (typeof ref === 'function') {
    ref(value);
  }
  if (isObject(ref)) {
    ref.current = value;
  }
};

export default updateRef;
