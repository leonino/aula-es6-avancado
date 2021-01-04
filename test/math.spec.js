//const assert = require('assert');
const Mathy = require('../src/mathy.js');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Math class', function () {

  const mathy = new Mathy();
  const obj = {
    nome: "Marcos Ribeiro",
    idade: 48
  };

  //hooks
  // before, beforeEach, after, afterEach

  it('Sum two numbers', function () {
    expect(mathy.sum(5, 5)).to.equal(10);
  });

  // Com o uso de it.only() apenas este teste sera executado.
  // e os demais são ignorados...
  it('Multiply two numbers', function (done) {
    this.timeout(1500);
    mathy.multiply(5, 5, (value) => {
      expect(value).to.equal(25);
      done();
    })
  });

  it('Retornar numbers Aleatórios', function () {
    let number1 = mathy.aleatorio(10);
    let number2 = mathy.aleatorio(10);

    let ok = true;
    ok = ok && (number1 >= 0 && number1 <= 10);
    ok = ok && (number2 >= 0 && number2 <= 10);
    ok = ok && (number1 != number2);
    expect(ok).to.true;
  });

  // Esse teste não será executado e ficará como pendente
  it.skip("teste não será executado, usei it.skip()", () => {
    throw new Error("Error");
    expect(true).to.true();
  });

  // teste a ser implementado, também aparece como pendente. 
  it("teste a ser implementado");

  //Testando Objetos
  it('testando os valores de um objeto com expect', function () {
    expect(obj).to.have.property('nome').equal('Marcos Ribeiro');
  });

  //Comparando os valores de DOIS obejtos
  it('Comparando os valores de DOIS objetos', function () {
    const obj2 = {
      nome: "Marcos Ribeiro",
      idade: 48
    };

    expect(obj).to.deep.equal(obj2);
  });

  it('verificar de uma função foi chamada usando sinon.spy', function () {
    const req = { data: [5, 5, 5]};
    const res = {
      load: sinon.spy()
    };

    mathy.printSum(req, res);
    expect(res.load.args[0][1]).to.be.equal(15);
  });

  it.only('verificar de uma função foi chamada usando sinon.spy', function () {
    const req = { data: [5, 5, 5]};
    const res = {
      load: function load() {
        console.log('Called!');
      }
    };

    //sinon.spy(res, 'load');
    //sinon.stub(res, 'load');
    sinon.stub(res, 'load').returns('xpto');

    mathy.printSum(req, res);
    expect(res.load.args[0][1]).to.be.equal(15);
  });

});