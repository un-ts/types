#!/usr/bin/env node
const { resolve } = require('path')

try {
  module.exports = require('./lib/cjs')(resolve('node_modules/@d-ts'))
} catch (e) {}
