var chai = require('chai');
var expect = chai.expect;
var NumberGaps = require("./number_gaps");

describe('Number Gaps Kata', function() {
  it('empty array should return empty array', function() {
    var numbers = new NumberGaps([]);
    expect(numbers.gaps()).to.eql([]);
  });
  it('[2] should return array with single range ["1-1"]', function() {
    var numbers = new NumberGaps([2]);
    expect(numbers.gaps()).to.eql(["1-1"]);
  });
  it('[2,3,4,7] should return array with single range ["1-1", "5-6"]', function() {
    var numbers = new NumberGaps([2,3,4,7]);
    expect(numbers.gaps()).to.eql(["1-1", "5-6"]);
  });
});
