import babel from 'rollup-plugin-babel';

export default {
  input: 'src/OuterClick.js',
  output: {
    file: 'lib/OuterClick.js',
    format: 'cjs',
  },
  external: ['prop-types', 'react', 'react-dom'],
  plugins: [babel()],
};
