var chai = require('chai');
var expect = chai.expect;
var NumberGaps = require("./number_gaps");

describe('Number Gaps Kata', function() {
  it('empty array should return empty array', function() {
    var numbers = new NumberGaps([]);
    expect(numbers.gaps()).to.eql([]);
  });

  it('insert number 1 should return no gaps', function() {
    var numbers = new NumberGaps([]);
    numbers.insert(1);
    expect(numbers.gaps()).to.eql([]);
  });

  it('[2] should return array with single gap ["1-1"]', function() {
    var numbers = new NumberGaps([2]);
    expect(numbers.gaps()).to.eql(["1-1"]);
  });

  it('insert number 4 then 1 should return single gap ["2-3"]', function() {
    var numbers = new NumberGaps([]);
    numbers.insert(4);
    numbers.insert(1);
    expect(numbers.gaps()).to.eql(["2-3"]);
  });

  it('[2,3,4,7] should return array with two gaps ["1-1", "5-6"]', function() {
    var numbers = new NumberGaps([2,3,4,7]);
    expect(numbers.gaps()).to.eql(["1-1", "5-6"]);
  });

  it('insert number 1, 4 then 2 should return single gap ["3-3"]', function() {
    var numbers = new NumberGaps([]);
    numbers.insert(1);
    numbers.insert(4);
    numbers.insert(2);
    expect(numbers.gaps()).to.eql(["3-3"]);
  });

  it('insert number 1, 7 then 4 should return two gaps ["2-3","5-6"]', function() {
    var numbers = new NumberGaps([]);
    numbers.insert(1);
    numbers.insert(7);
    numbers.insert(4);
    expect(numbers.gaps()).to.eql(["2-3","5-6"]);
  });
});
