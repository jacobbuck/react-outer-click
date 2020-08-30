# Changelog

## Unreleased

### Changed

- Updated devDependencies.

## v3.3.1 - 2020-08-26

### Changed

- Updated devDependencies.

### Removed

- Removed defaultProps and propTypes definitions for `ref`.

### Fixed

- Fixed import of [use-composed-ref](https://www.npmjs.com/package/use-composed-ref).

## v3.3.0 - 2020-08-15

### Added

- Add ref forwarding to `OuterClick` component.

### Changed

- Bumped up version of [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) to v7.11.2.
- Updated devDependencies.

## v3.2.0 - 2020-07-10

### Added

- Added [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) for Babel helpers.

### Changed

- Updated devDependencies.

## v3.1.1 - 2020-07-09

### Changed

- Used [use-latest](https://www.npmjs.com/package/use-latest) for handling refs in `useOuterClick` hook.

## v3.1.0 - 2020-05-25

### Changed

- Updated `children` prop-type of `OuterClick` component to be optional.

## v3.0.1 - 2020-05-20

### Changed

- Enabled loose mode on '@babel/preset-env' to reduce build output.
- Updated devDependencies.

### Removed

- Removed dead code.

## v3.0.0 - 2020-04-27

## Added

- Added `as` prop to `OuterClick` component for rendering other elements.
- Added ES Module build.

### Changed

- Updated devDependencies.

### Removed

- **BREAKING** Removed `OuterClick` as default export.

## v2.2.0 - 2019-07-07

### Added

- Updated `useOuterClick` to now handle an array of refs.

## v2.1.1 - 2019-06-02

### Fixed

- Fixed React peerDependency version.

## v2.1.0 - 2019-06-02

### Added

- Additional props are now passed to wrapper div inside `OuterClick` component.

## v2.0.0 - 2019-06-02

### Added

- Added `useOuterClick` hook.
- Added listeners to touch events for better support on mobile browsers.

### Changed

- **BREAKING** Requires [react](https://www.npmjs.com/package/react) peerDependency to be v16.8.0 or newer.
- **BREAKING** `OuterClick` component renders a wrapper `div` element (instead of using [`findDOMNode()`](https://reactjs.org/docs/react-dom.html#finddomnode).)
- **BREAKING** Updated `children` prop-type of `OuterClick` component to be required.
- Bumped up version of [prop-types](https://www.npmjs.com/package/prop-types) to v15.7.2.
- Changed `OuterClick` component to be functional and use hooks internally.
- Updated devDependencies.

### Removed

- Removed [react-dom](https://www.npmjs.com/package/react-dom) peerDependency.

## v1.0.2 - 2019-06-02

### Changed

- Builds are now done with [Rollup](http://rollupjs.org).
- Updated devDependencies.

## v1.0.1 - 2017-08-21

### Changed

- Updated [react](https://www.npmjs.com/package/react) and [react-dom](https://www.npmjs.com/package/react-dom) peerDependencies to support React 16.

## v1.0.0 - 2017-07-14

Initial public version! :tada:
