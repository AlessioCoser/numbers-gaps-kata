class NumberGaps{
  constructor(numbers) {
    this.numbers = numbers;
  }

  gaps() {
    var ranges = [];
    if (1 < this.numbers[0]) {
      ranges.push("1-" + (this.numbers[0] - 1));
    }
    for (var i = 1; i < this.numbers.length; i++) {
      var prev = this.numbers[i-1];
      var curr = this.numbers[i];
      if (curr - prev > 1) {
        ranges.push((prev + 1) + "-" + (curr - 1));
      }
    }
    return ranges;
  }
}

module.exports = NumberGaps;
