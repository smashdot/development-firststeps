const assert = require('assert');

function createUser(user) {
  if (allEmpty(user.name, user.email)) {
    return new Error('cannot create a user');
  }

  // create a user
}

function createProductr(product) {
  if (allEmpty(product.name, product.price)) {
    return new Error('cannot create a product');
  }

  // create a product
}

function allEmpty(...items) {
  for (const item of items) {
    if (Array.isArray(item) && item.length == 0) {
      continue;
    }
    if (item) {
      return false;
    }
  }
  return true;
}

assert.equal(allEmpty(), true);
assert.equal(allEmpty('', undefined, null, []), true);
assert.equal(allEmpty(['item']), false);
assert.equal(allEmpty('abc'), false);
assert.equal(allEmpty('abc', ''), false);
