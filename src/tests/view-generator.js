const fs = require('fs')
const path = require('path')

const yargs = require('yargs')
const glob = require('glob')
const mkdirp = require('mkdirp')

const BASE_TEST_PATH_DIR = yargs.argv.output || './tests/__tests__/'
const VIEWS_PATH = yargs.argv.views || './src/views'

let tests = 0

const tree = fs.readdirSync(VIEWS_PATH).map((component) => ([
  component, glob.sync(path.join(VIEWS_PATH, component, '**', '*.js'), {
    ignore: ['**/**/stories.js'],
  }),
]))

const store = glob.sync(path.join('src', '**', 'configure-store.prod.js'))[0]
const SRCPATH = path.relative('..', BASE_TEST_PATH_DIR)

const generateImport = (testPath) => `import Component from '${path.relative(SRCPATH, testPath)}'`

const getFileNameFromPath = (testPath) => `/${testPath.split('/').pop().replace('.js', '')}`

const generateTestCode = ([component, paths]) => paths.map((testPath) => {
  const isIndex = testPath.includes('index.js')
  const componentName = !isIndex ? getFileNameFromPath(testPath) : ''
  const basePath = testPath.split('/').splice(-2, 1)[0]
  const testFileName = testPath.split('/').splice(-1)[0]
  return [
    `import React from 'react'
import { Provider } from 'react-redux'

import configureStore from '${path.relative(SRCPATH, store)}'
${generateImport(testPath)}

const store = configureStore()

it('should render ${component}${componentName} without props', () => {
  expect(() => {
    render(<Provider store={store}><Component params={{}} location={{ query: {} }} children={''} /></Provider>)
  }).not.toThrow()
})
`, basePath, testFileName]
})

const writeToFile = ([testContent, basePath, testName]) => {
  const testPath = path.join(BASE_TEST_PATH_DIR, basePath)
  if (!fs.existsSync(testPath)) {
    fs.mkdirSync(testPath)
  }
  fs.writeFileSync(path.join(testPath, testName), testContent)
  tests += 1
}

const writeFileForEachTest = (test) => test.map(writeToFile)

if (!fs.existsSync(BASE_TEST_PATH_DIR)) {
  mkdirp.sync(BASE_TEST_PATH_DIR)
}

tree.map(generateTestCode).map(writeFileForEachTest)

console.info(`${tests} test files generated on ${BASE_TEST_PATH_DIR}`)
