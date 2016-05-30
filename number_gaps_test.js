var chai = require('chai');
var expect = chai.expect;
var numbers = require("./number_gaps");

describe('Number Gaps Kata', function() {
  it('empty array should return empty array', function() {
    var numbers = new number_gaps([]);
    expect(numbers.gaps()).to.equal([]);
  });
});
