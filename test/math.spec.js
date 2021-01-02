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
    assert.equal(mathy.sum(number1, 5), number1 + 5);
  });

  // Com o uso de it.only() apenas este teste sera executado.
  // e os demais são ignorados...
  it.only('Multiply two numbers', function (done) {
    this.timeout(1500);
    mathy.multiply(5, 5, (value) => {
      assert.equal(value, 25);
      done();
    })
  });

  // Esse teste não será executado e ficará como pendente
  it.skip('Retornar numbers Aleatórios', function () {
    let number2 = mathy.aleatorio(10);

    let ok = true;
    ok = ok && (number1 >= 0 && number1 <= 10);
    ok = ok && (number2 >= 0 && number2 <= 10);
    ok = ok && (number1 != number2);
    assert.ok(ok);
  });

  // teste a ser implementado, também aparece como pendente. 
  it('teste pendente');

});