try {
  const config = require('../package.json').babel
  require('babel-register')(config)
  require('babel-polyfill')
} catch (e) {
  console.error('error parsing package.json::babel')
}
