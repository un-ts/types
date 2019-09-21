#!/usr/bin/env node
const path = require('path')
module.exports = require('./lib/cjs')(
  path.resolve(process.argv[1], '../../@d-ts'),
)
