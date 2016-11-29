/**
 * Determine whether two numbers are within a provided tolerance of each other.
 *
 * @example
 * isEqualEnough(0.15 + 0.15, 0.1 + 0.2);
 * // → true
 *
 * @param  {number}  a                          A number
 * @param  {number}  b                          Another number
 * @param  {number}  [tolerance=Number.EPSILON] The acceptable tolerance.
 * @return {boolean}                            Whether the numbers are within the tolerance or not.
 */
function isEqualEnough(a, b, tolerance = Number.EPSILON) {
  const x = Math.abs(a);
  const y = Math.abs(b);
  return x === y || Math.abs(x - y) / (x + y) < tolerance;
}

module.exports = isEqualEnough;
