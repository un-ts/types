import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

import pkg from './package.json'

const ENV = process.env.ENV || 'client'
const NODE_ENV = process.env.NODE_ENV || 'development'

const isServer = ENV === 'server'
const isProd = NODE_ENV === 'production'

const config = {
  input: 'lib/vue-qrious',
  output: {
    amd: {
      id: 'vue-qrious',
    },
    banner: `/*!
 * ${pkg.name} ${pkg.description}
 * Version ${pkg.version}
 * Copyright (C) 2017 JounQin <admin@1stg.me>
 * Released under the MIT license
 *
 * Github: https://github.com/JounQin/vue-qrious
 */`,
    file: `dist/vue-qrious${isServer ? '' : '.browser'}${
      isProd ? '.min' : ''
    }.js`,
    format: 'umd',
    name: 'VueQrious',
    globals: {
      qrious: 'QRious',
      'node-qrious': 'QRious',
    },
  },
  plugins: [babel()],
  external: ['qrious', 'node-qrious'],
}

if (isServer) {
  config.output.paths = { qrious: 'node-qrious' }
}

if (isProd) {
  config.plugins.push(
    uglify({
      output: {
        comments: true,
      },
    }),
  )
}

export default config
