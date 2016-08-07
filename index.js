const abs = Math.abs;

/**
 * Create a function with specified tolerance for comparing numbers.
 *
 * @param {Number} tolerance
 * The acceptable tolerance.
 *
 * @example
 * const isEqualEnough = require('is-equal-enough')(Number.EPSILON)
 * // → instantiatedIsEqualEnough
 *
 * @return {instantiatedIsEqualEnough}
 * Instatiated function with tolerance set.
 */
function isEqualEnough(tolerance) {
  return (a, b) => {
    const x = abs(a);
    const y = abs(b);
    return x === y || abs(x - y) / (x + y) < tolerance;
  };
}

/**
 * @callback instantiatedIsEqualEnough
 * Determine whether two numbers are within a provided tolerance of each other.
 *
 * @param {Number} a
 * A number.
 * @param {Number} b
 * Another number.
 *
 * @example
 * isEqualEnough(0.15 + 0.15, 0.1 + 0.2)
 * // → true
 *
 * @return {Boolean}
 * Whether the numbers are within the tolerance or not.
 */

module.exports = isEqualEnough;
