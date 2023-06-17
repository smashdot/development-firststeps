const assert = require('assert');

class Computer {

  #printer;

  constructor() {
    this.#printer = new Printer();
  }

  name() {
    return 'Jupiter';
  }

  getPrinterName() {
    return this.#printer.name();
  }
}

class Printer {
  name() {
    return 'Xerox'
  }
}

const com = new Computer();

// [Solved] Main program talks to only the computer
const printerName = com.getPrinterName();

// Tests
assert.ok(printerName === 'Xerox');

// error - cannot access a private variable (printer)
assert.throws(() => com.printer.name());
