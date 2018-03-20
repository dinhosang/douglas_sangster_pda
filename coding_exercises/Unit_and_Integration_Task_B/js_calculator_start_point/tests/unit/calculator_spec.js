const Calculator = require('../../public/js/calculator.js');
const assert = require('assert');

describe('calculator', function () {

  let calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  // write unit tests here in the form of "it should do something..."
  it('has a sample test', function(){
    assert.equal(true, true);
  })

  it('should start with a runningTotal of 0', () => {
    assert.strictEqual(calculator.runningTotal, 0);
  })

  it('should start with a previousTotal of 0', () => {
    assert.strictEqual(calculator.previousTotal, 0);
  })

  it('should place numbers clicked in previousTotal if an operator is clicked afterwards', () => {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    assert.strictEqual(calculator.previousTotal, 7)
  })

  it('should be able to add a number to the previousTotal, and modify running total', () => {
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('should be able to subtract a number from previousTotal, and modify running total', () => {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should be able to multiply the previousTotal, and modify runningTotal', () => {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('should be able to divide the previousTotal, and modify runningTotal', () => {
    calculator.previousTotal = 21;
    calculator.divide(3);
    assert.strictEqual(calculator.runningTotal, 7);
  })

  it('should concatenate numbers clicked together if no operator is clicked inbetween their selection', () => {
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(4);
    assert.strictEqual(calculator.runningTotal, 124);
  })

  it('should be able to chain multiple operations', () => {
    calculator.numberClick(10);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');

    assert.strictEqual(calculator.previousTotal, 3);
  })

  // calculate.clearClick()
  it('should be able to clear the running total on screen without affecting the calculation', () => {
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('/');
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.numberClick(2)
    calculator.operatorClick('=');

    assert.strictEqual(calculator.previousTotal, 2.5)
  })
});
