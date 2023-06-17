// Sample 1
// --------

function connectToDatabase() {
  return dbConnection;
}

function getUsers() {
  const db = connectToDatabase();
  return db.findUsers();
}

function getProducts() {
  const db = connectToDatabase();
  return db.findProducts();
}

// Sample 2
// --------

function createUser(user) {
  if (user.name && user.email) {
    // create a user
  } else {
    // handle validation error
  }
}

function createProductr(product) {
  if (product.name && product.price) {
    // create a product
  } else {
    // handle validation error
  }
}

// Sample 3
// Requirements: Create a function to accept a number and return a string
// 1. 'Bad' if a given number is not an integer
// 2. 'O' if a given number is odd
// 3. 'E-' if a given number is even, < 0
// 4. 'E+K' if a given number is even 0 to 1,000
// 5. 'E+2K' if a given number is even, 1002 to 2,000
// 6. 'E++' if a given number is even, other than #3, #4, #5

function doInteger(number) {
  let result;
  if (Number.isInteger(number)) {
    if (number % 2 !== 0) {
      result = 'O';
    } else {
      if (number < 0) {
        result = 'E-';
      } else if (number >= 0 && number <= 1000) {
        result = 'E+K';
      } else if (number >= 1002 && number <= 2000) {
        result = 'E+2K';
      } else {
        result = 'E++';
      }
    }
  } else {
    result = 'Bad';
  }

  return result;
}

