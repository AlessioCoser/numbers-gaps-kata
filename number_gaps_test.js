var chai = require('chai');
var expect = chai.expect;
var NumberGaps = require("./number_gaps");

describe('Number Gaps Kata', function() {
  it('empty array should return empty array', function() {
    var numbers = new NumberGaps([]);
    expect(numbers.gaps()).to.eql([]);
  });
});
