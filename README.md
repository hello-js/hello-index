# hello-index

hello-index is an auto-generated (and customizable) index file to require all files in a directory.

[![Build Status](https://img.shields.io/travis/hello-js/hello-index/master.svg)](https://travis-ci.org/hello-js/hello-index)
[![Coverage Status](https://img.shields.io/coveralls/hello-js/hello-index.svg)](https://coveralls.io/github/hello-js/hello-index)
[![Dependency Status](https://img.shields.io/david/hello-js/hello-index.svg)](https://david-dm.org/hello-js/hello-index)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Installation

```
yarn add hello-index
```

## Usage

```js
'use strict'

const index = require('hello-index')

module.exports = index(__dirname)
```

By default, all files and directories in `__dirname` will be added to the export list. All dotfiles will be ignored.

## API

```
function (basePath, [options])
```

### Options

* `case`: A `String` explaining how to export filenames, can be one of `exact` (match case exactly), `camel` (use camelCase), or `class` (use ClassName case) (default: `camel`)
* `ignore`: An `Array` of files or directories to ignore (default: `[]`)
