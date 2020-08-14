import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    { file: 'lib/index.cjs.js', format: 'cjs' },
    { file: 'lib/index.esm.js', format: 'esm' },
  ],
  external: [
    /@babel\/runtime/,
    'prop-types',
    'react',
    'use-composed-ref',
    'use-latest',
  ],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      plugins: ['@babel/plugin-transform-runtime'],
    }),
  ],
};
