class NumberGaps{
  constructor(numbers) {
    this._numbers = numbers;
    this._gaps = [];
  }

  insert(num) {
    this._numbers.push(num);
    this._numbers.sort((a,b) => a-b);
  }

  remove(num) {
    var index = this._numbers.indexOf(num);
    if(index >= 0) {
      this._numbers.splice(index,1);
    }
  }

  gaps() {
    this._gaps = [];
    for (let index in this._numbers) {
      this.appendGaps((this._numbers[index-1] || 0), this._numbers[index]);
    }
    return this._gaps;
  }

  appendGaps(prev, curr){
    if (curr - prev == 2) {
      this._gaps.push((prev + 1).toString());
    }
    if (curr - prev > 2) {
      this._gaps.push((prev + 1) + "-" + (curr - 1));
    }
  }
}

module.exports = NumberGaps;
