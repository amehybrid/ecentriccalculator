const expect = require("chai").expect;
const calculator = require("../app/calculator");

describe("Calculator", function() {
  describe("Addition", function() {
    it("adds two numbers", function() {
      const result1 = calculator.add(1, 1);
      const result2 = calculator.add(2.5, 9.4);
      const result3 = calculator.add(3, 6.6);
      const result4 = calculator.add('2.5', '9.4');

      expect(result1).to.equal(2);
      expect(result2).to.equal(11.9);
      expect(result3).to.equal(9.6);
      expect(result4).to.equal(11.9);
    });
  });

  describe("Multiplication", function() {
    it("multiplies two numbers", function() {
      const result1 = calculator.multiply(1, 1);
      const result2 = calculator.multiply(2.5, 9.4);
      const result3 = calculator.multiply(3, 3);
      const result4 = calculator.multiply('2.5', '9.4');

      expect(result1).to.equal(1);
      expect(result2).to.equal(23.5);
      expect(result3).to.equal(9);
      expect(result4).to.equal(23.5);
    });
  });

  describe("Subtraction", function() {
    it("subtracts two numbers", function() {
      const result1 = calculator.subtract(1, 1);
      const result2 = calculator.subtract(2.5, 9.4);
      const result3 = calculator.subtract(3, 6.6);
      const result4 = calculator.subtract('-2.5', '9.4');

      expect(result1).to.equal(0);
      expect(result2).to.equal(-6.9);
      expect(result3).to.equal(-3.6);
      expect(result4).to.equal(-11.9);
    });
  });

  describe("Precision", function() {
    it("gets decimal precision of a number", function() {
      const result1 = calculator.precision(1);
      const result2 = calculator.precision(2.5);
      const result3 = calculator.precision(3.456);
      const result4 = calculator.precision(3.4560);

      expect(result1).to.equal(0);
      expect(result2).to.equal(1);
      expect(result3).to.equal(3);
      expect(result4).to.equal(3);
    });
  });

  describe("Division", function() {
    it("divides two numbers", function() {
      const result1 = calculator.divide(1, 1);
      const result2 = calculator.divide(2.5, 9.4);
      const result3 = calculator.divide(3, '-3');
      const result4 = calculator.divide('2.5', '0');

      expect(result1).to.equal(1);
      expect(result2).to.equal(0.26595744680851063829787234042553);
      expect(result3).to.equal(-1);
      expect(result4).to.equal('Cannot divide by zero');
    });
  });

  describe("Modulo", function() {
    it("gets the remainder", function() {
      const result1 = calculator.modulo(1, 1);
      const result2 = calculator.modulo(5, 2.5);
      const result3 = calculator.modulo(3, '-3');
      const result4 = calculator.modulo('2.5', '0');
      const result5 = calculator.modulo(6, 5);

      expect(result1).to.equal(0);
      expect(result2).to.equal(0);
      expect(result3).to.equal(0);
      expect(result4).to.equal('Cannot divide by zero');
      expect(result5).to.equal(1);
    });
  });

  describe("Exponent", function() {
    it("get a to the power of b", function() {
      const result1 = calculator.exponent(1, 1);
      const result2 = calculator.exponent(2.5, 2);
      const result3 = calculator.exponent(3, 3);
      const result4 = calculator.exponent('5', '-1');

      expect(result1).to.equal(1);
      expect(result2).to.equal(6.25);
      expect(result3).to.equal(27);
      expect(result4).to.equal(0.2);
    });
  });

  describe("Square Root", function() {
    it("get square root of a number", function() {
      const result1 = calculator.squareRoot(1);
      const result2 = calculator.squareRoot(2);
      const result3 = calculator.squareRoot(9);
      const result4 = calculator.squareRoot('-1');

      expect(result1).to.equal(1);
      expect(result2).to.equal(1.4142135623730950488016887242097);
      expect(result3).to.equal(3);
      expect(result4).to.equal('Can not get root of a negative number');
    });
  });

  describe("nth Root", function() {
    it("get nth root of a number", function() {
      const result1 = calculator.nthRoot(1, 1);
      const result2 = calculator.nthRoot(32, 5);
      const result3 = calculator.nthRoot(27, 3);
      const result4 = calculator.nthRoot('-27', 3);

      expect(result1).to.equal(1);
      expect(result2).to.equal(2);
      expect(result3).to.equal(3);
      expect(result4).to.equal('Can not get root of a negative number');
    });
  });
});