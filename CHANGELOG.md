# Changelog

## v3.7.0 - 2021-05-02

### Added

- Added check to ensure `refs` parameter is not empty if an array.

## Changed

- Updated [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) dependency to v7.14.0.

### Fixed

- Fixed a bug where `handler` parameter and `onOuterClick` prop would never be called if one or more refs aren't defined.

### Removed

- Removed [use-latest](https://www.npmjs.com/package/use-latest) dependency.

## v3.6.0 - 2021-04-27

### Added

- Added [tiny-invariant](https://www.npmjs.com/package/tiny-invariant) dependency.

### Changed

- Changed type checking in `useOuterClick` hook to use `invariant` function from [tiny-invariant](https://www.npmjs.com/package/tiny-invariant).
- Updated [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) dependency to v7.13.17.

## v3.5.0 - 2020-11-19

### Added

- Added source maps to build output.

### Changed

- Updated [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) dependency to v7.12.5.
- Updated [use-composed-ref](https://www.npmjs.com/package/use-composed-ref) dependency to v1.1.0.
- Updated [use-latest](https://www.npmjs.com/package/use-latest) dependency to v1.2.0.

## v3.4.1 - 2020-10-26

### Changed

- Updated [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) dependency to v7.12.1.

## v3.4.0 - 2020-10-25

### Added

- Added type checking of `refs` parameter in `useOuterClick` hook.

### Changed

- Updated `handler` parameter of `useOuterClick` hook to allow `null`.
- Updated `propTypes` to only be defined in non-production environments.
- Updated React import to avoid using default import.

### Removed

- Removed `defaultProps` in favour of default values in object destructuring.

## v3.3.1 - 2020-08-26

### Removed

- Removed defaultProps and propTypes definitions for `ref`.

### Fixed

- Fixed import of [use-composed-ref](https://www.npmjs.com/package/use-composed-ref).

## v3.3.0 - 2020-08-15

### Added

- Add ref forwarding to `OuterClick` component.

### Changed

- Updated [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) dependency to v7.11.2.

## v3.2.0 - 2020-07-10

### Added

- Added [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) dependency for Babel helpers.

## v3.1.1 - 2020-07-09

### Added

- Added [use-latest](https://www.npmjs.com/package/use-latest) dependency.

## v3.1.0 - 2020-05-25

### Changed

- Updated `children` prop-type of `OuterClick` component to be optional.

## v3.0.1 - 2020-05-20

### Changed

- Enabled loose mode on '@babel/preset-env' to reduce build output.

### Removed

- Removed dead code.

## v3.0.0 - 2020-04-27

### Added

- Added `as` prop to `OuterClick` component for rendering other elements.
- Added ES Module build.

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

- Added listeners to touch events for better support on mobile browsers.
- Added `useOuterClick` hook.

### Changed

- **BREAKING** Requires [react](https://www.npmjs.com/package/react) peerDependency to be v16.8.0 or newer.
- **BREAKING** `OuterClick` component renders a wrapper `div` element (instead of using [`findDOMNode()`](https://reactjs.org/docs/react-dom.html#finddomnode).)
- **BREAKING** Updated `children` prop-type of `OuterClick` component to be required.
- Changed `OuterClick` component to be functional and use hooks internally.
- Updated [prop-types](https://www.npmjs.com/package/prop-types) dependency to v15.7.2.

### Removed

- Removed [react-dom](https://www.npmjs.com/package/react-dom) peerDependency.

## v1.0.2 - 2019-06-02

### Changed

- Builds are now done with [Rollup](http://rollupjs.org).

## v1.0.1 - 2017-08-21

### Changed

- Updated [react](https://www.npmjs.com/package/react) and [react-dom](https://www.npmjs.com/package/react-dom) peerDependencies to support React 16.

## v1.0.0 - 2017-07-14

Initial public version! :tada:
