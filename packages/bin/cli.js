#!/usr/bin/env node
const { resolve } = require('path')
module.exports = require('./lib/cjs')(resolve('node_modules/@d-ts'))
