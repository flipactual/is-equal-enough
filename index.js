const abs = Math.abs

/**
 * Determine whether two numbers are practically equal.
 *
 * @param {Number} a
 * A number.
 * @param {Number} b
 * Another number.
 * @param {Number} tolerance
 * The acceptable tolerance.
 *
 * @example
 * isPracticallyEqual(0.15 + 0.15, 0.1 + 0.2, Number.EPSILON)
 * // → true
 *
 * @return {Boolean}
 * Whether the numbers are practically equal or not.
 */
function isPracticallyEqual(a, b, tolerance) {
  const x = abs(a)
  const y = abs(b)
  return x === y || abs(x - y) / (x + y) < tolerance
}

module.exports = isPracticallyEqual
