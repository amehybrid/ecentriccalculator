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

/**
 * compute the results
 * @param {array} a - array containing numbers and operands
 * @return {number} - result
*/
function getResult(a) {
  // follow PEMDAS
  // 1. Parentheses
  // 2. Exponents
  // 3. Multiplication and Division (from left to right)
  // 4. Addition and Subtraction (from left to right)

  // remove parenthesis by processing them
  let paren1Index = a.indexOf('(');

  // process same order parentheses
  while (paren1Index > -1) {
    // find pair
    let paren2Index = a.length; // default
    let parenLevel = 1;
    for (let i = paren1Index + 1; i < a.length; i++) {
      if (a[i] === '(') {
        ++parenLevel;
      } else if (a[i] === ')') {
        if (--parenLevel === 0) {
          paren2Index = i;
          break;
        }
      }
    }

    // get inside Paren
    const insideParenthesis = [];
    for (let x = paren1Index + 1; x < paren2Index; x++) {
      insideParenthesis.push(a[x]);
    }

    // getResult
    const parenResult = getResult(insideParenthesis);

    if ((parenResult === 'Cannot divide by zero') ||
    (parenResult === 'Can not get root of a negative number')) {
      return parenResult;
      break;
    } else {
      // getResult of inside Parent and splice it on a
      a.splice(paren1Index, paren2Index - paren1Index + 1, parenResult);
      paren1Index = a.indexOf('(');
    }
  }

  // at this point same order parenthesis should have been resolved.
  // Proceeding with same order exponents

  let exp1Index = a.indexOf('^');

  // process same order exponents
  while (exp1Index > -1) {
    // get exponent result
    const exResult = exponent( a[exp1Index - 1], a[exp1Index + 1] );

    // replace the operator and number before and after it with the result
    a.splice( exp1Index - 1, 3, exResult );

    exp1Index = a.indexOf('^');
  }

  // at this point same order exponents should have been resolved.
  // Proceeding with same order multiplication and division

  /**
   * Determine next index and operation
   * @param {number} index1 - index of next operation1
   * @param {string} operation1 - name of operation2
   * @param {number} index2 - index of next operation2
   * @param {string} operation2 - name of operation1
   * @return {object} - result
  */
  function determineNext(index1, operation1, index2, operation2) {
    let index = null;
    let operation = null;
    if ((index1 > -1) || (index2 > -1)) {
      if (index1 === -1) {
        index = index2;
        operation = operation2;
      } else if (index2 === -1) {
        index = index1;
        operation = operation1;
      } else {
        index = index1 < index2 ? index1 : index2;
        operation = index1 < index2 ? operation1 : operation2;
      };
    }
    return {
      index: index,
      operation: operation,
    };
  }

  let next = determineNext(a.indexOf('*'),
      'multiplication', a.indexOf('/'), 'division');
  while (next.index !== null) {
    // get Result of Operation
    let mdResult = null;
    if (next.operation === 'multiplication') {
      mdResult = multiply(a[next.index -1], a[next.index +1]);
    } else {
      mdResult = divide(a[next.index - 1], a[next.index + 1]);
    }

    if (mdResult === 'Cannot divide by zero') {
      return mdResult;
      break;
    } else {
      a.splice(next.index - 1, 3, mdResult);
    }

    next = determineNext(a.indexOf('*'),
        'multiplication', a.indexOf('/'), 'division');
  }

  // at this point same order multiplication
  // division should have been resolved.
  // Proceeding with same order addition and subtraction
  next = determineNext(a.indexOf('+'), 'addition',
      a.indexOf('-'), 'subtraction');
  while (next.index !== null) {
    // get Result of Operation
    let asResult = null;
    if (next.operation === 'addition') {
      asResult = add(a[next.index -1], a[next.index +1]);
    } else {
      asResult = subtract(a[next.index - 1], a[next.index + 1]);
    }
    a.splice(next.index - 1, 3, asResult);
    next = determineNext(a.indexOf('+'), 'addition',
        a.indexOf('-'), 'subtraction');
  }


  // at this point there should only be one element
  return a[0];
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
  getResult: getResult,
};

module.exports = calculator;
