const assert = require('assert');
const isEqualEnough = require('../')(Number.EPSILON);

describe('isEqualEnough', () => {
  it('Knows that 0 is 0.0', () => {
    assert.equal(isEqualEnough(0, 0.0), true);
  });
  it('Knows that 1 is 1', () => {
    assert.equal(isEqualEnough(1, 1), true);
  });
  it('Knows that 1 is not 1.1', () => {
    assert.equal(isEqualEnough(1, 1.1), false);
  });
  it('Knows that -1 is -1', () => {
    assert.equal(isEqualEnough(-1, -1), true);
  });
  it('Knows that -1 is not -1.000000000000001', () => {
    assert.equal(isEqualEnough(-1, -1.000000000000001), false);
  });
});
