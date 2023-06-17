const assert = require('assert');

class Computer {
  constructor() {
    this.printer = new Printer();
  }

  name() {
    return 'Jupiter';
  }

  getPrinter() {
    return this.printer;
  }
}

class Printer {
  name() {
    return 'Xerox'
  }
}

const com = new Computer();

// Main program talks to the computer
const printerName1 = com.getPrinter().name();
const printerName2 = com.printer.name();

// Tests
assert.ok(printerName1 === 'Xerox');
assert.ok(printerName2 === 'Xerox');
