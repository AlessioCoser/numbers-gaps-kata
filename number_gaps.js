class NumberGaps{
  constructor(numbers) {
    this.numbers = numbers;
  }

  insert(num) {
    this.numbers.push(num);
    this.numbers.sort((a,b) => a-b);
  }

  remove(num) {
    var index = this.numbers.indexOf(num);
    if(index >= 0) {
      this.numbers.splice(index,1);
    }
  }

  gaps() {
    var ranges = [];
    var prev = 0;
    for (var i = 0; i < this.numbers.length; i++) {
      var curr = this.numbers[i];
      if(i > 0) {
        prev = this.numbers[i-1];
      }
      if (curr - prev > 1) {
        ranges.push((prev + 1) + "-" + (curr - 1));
      }
    }
    return ranges;
  }
}

module.exports = NumberGaps;
