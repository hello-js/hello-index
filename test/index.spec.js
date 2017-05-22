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

    expect(files.controllerOne).to.eql('one')
    expect(files.controllerTwo).to.eql('two')
  })

  it('allows for exact filenames', function () {
    let files = index(root, { case: 'exact' })

    expect(Object.keys(files)).to.eql([
      'controller-one',
      'controller-two'
    ])

    expect(files['controller-one']).to.eql('one')
    expect(files['controller-two']).to.eql('two')
  })

  it('allows for ClassName case filenames', function () {
    let files = index(root, { case: 'class' })

    expect(Object.keys(files)).to.eql([
      'ControllerOne',
      'ControllerTwo'
    ])

    expect(files.ControllerOne).to.eql('one')
    expect(files.ControllerTwo).to.eql('two')
  })

  it('allows ignoring specific files', function () {
    let files = index(root, { ignore: 'controller-one' })

    expect(Object.keys(files)).to.eql([
      'controllerTwo'
    ])

    expect(files.controllerTwo).to.eql('two')
  })

  it('ignores files if they match after case-shifting', function () {
    let files = index(root, { ignore: 'controllerTwo' })

    expect(Object.keys(files)).to.eql([
      'controllerOne'
    ])

    expect(files.controllerOne).to.eql('one')
  })
})
