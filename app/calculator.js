/** This is a calculator node js module  */

/**
 * adds two numbers. treat strings as float numbers.
 * @param {number|string} a - first number
 * @param {number|string} b - second number
 * @return {number} - sum
*/
function add(a, b) {
  const number1 = parseFloat(a);
  const number2 = parseFloat(b);
  const precisiona = precision(number1);
  const precisionb = precision(number2);
  const precisionc = precisiona > precisionb ?
    precisiona : precisionb;
  return parseFloat(( number1 + number2 ).toFixed(precisionc));
}

/**
 * subtracts two numbers. treat strings as float numbers.
 * @param {number|string} a - minuend
 * @param {number|string} b - subtrahend
 * @return {number} - difference
*/
function subtract(a, b) {
  const number1 = parseFloat(a);
  const number2 = parseFloat(b);
  const precisiona = precision(number1);
  const precisionb = precision(number2);
  const precisionc = precisiona > precisionb ?
      precisiona : precisionb;
  return parseFloat(( number1 - number2 ).toFixed(precisionc));
}

/**
 * multiplies two numbers. treat strings as float numbers.
 * @param {number|string} a - first number
 * @param {number|string} b - second number
 * @return {number} - product
*/
function multiply(a, b) {
  const number1 = parseFloat(a);
  const number2 = parseFloat(b);
  const precisiona = precision(number1);
  const precisionb = precision(number2);
  const precisionc = precisiona > precisionb ?
        precisiona : precisionb;
  return parseFloat(( number1 * number2 ).toFixed(precisionc));
}

/**
 * divides two numbers. treat strings as float numbers.
 * divisor must not be 0
 * @param {number|string} a - dividend
 * @param {number|string} b - divisor
 * @return {number} - quotient
*/
function divide(a, b) {
  return parseFloat(b) === 0 ?
    'Cannot divide by zero' : parseFloat(a) / parseFloat(b);
}

/**
 * get the product of first number multipliying itself second number times.
 * treat strings as float numbers.
 * @param {number|string} a - first number
 * @param {number|string} b - exponent
 * @return {number} - result
*/
function exponent(a, b) {
  return Math.pow(parseFloat(a), parseFloat(b));
}

/**
 * get the remainder when dividing two numbers. treat strings as float numbers.
 * divisor must not be 0
 * @param {number|string} a - dividend
 * @param {number|string} b - divisor
 * @return {number} - remainder
*/
function modulo(a, b) {
  return parseFloat(b) === 0 ?
    'Cannot divide by zero' : parseFloat(a) % parseFloat(b);
}

/**
 * get the square root of a number. treat strings as float numbers.
 * @param {number|string} a - positive number or 0
 * @return {number} - square root
*/
function squareRoot(a) {
  const number1 = parseFloat(a);
  if (number1 >= 0) {
    return Math.sqrt(number1);
  } else {
    return 'Can not get root of a negative number';
  }
}

/**
 * get the product of first number multipliying itself second number times.
 * treat strings as float numbers.
 * @param {number|string} a - first number
 * @param {number|string} b - root
 * @return {number} - nth root
*/
function nthRoot(a, b) {
  const number1 = parseFloat(a);
  if (number1 >= 0) {
    return Math.pow(number1, 1/parseFloat(b));
  } else {
    return 'Can not get root of a negative number';
  }
}

/**
 * get the decimal precision of a number
 * @param {number|string} a - number
 * @return {number} - decimal precision
*/
function precision(a) {
  if (!isFinite(a)) return 0;
  let e = 1; let p = 0;
  while (Math.round(a * e) / e !== a) {
    e *= 10;
    p++;
  }
  return p;
}

const calculator = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  exponent: exponent,
  modulo: modulo,
  precision: precision,
  squareRoot: squareRoot,
  nthRoot: nthRoot,
};

module.exports = calculator;
