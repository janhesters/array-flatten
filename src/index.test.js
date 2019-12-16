import { describe } from 'riteway';

import { flatten } from './flatten.js';

describe('flatten', async assert => {
  assert({
    given: 'an array of integers',
    should: 'return the array',
    actual: flatten([1, 2, 3, 4]),
    expected: [1, 2, 3, 4],
  });

  assert({
    given: 'a nested array',
    should: 'return the flattened array',
    actual: flatten([[1, 2, [3]], 4]),
    expected: [1, 2, 3, 4],
  });

  assert({
    given: 'a very complex nested array',
    should: 'return the flattened array',
    actual: flatten([[[1, { foo: [2] }], [[3]]], { bar: 4 }, [[5, [6, [7]]]]]),
    expected: [1, { foo: [2] }, 3, { bar: 4 }, 5, 6, 7],
  });
});
