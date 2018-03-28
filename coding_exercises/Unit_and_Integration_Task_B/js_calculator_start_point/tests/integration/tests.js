var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {

  let two;
  let three;
  let eight;
  let zero;

  let plus;
  let minus;
  let divide;
  let multiply;
  let equal;

  let running_total;

  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
    two   = element(by.css('#number2'));
    three = element(by.css('#number3'));
    eight = element(by.css('#number8'));
    zero  = element(by.css('#number0'));

    plus      = element(by.css('#operator_add'));
    minus     = element(by.css('#operator_subtract'));
    divide    = element(by.css('#operator_divide'));
    multiply  = element(by.css('#operator_multiply'));
    equal     = element(by.css('#operator_equals'));

    running_total = element(by.css('#running_total'));
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  })

  it('should update the display when + is used as part of an operation', () => {
    two.click();
    plus.click();
    three.click();
    plus.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  })

  it('should update the display when - is used as part of an operation', () => {
    three.click();
    minus.click();
    two.click();
    minus.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1');
  })

  it('should update the display when / is used as part of an operation', () => {
    eight.click();
    divide.click();
    two.click();
    divide.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  })

  it('should update the display when * is used as part of an operation', () => {
    three.click();
    multiply.click();
    two.click();
    multiply.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6');
  })

  it('should allow multiple operators to chain together', () => {
    two.click();
    plus.click();
    eight.click();
    multiply.click();
    three.click();
    equal.click();

    expect(running_total.getAttribute('value')).to.eventually.equal('30');
  })

  it('should allow for negative numbers', () => {
    two.click();
    minus.click();
    eight.click();
    multiply.click();
    two.click();
    equal.click();

    expect(running_total.getAttribute('value')).to.eventually.equal('-12');
  })

  it('should allow for decimals in calculations', () => {
    two.click();
    divide.click();
    eight.click();
    multiply.click();
    three.click();
    equal.click();

    expect(running_total.getAttribute('value')).to.eventually.equal('0.75');
  })

  it('should work with large numbers', () => {
    eight.click();

    let count   = 8;
    while (count > 0) {
      zero.click();
      count -= 1;
    }

    divide.click();
    two.click();
    equal.click();

    expect(running_total.getAttribute('value')).to.eventually.equal('400000000')
  })

  it('should return "Undefined: Division By Zero" when division by zero is made', () => {
    three.click();
    divide.click();
    zero.click();
    equal.click();

    expect(running_total.getAttribute('value')).to.eventually.equal('Undefined: Division By Zero');
  })


});
