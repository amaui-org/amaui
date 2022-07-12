import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import nodeGlobals from 'rollup-plugin-node-globals';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import json from '@rollup/plugin-json';

const wd = process.cwd();
const env = process.env.ENV;
const variant = process.env.VARIANT;

let ext = 'ts';

if (['react', 'vue'].indexOf(env) > -1) ext = 'tsx';

const inputRelative = `./src/index.${ext}`;
const input = path.resolve(wd, inputRelative);
const module = path.basename(wd);

const globals = {
  react: 'React',
  vue: 'Vue',
};
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const options = {
  babel: {
    exclude: /node_modules/,
    babelHelpers: 'runtime',
    extensions,
    configFile: path.resolve(wd, '../../babel.config.js'),
  },
  resolve: {
    preferBuiltins: false,
    extensions,
  },
  commonjs: {
    ignoreGlobal: true,
    include: /node_modules/,
    sourceMap: false
  },
};

const plugins = [
  resolve(options.resolve),
  babel(options.babel),
  commonjs(options.commonjs),
  nodeGlobals({
    buffer: false,
  }),
  json({ compact: true })
];

function onwarn(warning) {
  if (['THIS_IS_UNDEFINED', 'MISSING_NODE_BUILTINS', 'CIRCULAR_DEPENDENCY'].indexOf(warning.code) > -1) return;

  console.warn(warning);

  throw Error(warning.message);
}

const capitalize = value => `${value[0].toUpperCase()}${value.slice(1).toLowerCase()}`;

const name = module.split('-').map(item => capitalize(item)).join('');

const other = {};

if (variant === 'icons') other['sourcemap'] = false;

export default [
  {
    input,
    onwarn,
    output: {
      file: `build/umd/${module}.dev.js`,
      format: 'umd',
      name,
      globals,
      ...other
    },
    external: Object.keys(globals),
    plugins: [
      ...plugins,
      replace({ preventAssignment: true, 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
  },
  {
    input,
    onwarn,
    output: {
      file: `build/umd/${module}.prod.min.js`,
      format: 'umd',
      name,
      globals,
      ...other
    },
    external: Object.keys(globals),
    plugins: [
      ...plugins,
      replace({ preventAssignment: true, 'process.env.NODE_ENV': JSON.stringify('production') }),
      terser(),
      sizeSnapshot({ snapshotPath: path.resolve(wd, 'size-snapshot.json') }),
    ],
  },
];
