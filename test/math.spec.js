const assert = require('assert');
const Mathy = require('../src/mathy.js');

describe('Math class', function () {

  const mathy = new Mathy();
  let number1 = 0;
  //hooks
  // before, beforeEach, after, afterEach
  this.beforeAll(function () {
    number1 = mathy.aleatorio(10);
  });

  it('Sum two numbers', function () {
    assert.equal(mathy.sum(number1, 5), number1+5);
  });

  it('Multiply two numbers', function () {
    assert.equal(mathy.multiply(5, number1), 5*number1);
  });

  it('Retornar numbers Aleatórios', function () {
    let number2 = mathy.aleatorio(10);

    let ok = true;
    ok = ok && (number1 >= 0 && number1 <= 10);
    ok = ok && (number2 >= 0 && number2 <= 10);
    ok = ok && (number1 != number2);
    assert.ok(ok);
  });

});