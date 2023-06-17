const assert = require('assert');

function doInteger2(number) {
  if (!Number.isInteger(number)) {
    return 'Bad';
  }
  if (number % 2 !== 0) {
    return 'O';
  }
  if (number < 0) {
    return 'E-';
  }
  if (number <= 1000) {
    return 'E+K';
  }
  if (number <= 2000) {
    return 'E+2K';
  }
  return 'E++';
}

// Tests
assert.ok(doInteger2('not number') === 'Bad');
assert.ok(doInteger2(1.23) === 'Bad');
assert.ok(doInteger2(-1) === 'O');
assert.ok(doInteger2(-4) === 'E-');
assert.ok(doInteger2(4) === 'E+K');
assert.ok(doInteger2(1000) === 'E+K');
assert.ok(doInteger2(1002) === 'E+2K');
assert.ok(doInteger2(2000) === 'E+2K');
assert.ok(doInteger2(2002) === 'E++');

// OR
function doInteger3(number) {
  if (!Number.isInteger(number)) return 'Bad';
  if (number % 2 !== 0) return 'O';
  if (number < 0) return 'E-';
  if (number <= 1000) return 'E+K';
  if (number <= 2000) return 'E+2K';
  return 'E++';
}

// Tests
const tests = [
  [ 'not number', 'Bad' ],
  [ 1.23, 'Bad' ],
  [ -1, 'O' ],
  [ -4, 'E-' ],
  [ 4, 'E+K' ],
  [ 1000, 'E+K' ],
  [ 1002, 'E+2K' ],
  [ 2000, 'E+2K' ],
  [ 2002, 'E++' ],
];

for (const test of tests) {
  assert.ok(doInteger3(test[0]) === test[1]);
}


