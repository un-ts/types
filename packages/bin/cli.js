#!/usr/bin/env node
const { resolve } = require('path')

const { tryFile } = require('@pkgr/utils')

module.exports = require('./lib/cjs')(
  tryFile(
    [resolve(process.argv[1], '../../@d-ts'), resolve('node_modules/@d-ts')],
    true,
  ),
)
