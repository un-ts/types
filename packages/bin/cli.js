#!/usr/bin/env node
const path = require('path')

module.exports = require('./lib/cjs')(path.resolve('node_modules/@d-ts'))
