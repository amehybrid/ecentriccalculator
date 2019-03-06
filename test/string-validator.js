const expect = require("chai").expect;
const stringValidator = require("../app/string-validator");


describe("String Validator", function() {
    describe("Check Regex", function() {
        it("check integer", function() {
          const result1 = stringValidator.checkRegex('^[0-9]*$', '987');
          const result2 = stringValidator.checkRegex('^[0-9]*$', '987.45');
          const result3 = stringValidator.checkRegex('^[0-9]*$', 'abc');
          expect(result1).to.equal(true);
          expect(result2).to.equal(false);
          expect(result3).to.equal(false);
        });
    });

    describe("Check Number", function() {
        it("check integer", function() {
            const result1 = stringValidator.checkNumber('987');
            const result2 = stringValidator.checkNumber('3.33.33');
            const result3 = stringValidator.checkNumber('a33');
            expect(result1).to.equal(true);
            expect(result2).to.equal(false);
            expect(result3).to.equal(false);
        });
        it("check decimal", function() {
            const result1 = stringValidator.checkNumber('987.');
            const result2 = stringValidator.checkNumber('987.6');
            expect(result1).to.equal(true);
            expect(result2).to.equal(true);
        });
        it("check negative integer", function() {
            const result1 = stringValidator.checkNumber('-987');
            expect(result1).to.equal(true);
        });
        it("check negative decimal", function() {
            const result1 = stringValidator.checkNumber('-987.');
            const result2 = stringValidator.checkNumber('-987.6');
            expect(result1).to.equal(true);
            expect(result2).to.equal(true);
        });
    });
});