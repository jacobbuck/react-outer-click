# react-outer-click

React component which detect mouse clicks outside of itself.

## Usage

### `useOuterClick` Hook (recommended)

```jsx
import { useOuterClick } from 'react-outer-click';

const Example = props => {
  const el = useRef(null);

  useOuterClick(el, () => {
    console.log('Clicked outside');
  });

  return <div ref={el}>Example</div>;
};
```

### `OuterClick` Component

```jsx
import { OuterClick } from 'react-outer-click';

const Example = props => {
  return (
    <OuterClick
      onOuterClick={() => {
        console.log('Clicked outside');
      }}
    >
      Example
    </OuterClick>
  );
};
```

## Requirements

Requires a minimum of React version 16.8.0. If you're on an older version of React, then checkout [v1](https://github.com/jacobbuck/react-outer-click/tree/v1).
