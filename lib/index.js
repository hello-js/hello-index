'use strict'

const camelCase = require('lodash.camelcase')
const flatten = require('lodash.flatten')
const fs = require('fs')
const path = require('path')
const upperFirst = require('lodash.upperfirst')

function pascalCase (str) {
  return upperFirst(camelCase(str))
}

function helloIndex (basePath, options = {}) {
  let requires = {}
  let opts = {
    case: options.case || 'camel',
    ignore: options.ignore ? flatten([options.ignore]) : []
  }

  opts.ignore.push('index')

  fs.readdirSync(basePath).forEach((file) => {
    let key
    let ext = path.extname(file)
    let basename = path.basename(file, ext)

    if (file.startsWith('.')) {
      return
    }

    if (opts.ignore.includes(file) || opts.ignore.includes(basename)) {
      return
    }

    switch (opts.case) {
      case 'exact':
        key = basename
        break
      case 'class':
        key = pascalCase(basename)
        break
      default:
        key = camelCase(basename)
    }

    if (opts.ignore.includes(key)) {
      return
    }

    requires[key] = require(path.join(basePath, file))
  })

  return requires
}

module.exports = helloIndex
