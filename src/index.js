/**
 *
 * @param {Array} arr - Arbitrarily nested array.
 * @returns {Array} flattenedArr - A flat array.
 */
const flatten = arr =>
  arr.reduce((a, c) => a.concat(Array.isArray(c) ? flatten(c) : c), []);

export { flatten };
