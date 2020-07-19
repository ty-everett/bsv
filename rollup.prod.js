import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import autoExternal from 'rollup-plugin-auto-external'

export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/bsv.js',
    format: 'umd',
    name: 'bsv'
  },
  plugins: [
    babel({
      babelrc: false
    }),
    autoExternal(),
    resolve({
      preferBuiltins: true,
      extensions: ['.js']
    })
  ]
}
