const Engine = require('standard-engine');
const Options = require('./options');

module.exports = new Engine.linter(Options); // eslint-disable-line new-cap
