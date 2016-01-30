const Path = require('path');
const Package = require('./package.json');

module.exports = {
  cmd: 'mod-standard',
  version: Package.version,
  homepage: Package.homepage,
  bugs: Package.bugs.url,
  tagline: 'JavaScript Standard Modulus Style',
  eslintConfig: {
    configFile: Path.join(__dirname, '.eslintrc')
  }
};
