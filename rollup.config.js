import { nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import url from '@rollup/plugin-url'
import css from 'rollup-plugin-import-css'
import external from 'rollup-plugin-node-externals'
import cleanup from 'rollup-plugin-cleanup'

const packageJson = require('./package.json')

const config =  [
  {
    input: 'src/lib/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      external(),
      nodeResolve(),
      commonjs(),
      typescript(),
      terser(),
      url(),
      css(),
      cleanup()
    ],
    external: ['react', 'react-dom', 'styled-components'],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()],
  },
]

export default config