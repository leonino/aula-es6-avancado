class Mathy {
  sum(x,y) {
   return x + y;
  }

  multiply(x, y, callback) {
    setTimeout(() => {
      callback(x * y);
    }, 1000);
  }

  aleatorio(number) {
    return Math.random() * number;
  }
}

module.exports = Mathy;