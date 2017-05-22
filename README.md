# hello-index

hello-index is an auto-generated (and customizable) index file to require all files in a directory.

## Installation

```
yarn add hello-index
```

## Usage

```
'use strict'

const index = require('hello-index');

module.exports = index(__dirname);
```

By default, all files and directories in `__dirname` will be added to the export list, matching case exactly.

NOTE: Any dotfiles will be ignored.

## API

```
function(basePath, [options])
```

### Options

* `case`: A `String` explaining how to export filenames, can be one of `exact` (match case exactly), `camel` (use camelCase), or `class` (use ClassName case) (default: `camel`)
* `ignore`: An `Array` of files or directories to ignore (default: `[]`)
* `directories`: A `Boolean` indicating whether or not to include directories (Default: `true`)
