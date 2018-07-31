import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  format: 'esm',
  plugins: [
    babel(),
  ],
  dest: 'dist/index.js',
};
