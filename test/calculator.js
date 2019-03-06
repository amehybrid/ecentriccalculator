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
      const result5 = calculator.divide('6.6', '2.2');

      expect(result1).to.equal(1);
      expect(result2).to.equal(0.26595744680851063829787234042553);
      expect(result3).to.equal(-1);
      expect(result4).to.equal('Cannot divide by zero');
      expect(result5).to.equal(3);
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

  describe("get result", function() {
    it("process actions", function() {
      const result1 = calculator.getResult([1,'+',1]);
      const result2 = calculator.getResult(['3', '-', '2', '+', '5']);
      const result3 = calculator.getResult([1, '+', 2, '*', '5']);
      const result4 = calculator.getResult([10,'*', 2, '-', '9', '/', 3]);
      const result5 = calculator.getResult([10,'*', 2, '-', '9', '/', 0]);
      const result6 = calculator.getResult([1,'+','2','^',5]);
      const result7 = calculator.getResult([1, '+', '2', '*','5','^',2]);
      const result8 = calculator.getResult(['(','2', '+', '3', ')', '/', '5']);
      const result9 = calculator.getResult(['(','(','2', '+', '3', ')', '/', '(', '5', '*', '2', ')', ')']);
      const result10 = calculator.getResult(['(','(', 1, '+', 2, '^', '2' ,')' ,'+', '(', 25, '-', 2, '^', '3', '*', 2, ')', ')', '/', '(', '(', 3, '-', 2, ')', '+', '(', 31, '+', 0, ')', ')']);
      const result11 = calculator.getResult(calculator.preFormatOperations(['5', '(', '2', '+', '3', ')']));
      const result12 = calculator.getResult(calculator.preFormatOperations(['(', '2', '+', '4', ')', '(', '2', '+', '3', ')']));
      const result13 = calculator.getResult(['3', '*', '(','1.5', '+', '2','^','2','*','3',')','/','4', '*', '(','5','-','4.5',')']);

      expect(result1).to.equal(2);
      expect(result2).to.equal(6);
      expect(result3).to.equal(11);
      expect(result4).to.equal(17);
      expect(result5).to.equal('Cannot divide by zero');
      expect(result6).to.equal(33);
      expect(result7).to.equal(51);
      expect(result8).to.equal(1);
      expect(result9).to.equal(0.5);
      expect(result10).to.equal(0.4375);
      expect(result11).to.equal(25);
      expect(result12).to.equal(30);
      expect(result13).to.equal(5.0625);
    });
  });

  describe("preformat operations", function() {
    it("adds * between consecutive ) and (", function() {
      const array1a = ['(','1','+','2',')','(','3','+','4',')'];
      const array1b = ['(','1','+','2',')','*','(','3','+','4',')']
      const result1 = calculator.preFormatOperations(array1a);
      expect(JSON.stringify(result1)).to.equal(JSON.stringify(array1b));
    });

    it("adds * between a number and (", function() {
      const array1a = ['(','1','+','2','(','3','+','4',')'];
      const array1b = ['(','1','+','2','*','(','3','+','4',')']
      const result1 = calculator.preFormatOperations(array1a);
      expect(JSON.stringify(result1)).to.equal(JSON.stringify(array1b));
    });

    it("does not add anything not needed", function() {
      const array1a = ['(','1','+','2',')'];
      const result1 = calculator.preFormatOperations(array1a);
      
      expect(JSON.stringify(result1)).to.equal(JSON.stringify(array1a));
    });

    it("3(1.5+2^2*3)/4(5-4.5)", function() {
      const array1a = ['3','(','1.5', '+', '2','^','2','*','3',')','/','4','(','5','-','4.5',')'];
      const array1b = ['3', '*', '(','1.5', '+', '2','^','2','*','3',')','/','4', '*', '(','5','-','4.5',')'];
      const result1 = calculator.preFormatOperations(array1a);
      expect(JSON.stringify(result1)).to.equal(JSON.stringify(array1b));
    });
  });  
});