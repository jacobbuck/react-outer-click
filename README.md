# react-outer-click

React component and hook which detect mouse clicks outside of an element.

## Usage

### `useOuterClick` Hook (recommended)

```jsx
useOuterClick(refs, handler);
```

#### Parameters

- `refs` a single [ref](https://reactjs.org/docs/hooks-reference.html#useref) or array of refs to not be handled the user has clicked
- `handler` callback function to be called when the user has clicked

#### Example

```jsx
import { useOuterClick } from 'react-outer-click';

const Example = (props) => {
  const el = useRef(null);

  useOuterClick(el, (event) => {
    event.preventDefault();
    console.log('Clicked outside');
  });

  return <div ref={el}>Example</div>;
};
```

### `OuterClick` Component

```jsx
<OuterClick onOuterClick={}></OuterClick>
```

#### Props

- `children` elements that will not be handled when clicked
- `onOuterClick` callback function to be called when the user has clicked

#### Example

```jsx
import { OuterClick } from 'react-outer-click';

const Example = (props) => {
  return (
    <OuterClick
      onOuterClick={() => {
        event.preventDefault();
        console.log('Clicked outside');
      }}
    >
      Example
    </OuterClick>
  );
};
```

> :warning: Previous versions of react-outer-click allowed `OuterClick` to be imported as default export. This is no longer supported and has been removed.

:information_source: The `OuterClick` component will wrap your children with a `<div>` element, and any additional props will be passed down. You can change the element rendered with the `as` prop:

```jsx
  ...
  <OuterClick as="span" onOuterClick={...}>
    Example
  </OuterClick>
  ...
```

## Requirements

Requires a minimum of React version 16.8.0. If you're on an older version of React, then checkout [v1](https://github.com/jacobbuck/react-outer-click/tree/v1).
