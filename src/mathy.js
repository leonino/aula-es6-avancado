class Mathy {
  sum(...arg) {
    return arg.reduce((total, number) => total += number, 0);
  }

  multiply(x, y, callback) {
    setTimeout(() => {
      callback(x * y);
    }, 1000);
  }

  aleatorio(number) {
    return Math.random() * number;
  }

  printSum(req, res) {
    console.log(res.load('index',this.sum(...req.data)));
  }
}

module.exports = Mathy;