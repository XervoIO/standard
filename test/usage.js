const Code = require('code');
const Lab = require('lab');

const Standard = require('..');

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

describe('usage', function () {
  describe('lintFiles', function () {
    it('is a function', function (done) {
      expect(Standard.lintFiles).to.be.a.function();
      done();
    });

    it('yields no errors when passed an empty array', function (done) {
      Standard.lintFiles([], { cwd: 'bin' }, function (err, result) {
        expect(err).to.not.exist();
        expect(result).to.be.an.object();
        expect(result.errorCount).to.equal(0);
        expect(result.warningCount).to.equal(0);

        done();
      });
    });
  });

  describe('lintText', function () {
    it('is a function', function (done) {
      expect(Standard.lintText).to.be.a.function();
      done();
    });

    it('yields an error when passed an invalid string', function (done) {
      var invalid = 'console.log("hi there");\n';

      Standard.lintText(invalid, function (err, result) {
        expect(err).to.not.exist();
        expect(result).to.be.an.object();
        expect(result.errorCount).to.equal(1); // quotes
        expect(result.warningCount).to.equal(1); // no-console

        done();
      });
    });
  });
});
