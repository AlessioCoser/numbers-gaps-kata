class NumberGaps{
  constructor(numbers) {
    this.numbers = numbers;
  }

  gaps() {
    var ranges = [];
    if (1 < this.numbers[0]) {
      ranges.push("1-" + (this.numbers[0] - 1));
    }
    return ranges;
  }
}

module.exports = NumberGaps;
