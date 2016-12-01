const test = require('ava');
const isEqualEnough = require('../src');

test('Knows that 0 is 0.0', t => {
  t.plan(1);
  t.is(isEqualEnough(0, 0.0), true);
});

test('Knows that 1 is 1', t => {
  t.plan(1);
  t.is(isEqualEnough(1, 1), true);
});

test('Knows that 1 is not 1.1', t => {
  t.plan(1);
  t.is(isEqualEnough(1, 1.1), false);
});

test('Knows that -1 is -1', t => {
  t.plan(1);
  t.is(isEqualEnough(-1, -1), true);
});

test('Knows that -1 is not -1.000000000000001', t => {
  t.plan(1);
  t.is(isEqualEnough(-1, -1.000000000000001), false);
});
