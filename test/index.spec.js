'use strict'

const expect = require('chai').expect
const index = require('../')
const path = require('path')

describe('hello-index', function () {
  const root = path.join(__dirname, 'fixtures')

  it('builds a file structure ignoring dotfiles', function () {
    let files = index(root)

    expect(Object.keys(files)).to.eql([
      'controllerOne',
      'controllerTwo'
    ])
  })

  it('allows for exact filenames', function () {
    let files = index(root, { case: 'exact' })

    expect(Object.keys(files)).to.eql([
      'controller-one',
      'controller-two'
    ])
  })

  it('allows for ClassName case filenames', function () {
    let files = index(root, { case: 'class' })

    expect(Object.keys(files)).to.eql([
      'ControllerOne',
      'ControllerTwo'
    ])
  })

  it('allows ignoring specific files', function () {
    let files = index(root, { ignore: 'controller-one' })

    expect(Object.keys(files)).to.eql([
      'controllerTwo'
    ])
  })
})
