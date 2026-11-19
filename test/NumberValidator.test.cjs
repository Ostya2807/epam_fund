const { expect } = require('chai');
const NumbersValidator = require('../NumbersValidator');

describe('NumbersValidator', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  describe('isNumberEven', () => {
    it('should return true for an even number', () => {
      expect(validator.isNumberEven(4)).to.equal(true);
    });

    it('should return false for an odd number', () => {
      expect(validator.isNumberEven(5)).to.equal(false);
    });

    it('should throw an error when input is not a number', () => {
      expect(() => validator.isNumberEven('4')).to.throw(
        Error,
        '[4] is not of type "Number" it is of type "string"'
      );
    });
  });

  describe('getEvenNumbersFromArray', () => {
    it('should return only even numbers from an array of numbers', () => {
      expect(validator.getEvenNumbersFromArray([1, 2, 3, 4, 5, 6])).to.eql([2, 4, 6]);
    });

    it('should return an empty array when given an empty array', () => {
      expect(validator.getEvenNumbersFromArray([])).to.eql([]);
    });

    it('should handle negative numbers and zero', () => {
      expect(validator.getEvenNumbersFromArray([0, -2, -3, 7])).to.eql([0, -2]);
    });

    it('should throw an error when input is not an array', () => {
      expect(() => validator.getEvenNumbersFromArray('1,2,3')).to.throw(
        Error,
        '[1,2,3] is not an array of "Numbers"'
      );
    });

    it('should throw an error when array contains non-number elements', () => {
      expect(() => validator.getEvenNumbersFromArray([1, '2', 4])).to.throw(
        Error,
        '[1,2,4] is not an array of "Numbers"'
      );
    });
  });

  describe('isAllNumbers', () => {
    it('should return true when all elements in the array are numbers', () => {
      expect(validator.isAllNumbers([1, 2, 3, -5, 0])).to.equal(true);
    });

    it('should return true for an empty array', () => {
      expect(validator.isAllNumbers([])).to.equal(true);
    });

    it('should return false when at least one element is not a number', () => {
      expect(validator.isAllNumbers([1, '2', 3])).to.equal(false);
    });

    it('should throw an error when input is not an array', () => {
      expect(() => validator.isAllNumbers('not an array')).to.throw(
        Error,
        '[not an array] is not an array'
      );
    });
  });

  describe('isInteger', () => {
    it('should return true for an integer number', () => {
      expect(validator.isInteger(4)).to.equal(true);
      expect(validator.isInteger(-10)).to.equal(true);
      expect(validator.isInteger(0)).to.equal(true);
    });

    it('should return false for a non-integer number', () => {
      expect(validator.isInteger(4.5)).to.equal(false);
      expect(validator.isInteger(NaN)).to.equal(false);
    });

    it('should throw an error when input is not a number', () => {
      expect(() => validator.isInteger('4')).to.throw(
        Error,
        '[4] is not a number'
      );
    });
  });
});