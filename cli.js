#!/usr/bin/env node

'use strict'

const fs = require('fs')
const path = require('path')

const readStream = fs.createReadStream(path.resolve(__dirname, 'index.json'))

let writeStream

readStream
  .on('error', err => {
    console.error(err.message)
    process.exit(1)
  })
  .once('data', () => {
    writeStream = fs.createWriteStream(
      path.resolve(process.cwd(), '.prettierrc')
    )
  })
  .on('data', chunk => {
    writeStream.write(chunk)
  })
  .on('end', () => {
    console.log('😎 Enjoy the best prettier config in the world')
  })
