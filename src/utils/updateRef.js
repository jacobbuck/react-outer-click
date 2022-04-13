const updateRef = (ref, value) => {
  if (typeof ref === 'function') {
    ref(value);
  }
  if (typeof ref === 'object' && ref !== null) {
    ref.current = value;
  }
};

export default updateRef;
