var Path = require('path')
var Pacakge = require('./package.json')

module.exports = {
  cmd: 'mod-standard',
  version: Pacakge.version,
  homepage: Pacakge.homepage,
  bugs: Pacakge.bugs.url,
  tagline: 'JavaScript Standard Modulus Style',
  eslintConfig: {
    configFile: Path.join(__dirname, '.eslintrc')
  }
}
