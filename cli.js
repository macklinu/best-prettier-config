#!/usr/bin/env node

'use strict'

const fs = require('fs')
const path = require('path')
const config = require('.')

const prettierConfigPath = path.resolve(process.cwd(), '.prettierrc')
const jsonConfig = JSON.stringify(config, null, 2)

fs.writeFile(prettierConfigPath, jsonConfig, 'utf8', err => {
  if (err) throw err
  console.log('😎 Enjoy the best .prettierrc file you have ever seen')
})
