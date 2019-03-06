/** This is a string validator node js module  */

/**
 * Preformat Operation Array
 * @param {string} pattern - regex pattern
 * @param {string} value - value to check
 * @return {boolean} - result
*/
function checkRegex(pattern, value) {
  const patt = new RegExp(pattern);
  const res = patt.test(value);
  return res;
}

/**
 * Preformat Operation Array
 * @param {string} value - value to check
 * @return {boolean} - result
 */
function checkNumber(value) {
  return checkRegex('^[-]?[0-9]*[\.]?[0-9]*$', value);
}

const stringValidator = {
  checkRegex: checkRegex,
  checkNumber: checkNumber,
};

module.exports = stringValidator;

