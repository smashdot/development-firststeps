const assert = require('assert');

// Approach #1

function main() {
  const dbConn = connectToDatabase(connectionString);
  getUsers(dbConn);
  getProductions(dbConn);
}

function connectToDatabase(connectionString) {
  return { ready: true };
}

function getUsers(dbConn) {
  return dbConn.findUsers();
}

function getProductions(dbConn) {
  return dbConn.findProducts();
}

// Approach #2

class DB1 {
  static #conn;

  constructor(connectionString) {
    DB1.#conn = { ready: true };
  }

  getConn() {
    // more control here
    return DB1.#conn;
  }
}

const db1 = new DB1();
const db1Conn1 = db1.getConn();
const db1Conn2 = db1.getConn();

// Tests
assert.deepStrictEqual(db1Conn1, { ready: true });
assert.deepStrictEqual(db1Conn2, { ready: true });

